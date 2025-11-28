import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronRight, Shield, Code, Cpu,
  Database, Brain, BarChart3, GraduationCap,
  Building2, Users, ArrowRight, CheckCircle2
} from 'lucide-react';
import WhitepaperModal from './components/WhitepaperModal';

// --- 组件部分 ---

// 导航栏
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', en: 'Home', href: '#home' },
    { name: '产品矩阵', en: 'Products', href: '#products' },
    { name: '核心引擎', en: 'AI Engine', href: '#engine' },
    { name: '解决方案', en: 'Solutions', href: '#solutions' },
    { name: '关于我们', en: 'About', href: '#footer' },
  ];

  return (
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' : 'bg-white/50 backdrop-blur-sm py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo - 适配蓝白风格 */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Logo 图标 */}
            <img src="/logo.png" alt="狮思智创" className="h-10 w-auto" />
            <div className="flex flex-col leading-none text-[#002B5B]">
              <span className="font-bold text-lg tracking-wide">狮思智创</span>
              <span className="text-[10px] uppercase tracking-wider font-medium opacity-80">LionMind Intelligence</span>
            </div>
          </div>

          {/* Desktop Menu - 文字颜色调整为深色 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="group flex flex-col items-center text-base font-medium transition-colors text-slate-600 hover:text-[#002B5B]"
                >
                  <span>{link.name}</span>
                </a>
            ))}
            <button className="bg-[#002B5B] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#003875] hover:shadow-lg hover:shadow-blue-900/20 transition-all transform hover:-translate-y-0.5">
              预约 Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden text-2xl focus:outline-none text-slate-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      className="flex flex-col py-2 border-b border-slate-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-slate-800 font-medium">{link.name}</span>
                    <span className="text-xs text-slate-400">{link.en}</span>
                  </a>
              ))}
              <button className="w-full bg-[#002B5B] text-white py-3 rounded-lg font-medium mt-2">
                预约 Demo
              </button>
            </div>
        )}
      </nav>
  );
};

// 首屏 Hero - 科技感蓝白风格
const Hero = ({ onWhitepaperClick }) => {
  return (
      <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* 动态渐变光晕背景 */}
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-to-br from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#002B5B]/10 via-blue-300/10 to-transparent rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>

        {/* 额外的动态光效 */}
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-[60px] animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[10%] w-[200px] h-[200px] bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-[50px] animate-float"></div>

        {/* 科技网格背景 */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(#002B5B 1px, transparent 1px), linear-gradient(90deg, #002B5B 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* 六边形科技纹理 */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.32V52.68L30 70L0 52.68V17.32L30 0z' fill='none' stroke='%23002B5B' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>

        {/* 浮动粒子装饰 - 增加更多粒子 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
          <div className="absolute top-40 left-[20%] w-1.5 h-1.5 bg-[#002B5B]/30 rounded-full animate-float-delayed"></div>
          <div className="absolute top-60 left-[15%] w-1 h-1 bg-blue-300/50 rounded-full animate-float"></div>
          <div className="absolute top-32 right-[25%] w-2.5 h-2.5 bg-blue-500/20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-80 right-[30%] w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-float"></div>
          <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-blue-400/25 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-60 right-[20%] w-1 h-1 bg-[#002B5B]/40 rounded-full animate-float"></div>
          {/* 新增粒子 */}
          <div className="absolute top-[15%] left-[40%] w-3 h-3 bg-blue-300/20 rounded-full animate-float"></div>
          <div className="absolute top-[45%] left-[5%] w-2 h-2 bg-cyan-400/25 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-[25%] right-[15%] w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-float"></div>
          <div className="absolute top-[70%] left-[35%] w-2.5 h-2.5 bg-[#002B5B]/20 rounded-full animate-float-delayed"></div>
        </div>

        {/* 科技线条装饰 - 更复杂的图案 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,200 Q250,150 500,200 T1000,200" stroke="#002B5B" strokeWidth="1" fill="none" />
            <path d="M0,400 Q250,350 500,400 T1000,400" stroke="#002B5B" strokeWidth="1" fill="none" />
            <path d="M0,600 Q250,550 500,600 T1000,600" stroke="#002B5B" strokeWidth="1" fill="none" />
            <path d="M0,800 Q250,750 500,800 T1000,800" stroke="#002B5B" strokeWidth="1" fill="none" />
            {/* 新增对角线 */}
            <path d="M0,0 Q500,500 1000,1000" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.5" />
            <path d="M1000,0 Q500,500 0,1000" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.5" />
            {/* 圆环装饰 */}
            <circle cx="150" cy="150" r="80" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="850" cy="300" r="120" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="200" cy="700" r="100" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>
        </div>

        {/* 连接线动画装饰 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full opacity-[0.08]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* 节点连接网络 */}
            <circle cx="100" cy="200" r="4" fill="#002B5B" className="animate-pulse" />
            <circle cx="300" cy="150" r="3" fill="#002B5B" />
            <circle cx="250" cy="350" r="5" fill="#002B5B" className="animate-pulse" />
            <circle cx="150" cy="500" r="3" fill="#002B5B" />
            <circle cx="400" cy="400" r="4" fill="#002B5B" />
            <line x1="100" y1="200" x2="300" y2="150" stroke="#002B5B" strokeWidth="0.5" />
            <line x1="100" y1="200" x2="250" y2="350" stroke="#002B5B" strokeWidth="0.5" />
            <line x1="300" y1="150" x2="250" y2="350" stroke="#002B5B" strokeWidth="0.5" />
            <line x1="250" y1="350" x2="150" y2="500" stroke="#002B5B" strokeWidth="0.5" />
            <line x1="250" y1="350" x2="400" y2="400" stroke="#002B5B" strokeWidth="0.5" />
          </svg>
        </div>

        {/* 左侧 3D 线框 AI 人形头像 */}
        <div className="absolute left-[20%] top-[15%] -translate-y-1/2 pointer-events-none animate-float-slow">
          <svg className="w-[700px] h-[700px] opacity-[0.12]" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#002B5B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* 头部轮廓 - 3D椭圆形 */}
            <ellipse cx="200" cy="160" rx="95" ry="120" stroke="url(#headGradient)" strokeWidth="1" fill="none">
              <animate attributeName="rx" values="95;97;95" dur="4s" repeatCount="indefinite" />
              <animate attributeName="ry" values="120;122;120" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="160" rx="85" ry="110" stroke="#002B5B" strokeWidth="0.5" fill="none" opacity="0.5">
              <animate attributeName="rx" values="85;87;85" dur="4s" repeatCount="indefinite" />
              <animate attributeName="ry" values="110;112;110" dur="4s" repeatCount="indefinite" />
            </ellipse>

            {/* 头部横向网格线 - 带微动 */}
            <ellipse cx="200" cy="80" rx="70" ry="15" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="15;16;15" dur="3s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="110" rx="85" ry="18" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="18;19;18" dur="3.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="140" rx="92" ry="20" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="20;21;20" dur="4s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="170" rx="94" ry="20" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="20;21;20" dur="3.8s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="200" rx="90" ry="18" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="18;19;18" dur="3.2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="230" rx="80" ry="15" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="15;16;15" dur="3.6s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="200" cy="255" rx="60" ry="10" stroke="#002B5B" strokeWidth="0.4" fill="none">
              <animate attributeName="ry" values="10;11;10" dur="3s" repeatCount="indefinite" />
            </ellipse>

            {/* 头部纵向网格线 */}
            <path d="M200 40 Q200 160 200 280" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <path d="M150 55 Q140 160 155 270" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <path d="M250 55 Q260 160 245 270" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <path d="M120 80 Q105 160 125 255" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <path d="M280 80 Q295 160 275 255" stroke="#002B5B" strokeWidth="0.4" fill="none" />


            {/* 脖子 - 机械风格 */}
            <path d="M165 270 L160 310 L155 320 Q200 335 245 320 L240 310 L235 270" stroke="#002B5B" strokeWidth="0.6" fill="none" />
            <line x1="170" y1="275" x2="165" y2="315" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="185" y1="278" x2="180" y2="320" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="200" y1="280" x2="200" y2="325" stroke="#002B5B" strokeWidth="0.4" />
            <line x1="215" y1="278" x2="220" y2="320" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="230" y1="275" x2="235" y2="315" stroke="#002B5B" strokeWidth="0.3" />
            {/* 脖子环形装饰 */}
            <ellipse cx="200" cy="290" rx="30" ry="8" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <ellipse cx="200" cy="305" rx="35" ry="10" stroke="#002B5B" strokeWidth="0.4" fill="none" />

            {/* 肩膀 - 机械装甲风格 */}
            {/* 左肩 */}
            <path d="M155 320 L140 330 L100 340 L60 360 L50 400 L55 440" stroke="#002B5B" strokeWidth="0.7" fill="none" />
            <path d="M140 330 L130 380 L120 420" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <rect x="55" y="355" width="50" height="35" rx="5" stroke="#002B5B" strokeWidth="0.5" fill="none" transform="rotate(-15 80 372)" />
            <circle cx="80" cy="372" r="12" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <circle cx="80" cy="372" r="6" stroke="#0EA5E9" strokeWidth="0.4" fill="none">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* 左肩装甲板 */}
            <path d="M60 360 L75 350 L100 345 L105 360 L85 375 L60 370 Z" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <line x1="70" y1="355" x2="95" y2="352" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="68" y1="365" x2="90" y2="362" stroke="#002B5B" strokeWidth="0.3" />

            {/* 右肩 */}
            <path d="M245 320 L260 330 L300 340 L340 360 L350 400 L345 440" stroke="#002B5B" strokeWidth="0.7" fill="none" />
            <path d="M260 330 L270 380 L280 420" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <rect x="295" y="355" width="50" height="35" rx="5" stroke="#002B5B" strokeWidth="0.5" fill="none" transform="rotate(15 320 372)" />
            <circle cx="320" cy="372" r="12" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <circle cx="320" cy="372" r="6" stroke="#0EA5E9" strokeWidth="0.4" fill="none">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* 右肩装甲板 */}
            <path d="M340 360 L325 350 L300 345 L295 360 L315 375 L340 370 Z" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <line x1="330" y1="355" x2="305" y2="352" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="332" y1="365" x2="310" y2="362" stroke="#002B5B" strokeWidth="0.3" />

            {/* 胸部中心装饰 - 能量核心 */}
            <path d="M155 330 L145 380 L160 430 L200 450 L240 430 L255 380 L245 330" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <circle cx="200" cy="390" r="25" stroke="#002B5B" strokeWidth="0.6" fill="none" />
            <circle cx="200" cy="390" r="18" stroke="#0EA5E9" strokeWidth="0.5" fill="none">
              <animate attributeName="r" values="18;20;18" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy="390" r="10" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <circle cx="200" cy="390" r="4" fill="#0EA5E9" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>
            {/* 胸部连接线 */}
            <line x1="175" y1="390" x2="155" y2="380" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="225" y1="390" x2="245" y2="380" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="200" y1="365" x2="200" y2="340" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="200" y1="415" x2="200" y2="440" stroke="#002B5B" strokeWidth="0.3" />

            {/* 耳朵装饰 - 左 (机械化) */}
            <rect x="85" y="130" width="25" height="60" rx="4" stroke="#002B5B" strokeWidth="0.6" fill="none" />
            <rect x="80" y="140" width="10" height="40" rx="2" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <circle cx="97" cy="145" r="6" stroke="#0EA5E9" strokeWidth="0.5" fill="none">
              <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="97" cy="145" r="3" fill="#0EA5E9" opacity="0.4" />
            <line x1="90" y1="155" x2="105" y2="155" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="90" y1="165" x2="105" y2="165" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="90" y1="175" x2="105" y2="175" stroke="#002B5B" strokeWidth="0.3" />
            <circle cx="97" cy="180" r="4" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            {/* 左耳天线 */}
            <line x1="85" y1="135" x2="70" y2="120" stroke="#002B5B" strokeWidth="0.4" />
            <circle cx="68" cy="118" r="3" stroke="#0EA5E9" strokeWidth="0.4" fill="none">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* 耳朵装饰 - 右 (机械化) */}
            <rect x="290" y="130" width="25" height="60" rx="4" stroke="#002B5B" strokeWidth="0.6" fill="none" />
            <rect x="310" y="140" width="10" height="40" rx="2" stroke="#002B5B" strokeWidth="0.5" fill="none" />
            <circle cx="303" cy="145" r="6" stroke="#0EA5E9" strokeWidth="0.5" fill="none">
              <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="303" cy="145" r="3" fill="#0EA5E9" opacity="0.4" />
            <line x1="295" y1="155" x2="310" y2="155" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="295" y1="165" x2="310" y2="165" stroke="#002B5B" strokeWidth="0.3" />
            <line x1="295" y1="175" x2="310" y2="175" stroke="#002B5B" strokeWidth="0.3" />
            <circle cx="303" cy="180" r="4" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            {/* 右耳天线 */}
            <line x1="315" y1="135" x2="330" y2="120" stroke="#002B5B" strokeWidth="0.4" />
            <circle cx="332" cy="118" r="3" stroke="#0EA5E9" strokeWidth="0.4" fill="none">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* 头顶装饰 - 电路图案 */}
            <circle cx="200" cy="55" r="15" stroke="#0EA5E9" strokeWidth="0.6" fill="none" />
            <circle cx="200" cy="55" r="8" stroke="#002B5B" strokeWidth="0.4" fill="none" />
            <circle cx="200" cy="55" r="3" fill="#0EA5E9" opacity="0.5">
              <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
            </circle>

            {/* 额头数据流 */}
            <path d="M160 90 L180 85 L185 95 L200 90 L215 95 L220 85 L240 90" stroke="#0EA5E9" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* 面部扫描线效果 */}
            <line x1="110" y1="120" x2="290" y2="120" stroke="#0EA5E9" strokeWidth="0.3" opacity="0.4">
              <animate attributeName="y1" values="100;250;100" dur="4s" repeatCount="indefinite" />
              <animate attributeName="y2" values="100;250;100" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
            </line>

            {/* 数据点装饰 */}
            <circle cx="130" cy="100" r="2" fill="#0EA5E9" opacity="0.6" />
            <circle cx="270" cy="100" r="2" fill="#0EA5E9" opacity="0.6" />
            <circle cx="140" cy="200" r="1.5" fill="#002B5B" opacity="0.5" />
            <circle cx="260" cy="200" r="1.5" fill="#002B5B" opacity="0.5" />
            <circle cx="200" cy="250" r="2" fill="#0EA5E9" opacity="0.4" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* 标签 - 增强科技感 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-white border border-blue-200/50 text-[#002B5B] text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-500/5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              AI-Native Education Platform
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              用 AI 革新 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002B5B] via-blue-600 to-[#002B5B]">教育体验</span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl text-slate-600 font-light border-l-4 border-gradient-to-b from-blue-400 to-[#002B5B] pl-4 leading-relaxed" style={{borderImage: 'linear-gradient(to bottom, #60a5fa, #002B5B) 1'}}>
                构建从课程生成、实验环境、行为数据分析到学习评测的完整智能教育体系。
              </p>
              <p className="text-slate-400 text-sm max-w-lg">
                Building a fully intelligent education pipeline—from course generation to lab execution, behavior analytics, and automated assessment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#002B5B] to-blue-700 hover:from-[#003875] hover:to-blue-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:shadow-blue-900/30">
                预约产品演示
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onWhitepaperClick}
                className="px-8 py-4 bg-white/80 hover:bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold flex items-center justify-center transition-all hover:shadow-lg backdrop-blur-sm">
                申请技术白皮书
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>AI 驱动</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>即开即用</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-100">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>数据赋能</span>
              </div>
            </div>
          </div>

          {/* 右侧抽象视觉展示 - 增强科技感 */}
          <div className="hidden md:block relative h-[520px]">
            {/* 外圈光环 - 增强 */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/30 via-cyan-400/10 to-[#002B5B]/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 rounded-3xl blur-xl opacity-50"></div>

            {/* 悬浮装饰卡片 - 左上 */}
            <div className="absolute -top-4 -left-8 w-32 h-20 bg-white/80 backdrop-blur-lg rounded-xl border border-blue-200/50 shadow-lg p-3 transform -rotate-6 animate-float z-20">
              <div className="text-[10px] text-slate-400 mb-1">实时数据</div>
              <div className="text-lg font-bold text-[#002B5B]">32,975</div>
              <div className="text-[9px] text-green-500">↑ 行为事件</div>
            </div>

            {/* 悬浮装饰卡片 - 右下 */}
            <div className="absolute -bottom-2 -right-6 w-36 h-16 bg-gradient-to-r from-[#002B5B] to-blue-700 backdrop-blur-lg rounded-xl shadow-lg p-3 transform rotate-3 animate-float-delayed z-20">
              <div className="text-[10px] text-blue-200 mb-0.5">AI 分析准确率</div>
              <div className="text-xl font-bold text-white">98.4%</div>
            </div>

            {/* 科技圆环装饰 */}
            <div className="absolute -top-12 right-8 w-24 h-24 border-2 border-dashed border-blue-300/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-8 left-4 w-16 h-16 border border-cyan-400/20 rounded-full"></div>

            <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl shadow-blue-900/10 p-6 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-all duration-500">
              {/* 顶部渐变条 */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 via-[#002B5B] to-cyan-400 rounded-t-2xl"></div>

              {/* 角落装饰 - 增强 */}
              <div className="absolute top-3 right-3 w-24 h-24 border border-blue-200/20 rounded-full"></div>
              <div className="absolute top-6 right-6 w-16 h-16 border border-blue-300/30 rounded-full"></div>
              <div className="absolute top-9 right-9 w-8 h-8 border border-blue-400/40 rounded-full"></div>

              {/* 左下角装饰 */}
              <div className="absolute bottom-16 left-3 w-12 h-12 border border-cyan-300/20 rounded-lg rotate-45"></div>

              {/* 模拟代码/数据界面 */}
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    狮思 AI 引擎 v2.0
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-600">
                  <div className="flex justify-between p-3 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      &gt; 正在生成课程内容...
                    </span>
                    <span className="text-blue-600 font-bold">完成 (0.4s)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      &gt; 正在部署攻防实验环境...
                    </span>
                    <span className="text-blue-600 font-bold">完成 (1.2s)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-gradient-to-r from-slate-50 to-amber-50/50 rounded-lg border border-slate-100 hover:border-amber-200 transition-colors">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                      &gt; 正在分析学生行为数据...
                    </span>
                    <span className="text-amber-500 font-bold">处理中</span>
                  </div>

                  <div className="pt-4">
                    <div className="bg-gradient-to-br from-[#002B5B] to-blue-800 p-5 rounded-xl text-white shadow-xl shadow-blue-900/20 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl"></div>
                      <div className="flex justify-between items-center mb-3 relative">
                        <p className="text-blue-200 text-xs tracking-wide">学生能力评估报告</p>
                        <span className="text-[10px] text-blue-300/60">ID: CE1046501</span>
                      </div>
                      <div className="flex justify-between items-end mb-3 relative">
                        <div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">A+</span>
                          <span className="text-blue-200 text-sm ml-2">95/100</span>
                        </div>
                        <span className="text-xs text-green-300 bg-green-500/20 px-2 py-0.5 rounded">班级前 5%</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] mb-3">
                        <div className="flex justify-between">
                          <span className="text-blue-300/70">编程熟练度</span>
                          <span className="text-blue-100">92 ⭐</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-300/70">工具掌握</span>
                          <span className="text-blue-100">95 ⭐</span>
                        </div>
                      </div>
                      <div className="w-full bg-blue-900/50 h-1.5 rounded-full overflow-hidden relative">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1.5 rounded-full transition-all duration-1000" style={{width: '95%'}}></div>
                      </div>
                      <p className="text-[9px] text-blue-300/50 mt-2">基于 32,975 条行为数据分析</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right relative">
                <p className="text-5xl font-bold text-slate-100/80 select-none tracking-wider">LIONMIND</p>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100/50 to-slate-100/50 rounded-2xl border border-slate-200/30"></div>
            <div className="absolute -z-20 -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>
  );
};

// 产品矩阵 - 颜色适配
const ProductCard = ({ title, enTitle, badge, description, features, icon: Icon, colorClass, link }) => (
    <div className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1">
      <div className={`absolute top-0 left-0 w-full h-1 ${colorClass} rounded-t-2xl`}></div>

      <div className="flex justify-between items-start mb-6">
        <div className={`p-4 rounded-xl bg-slate-50 text-[#002B5B] group-hover:bg-[#002B5B] group-hover:text-white transition-colors duration-300`}>
          <Icon size={32} />
        </div>
        <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">{badge}</span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm font-medium text-slate-400 uppercase tracking-wide mb-4">{enTitle}</p>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{description}</p>

      <div className="space-y-3 mb-8">
        {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-[#002B5B] mt-0.5 shrink-0" />
              <span>{feature}</span>
            </div>
        ))}
      </div>

      <Link to={link} className="w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:border-[#002B5B] hover:text-[#002B5B] transition-colors flex items-center justify-center gap-2">
        了解详情 <ChevronRight size={16} />
      </Link>
    </div>
);

