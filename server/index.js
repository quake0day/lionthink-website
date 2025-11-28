import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:4000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// In-memory storage for whitepaper requests (use database in production)
let whitepaperRequests = [];

// Generate password hash for initial setup
// Run this once to generate hash: node -e "import('bcryptjs').then(b => console.log(b.default.hashSync('@shisizhichuang', 10)))"
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('@shisizhichuang', 10);
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: '未授权访问' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token 无效或已过期' });
    }
    req.user = user;
    next();
  });
};

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: '请输入用户名和密码' });
  }

  // Verify username
  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  if (!isValidPassword) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  // Generate JWT token
  const token = jwt.sign(
    { username, role: 'admin' },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    success: true,
    token,
    message: '登录成功'
  });
});

// Verify token endpoint
app.get('/api/verify', authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// Whitepaper request endpoints
app.post('/api/whitepaper-requests', (req, res) => {
  const { name, organization, email } = req.body;

  if (!name || !organization || !email) {
    return res.status(400).json({ error: '请填写完整信息' });
  }

  const newRequest = {
    id: Date.now(),
    name,
    organization,
    email,
    timestamp: new Date().toISOString(),
    status: '待处理'
  };

  whitepaperRequests.push(newRequest);
  res.json({ success: true, message: '申请提交成功', data: newRequest });
});

// Get all whitepaper requests (protected)
app.get('/api/whitepaper-requests', authenticateToken, (req, res) => {
  // Sort by timestamp descending
  const sorted = [...whitepaperRequests].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );
  res.json(sorted);
});

// Update request status (protected)
app.patch('/api/whitepaper-requests/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const request = whitepaperRequests.find(r => r.id === parseInt(id));
  if (!request) {
    return res.status(404).json({ error: '申请记录不存在' });
  }

  request.status = status;
  res.json({ success: true, data: request });
});

// Delete request (protected)
app.delete('/api/whitepaper-requests/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const index = whitepaperRequests.findIndex(r => r.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: '申请记录不存在' });
  }

  whitepaperRequests.splice(index, 1);
  res.json({ success: true, message: '删除成功' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Admin username: ${ADMIN_USERNAME}`);
});
