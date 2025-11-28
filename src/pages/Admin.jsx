import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Users, Mail, Building2, Clock,
  CheckCircle, Trash2, LogOut, Download
} from 'lucide-react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [requests, setRequests] = useState([]);

  // 检查登录状态
  useEffect(() => {
    const adminSession = sessionStorage.getItem('adminLoggedIn');
    if (adminSession === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // 加载申请数据
  useEffect(() => {
    if (isLoggedIn) {
      loadRequests();
    }
  }, [isLoggedIn]);

  const loadRequests = () => {
    const data = JSON.parse(localStorage.getItem('whitepaperRequests') || '[]');
    // 按时间倒序排列
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setRequests(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // 简单的登录验证
    if (loginForm.username === 'admin' && loginForm.password === '@shisizhichuang') {
      sessionStorage.setItem('adminLoggedIn', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('用户名或密码错误');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
  };

  const updateStatus = (id, newStatus) => {
    const updated = requests.map(req =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
    localStorage.setItem('whitepaperRequests', JSON.stringify(updated));
  };

  const deleteRequest = (id) => {
    if (window.confirm('确定要删除这条申请记录吗？')) {
      const updated = requests.filter(req => req.id !== id);
      setRequests(updated);
      localStorage.setItem('whitepaperRequests', JSON.stringify(updated));
    }
  };

  const exportToCSV = () => {
    const headers = ['姓名', '机构', '邮箱', '申请时间', '状态'];
    const csvContent = [
      headers.join(','),
      ...requests.map(req => [
        req.name,
        req.organization,
        req.email,
        new Date(req.timestamp).toLocaleString('zh-CN'),
        req.status
      ].join(','))
    ].join('\n');

    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `白皮书申请_${new Date().toLocaleDateString('zh-CN')}.csv`;
    link.click();
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // 登录页面
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-400 via-[#002B5B] to-blue-400"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <Link to="/" className="inline-block mb-4">
                <img src="/logo.png" alt="狮思智创" className="h-12 w-auto mx-auto" />
              </Link>
              <h1 className="text-2xl font-bold text-slate-900">后台管理系统</h1>
              <p className="text-slate-500 text-sm mt-2">请登录以管理白皮书申请</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">用户名</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B]"
                  placeholder="请输入用户名"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">密码</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B]"
                  placeholder="请输入密码"
                  required
                />
              </div>

              {loginError && (
                <p className="text-red-500 text-sm text-center">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#002B5B] hover:bg-[#003875] text-white rounded-lg font-semibold transition-colors"
              >
                登录
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-slate-500 hover:text-[#002B5B]">
                ← 返回首页
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 管理后台
  return (
    <div className="min-h-screen bg-slate-100">
      {/* 顶部导航 */}
      <nav className="bg-[#002B5B] text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src="/logo.png" alt="狮思智创" className="h-8 w-auto" />
            </Link>
            <span className="font-bold">后台管理系统</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-blue-200 hover:text-white text-sm">
              返回首页
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors"
            >
              <LogOut size={16} />
              退出登录
            </button>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <div className="container mx-auto px-6 py-8">
        {/* 统计卡片 */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText className="text-[#002B5B]" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm">总申请数</p>
                <p className="text-2xl font-bold text-slate-900">{requests.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                <Clock className="text-amber-600" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm">待处理</p>
                <p className="text-2xl font-bold text-slate-900">
                  {requests.filter(r => r.status === '待处理').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm">已发送</p>
                <p className="text-2xl font-bold text-slate-900">
                  {requests.filter(r => r.status === '已发送').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                <Users className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-sm">今日新增</p>
                <p className="text-2xl font-bold text-slate-900">
                  {requests.filter(r => {
                    const today = new Date().toDateString();
                    return new Date(r.timestamp).toDateString() === today;
                  }).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 申请列表 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-900">白皮书申请列表</h2>
            <button
              onClick={exportToCSV}
              disabled={requests.length === 0}
              className="flex items-center gap-2 px-4 py-2 bg-[#002B5B] hover:bg-[#003875] text-white rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={16} />
              导出 CSV
            </button>
          </div>

          {requests.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <FileText size={48} className="mx-auto mb-4 opacity-30" />
              <p>暂无申请记录</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">姓名</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">机构</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">邮箱</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">申请时间</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">状态</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-slate-600">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {requests.map((request) => (
                    <tr key={request.id} className="hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-slate-400" />
                          <span className="text-slate-900">{request.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 size={16} className="text-slate-400" />
                          <span className="text-slate-600">{request.organization}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Mail size={16} className="text-slate-400" />
                          <a href={`mailto:${request.email}`} className="text-[#002B5B] hover:underline">
                            {request.email}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">
                        {formatDate(request.timestamp)}
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={request.status}
                          onChange={(e) => updateStatus(request.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${
                            request.status === '待处理'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          <option value="待处理">待处理</option>
                          <option value="已发送">已发送</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteRequest(request.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                          title="删除"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