const Products = () => {
  const products = [
    {
      title: "狼擎 WolfCTF",
      enTitle: "Cyber Offense & Defense Lab",
      badge: "网络安全",
      description: "AI 自动将最新 CVE 转化为可练习的攻防实验，打造业界最全攻防学习中心。",
      features: ["CVE 自动转实验课程", "浏览器内运行攻击环境", "AI 助教实时错误诊断"],
      icon: Shield,
      colorClass: "bg-blue-900",
      link: "/wolfctf"
    },
    {
      title: "朔源 SoraEdu",
      enTitle: "Future Classroom for K12",
      badge: "中小学编程",
      description: "面向中小学的 AI 编程实验体系，让学生在浏览器里做真正的实验。",
      features: ["自动生成适龄课程", "图形化/Python 双模", "多维度能力分析报告"],
      icon: Code,
      colorClass: "bg-blue-500",
      link: "/soraedu"
    },
    {
      title: "凌科 OSLab",
      enTitle: "OS Lab in Browser",
      badge: "高校计算机",
      description: "浏览器里的操作系统实验室，无需本地配置即可学习内核与编译原理。",
      features: ["在线 Linux 内核实验", "系统调用深度调试", "全自动行为数据评分"],
      icon: Cpu,
      colorClass: "bg-slate-600",
      link: "/oslab"
    }
  ];

  return (
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心产品矩阵</h2>
            <p className="text-slate-500 text-lg">Our Core Product Suite · 面向高校、企业与中小学</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, idx) => (
                <ProductCard key={idx} {...p} />
            ))}
          </div>
        </div>
      </section>
  );
};

