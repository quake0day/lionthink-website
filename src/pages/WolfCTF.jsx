import {
  Shield, CheckCircle2, ArrowRight, Terminal, Bug,
  Users, GraduationCap, Building2, Zap, Database,
  BarChart3, Target, Lock, Server, Code, Brain
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WolfCTF = () => {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src="/logo.png" alt="狮思智创" className="h-10 w-auto" />
            <div className="flex flex-col leading-none text-[#002B5B]">
              <span className="font-bold text-lg tracking-wide">狮思智创</span>
              <span className="text-[10px] uppercase tracking-wider font-medium opacity-80">LionMind Intelligence</span>
            </div>
          </Link>
          <Link to="/" className="text-slate-600 hover:text-[#002B5B] font-medium">
            ← 返回首页
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-[#002B5B] to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <Shield className="text-red-400" size={32} />
            </div>
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider">网络安全实训平台</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            狼擎攻防实验室
            <span className="block text-3xl md:text-4xl text-blue-300 mt-2">WolfCTF</span>
          </h1>

          <p className="text-2xl text-blue-100 mb-8 max-w-3xl font-light">
            AI 自动生成漏洞实验 × AI 助教 × 即开即用攻防环境
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all">
              申请试用 <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold">
              查看演示视频
            </button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">核心亮点</h2>
            <p className="text-slate-500 text-lg">打造业界最全攻防学习中心</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bug,
                title: "CVE 自动转课程",
                desc: "自动将最新 CVE 转换为可学习的实验课程，课程内容始终保持最新"
              },
              {
                icon: Terminal,
                title: "浏览器内攻防",
                desc: "浏览器内运行 Linux/调试器/攻击环境，无需本地配置"
              },
              {
                icon: Database,
                title: "持续扩展实验库",
                desc: "持续扩展 CVE 实验库，打造业界最全攻防学习中心"
              },
              {
                icon: BarChart3,
                title: "行为数据驱动",
                desc: "技能图谱、学习能力分析，精准评估每位学员能力"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-slate-50 rounded-2xl hover:bg-[#002B5B] hover:text-white transition-all duration-300">
                <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:bg-white/20">
                  <item.icon className="text-[#002B5B] group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 group-hover:text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engine Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">AI 课程生成引擎</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                输入课程大纲、CVE 信息或企业技能需求，AI 自动生成完整的攻防实验课程体系。
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#002B5B] flex items-center justify-center shrink-0">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">课程脚本自动生成</h4>
                    <p className="text-slate-600 text-sm">根据漏洞原理自动生成教学脚本和实验步骤</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#002B5B] flex items-center justify-center shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">自动评分点设置</h4>
                    <p className="text-slate-600 text-sm">智能设置关键检查点，自动评估学员完成情况</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#002B5B] flex items-center justify-center shrink-0">
                    <Brain className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">AI 助教实时指导</h4>
                    <p className="text-slate-600 text-sm">智能助教实时诊断错误，提供个性化学习建议</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-green-400 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">WolfCTF Terminal</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-blue-400">$</span> wolfctf load CVE-2024-38077</p>
                <p className="text-slate-500">[*] Loading vulnerability environment...</p>
                <p className="text-slate-500">[*] Generating attack scenario...</p>
                <p className="text-slate-500">[*] Starting vulnerable container...</p>
                <p className="text-green-400">[+] Lab ready at 10.0.0.5:8080</p>
                <p><span className="text-blue-400">$</span> nmap -sV 10.0.0.5</p>
                <p className="text-slate-500">Starting Nmap scan...</p>
                <p className="text-yellow-400">[AI Assistant] 检测到目标运行 Windows RDL 服务</p>
                <p className="text-yellow-400">[AI Assistant] 建议使用 exploit/windows/rdp/...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analysis Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AI 行为数据分析</h2>
            <p className="text-slate-500 text-lg">全方位采集学习行为，精准评估技能水平</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Database className="text-[#002B5B]" /> 数据采集
              </h3>
              <ul className="space-y-4">
                {["键盘输入与命令序列", "代码编辑路径追踪", "错误频率与修复模式", "实验完成时间分析"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-[#002B5B]" /> 智能分析
              </h3>
              <ul className="space-y-4">
                {["学习路径可视化", "本体能力框架构建", "技能熟练度评估", "异常行为检测"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Report */}
      <section className="py-20 bg-[#002B5B] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 学习报告</h2>
            <p className="text-blue-200 text-lg">面向教师 / 企业培训负责人 / HR</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "技能雷达图", desc: "多维度展示攻防技能掌握程度" },
              { title: "行为序列可视化", desc: "完整记录学习过程与思考路径" },
              { title: "学习节奏分析", desc: "识别学习瓶颈，优化训练计划" },
              { title: "推荐学习任务", desc: "AI 智能推荐下阶段学习内容" },
              { title: "面试能力报告", desc: "企业版专属，用于招聘评估" },
              { title: "团队能力对比", desc: "团队整体技能分布与差距分析" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">适用场景</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "网络空间安全学院", desc: "高校网安专业实训" },
              { icon: Building2, title: "企业安全团队", desc: "红蓝对抗能力提升" },
              { icon: Users, title: "攻防演练训练营", desc: "CTF 竞赛备战训练" },
              { icon: Lock, title: "企业招聘测评", desc: "安全人才技能评估" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 border border-slate-200 rounded-xl hover:border-[#002B5B] transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
                  <item.icon className="text-[#002B5B]" size={28} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开始构建您的攻防实训体系</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            立即申请试用，体验 AI 驱动的下一代网络安全教育平台
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold flex items-center gap-2">
              申请试用 <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-semibold">
              联系我们
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002B5B] text-white py-8 border-t border-blue-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/logo.png" alt="狮思智创" className="h-8 w-auto" style={{filter: 'brightness(0) invert(1)'}} />
            <span className="font-bold">狮思智创</span>
          </div>
          <p className="text-blue-300/60 text-sm">© 2025 LionMind Innovation. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default WolfCTF;