// AI 引擎展示
const Engine = () => {
  return (
      <section id="engine" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">AI 教育引擎</h2>
              <p className="text-[#002B5B] font-medium mb-6">The LionMind AI Education Engine</p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                教育的核心正在被 AI 重塑。狮思智创不仅仅提供工具，更构建了从内容生产到效果评估的完整数据闭环。
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Database className="text-[#002B5B]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">AI 课程生成引擎</h4>
                    <p className="text-sm text-slate-500 mb-2">Generative Content Engine</p>
                    <p className="text-slate-600 text-sm">根据大纲或 CVE 信息自动生成课程脚本、实验步骤与评分点。大幅降低教研成本。</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Brain className="text-[#002B5B]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">AI 行为数据分析</h4>
                    <p className="text-sm text-slate-500 mb-2">Behavioral Analytics</p>
                    <p className="text-slate-600 text-sm">采集键盘输入、终端命令序列与代码编辑路径。分析学习者的思考模式与异常行为。</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <BarChart3 className="text-[#002B5B]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">AI 学习报告生成</h4>
                    <p className="text-sm text-slate-500 mb-2">Smart Assessment</p>
                    <p className="text-slate-600 text-sm">生成技能雷达图、行为序列可视化与个性化学习推荐。为企业提供精准的人才画像。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              {/* 抽象示意图：展示输入 -> AI 处理 -> 输出的过程 */}
              <div className="bg-[#002B5B] rounded-2xl p-8 shadow-2xl shadow-blue-900/20 relative overflow-hidden text-white/90 font-mono text-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="mb-8 border-b border-blue-800 pb-4">
                  <span className="text-blue-300"># Input Data Source</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">CVE-2024-38077</span>
                    <span className="text-blue-400">+</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">Syllabus.pdf</span>
                  </div>
                </div>

                <div className="flex justify-center my-4">
                  <div className="animate-pulse text-blue-300">↓ AI Processing ↓</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded border border-blue-400/30">
                    <span className="text-blue-200 block mb-2">[Course Script]</span>
                    <div className="space-y-1 text-xs text-blue-200/50">
                      <div className="w-full bg-white/10 h-1.5 rounded"></div>
                      <div className="w-3/4 bg-white/10 h-1.5 rounded"></div>
                      <div className="w-5/6 bg-white/10 h-1.5 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded border border-blue-400/30">
                    <span className="text-blue-200 block mb-2">[Lab Env]</span>
                    <div className="text-xs text-green-400">
                      $ docker up<br/>
                      $ init debugger<br/>
                      $ ready.
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-blue-800">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-300">Output: Talent Profile</span>
                    <span className="text-green-400 font-bold">Accuracy: 98.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

// 解决方案 Tab - 保持干净的白底
const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "高等院校", icon: Building2, desc: "Higher Education" },
    { name: "企业培训", icon: Users, desc: "Enterprise" },
    { name: "中小学", icon: GraduationCap, desc: "K-12" },
  ];

  const contents = [
    {
      title: "网络空间安全与计算机学院解决方案",
      painPoints: ["课程内容更新滞后于技术发展", "实验环境部署维护耗时耗力", "学生能力评估缺乏数据支撑"],
      solution: "狼擎 (WolfCTF) + 凌科 (OSLab) 双引擎驱动",
      outcome: "形成可量化、可持续、可扩展的教学体系，助力一流学科建设。",
      features: ["一键启动攻防/OS实验环境", "教学全过程数据留痕", "自动生成学期成绩报告"]
    },
    {
      title: "企业 IT 技能培训与招聘测评",
      painPoints: ["难以评估候选人真实代码能力", "内部技术培训缺乏实战场景", "员工技能画像模糊"],
      solution: "定制化 Boot Camp + 岗位技能模型",
      outcome: "大幅降低招聘错判率，快速提升团队实战技术水位。",
      features: ["基于真实漏洞的攻防演练", "反作弊面试环境", "岗位匹配度分析"]
    },
    {
      title: "中小学人工智能与信奥普及",
      painPoints: ["缺乏适龄的 AI 教学内容", "实验环境配置门槛高", "无法精准掌握学生兴趣点"],
      solution: "朔源 (SoraEdu) 智能化课堂",
      outcome: "配合校内 ICT 课程改革，落实科学教育加法。",
      features: ["图形化与代码无缝切换", "家长/教师双端数据看板", "游戏化学习路径"]
    }
  ];

  return (
      <section id="solutions" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">行业解决方案</h2>
            <p className="text-slate-500">Industry Solutions · 深度赋能不同场景</p>
          </div>

          {/* Tab Header */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, idx) => (
                <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${activeTab === idx ? 'bg-[#002B5B] text-white shadow-lg scale-105' : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-[#002B5B]'}`}
                >
                  <tab.icon size={18} />
                  <div className="text-left">
                    <div className="leading-none">{tab.name}</div>
                    <div className="text-[10px] opacity-70 mt-1 font-normal">{tab.desc}</div>
                  </div>
                </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{contents[activeTab].title}</h3>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">行业痛点 (Pain Points)</h4>
                <ul className="space-y-3">
                  {contents[activeTab].painPoints.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <span className="text-red-400 font-bold text-lg leading-none">×</span>
                        <span>{p}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#002B5B] uppercase tracking-wider mb-4">狮思方案 (Our Solution)</h4>
                <p className="font-medium text-slate-800 mb-4">{contents[activeTab].solution}</p>
                <ul className="space-y-3">
                  {contents[activeTab].features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <CheckCircle2 size={18} className="text-green-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100 bg-blue-50/30 -mx-8 -mb-12 p-8 rounded-b-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-700 font-bold text-xs uppercase">Outcome</div>
                <p className="text-[#002B5B] font-medium">{contents[activeTab].outcome}</p>
              </div>
            </div>
          </div>

        </div>
      </section>
  );
};

// 页脚 - 使用深海蓝背景
const Footer = ({ onWhitepaperClick }) => {
  return (
      <footer id="footer" className="bg-[#002B5B] text-white pt-20 pb-10 border-t border-blue-900">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="狮思智创" className="h-8 w-auto" />
              <span className="font-bold text-lg">狮思智创</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 opacity-80">
              用 AI 构建下一代教育基础设施。<br/>
              让学习更高效、更公平、更智能。
            </p>
            <div className="text-blue-200 text-xs opacity-60">
              © 2025 LionMind Innovation.<br/>All Rights Reserved.
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">产品矩阵</h4>
            <ul className="space-y-3 text-blue-100/70 text-sm">
              <li><Link to="/wolfctf" className="hover:text-white transition-colors">狼擎 WolfCTF</Link></li>
              <li><Link to="/soraedu" className="hover:text-white transition-colors">朔源 SoraEdu</Link></li>
              <li><Link to="/oslab" className="hover:text-white transition-colors">凌科 OSLab</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">解决方案</h4>
            <ul className="space-y-3 text-blue-100/70 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">高等院校</a></li>
              <li><a href="#" className="hover:text-white transition-colors">企业培训</a></li>
              <li><a href="#" className="hover:text-white transition-colors">中小学编程</a></li>
              <li><a href="#" className="hover:text-white transition-colors">企业招聘测评</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">联系我们</h4>
            <ul className="space-y-3 text-blue-100/70 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                企业合作: partner@sszc.ai
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                高校合作: edu@sszc.ai
              </li>
              <li className="mt-4">
                <button
                  onClick={onWhitepaperClick}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-sm transition-colors text-white">
                  申请技术白皮书
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300/60">
          <p>京ICP备XXXXXXXX号-1</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">服务条款</a>
          </div>
        </div>
      </footer>
  );
};

// 主应用入口
const App = () => {
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);

  return (
      <div className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <Hero onWhitepaperClick={() => setIsWhitepaperModalOpen(true)} />
        <Products />
        <Engine />
        <Solutions />
        <Footer onWhitepaperClick={() => setIsWhitepaperModalOpen(true)} />
        <WhitepaperModal
          isOpen={isWhitepaperModalOpen}
          onClose={() => setIsWhitepaperModalOpen(false)}
        />
      </div>
  );
};

export default App;
