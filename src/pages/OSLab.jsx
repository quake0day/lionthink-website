import {
  Cpu, CheckCircle2, ArrowRight, Terminal, Server,
  GraduationCap, Building2, BarChart3, Brain, Layers,
  HardDrive, GitBranch, FileCode, Monitor, Cog, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OSLab = () => {
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <Cpu className="text-emerald-400" size={32} />
            </div>
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">高校计算机实验平台</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            凌科 OS 实验平台
            <span className="block text-3xl md:text-4xl text-slate-400 mt-2">OSLab</span>
          </h1>

          <p className="text-2xl text-slate-300 mb-8 max-w-3xl font-light">
            浏览器里的操作系统实验室
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2 transition-all">
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
            <p className="text-slate-500 text-lg">一键运行，无需本地配置</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HardDrive,
                title: "OS 内核实验",
                desc: "支持 OS 内核实验、系统调用、内存调度、编译链等"
              },
              {
                icon: Server,
                title: "云端环境",
                desc: "一键运行虚拟机/LXC 环境，无需本地配置"
              },
              {
                icon: BarChart3,
                title: "行为报告",
                desc: "生成真实实验行为报告，用于课堂评估或面试"
              },
              {
                icon: Brain,
                title: "AI 助教",
                desc: "智能诊断实验错误，提供个性化学习指导"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-700 hover:text-white transition-all duration-300">
                <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:bg-white/20">
                  <item.icon className="text-slate-700 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiment Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">实验类型</h2>
            <p className="text-slate-500 text-lg">覆盖操作系统核心知识点</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "进程管理实验",
                items: ["进程创建与调度", "进程同步与通信", "死锁检测与处理"]
              },
              {
                icon: HardDrive,
                title: "内存管理实验",
                items: ["页式内存管理", "段式内存管理", "虚拟内存实现"]
              },
              {
                icon: FileCode,
                title: "文件系统实验",
                items: ["文件系统结构", "目录管理", "磁盘调度算法"]
              },
              {
                icon: GitBranch,
                title: "系统调用实验",
                items: ["系统调用机制", "中断处理", "内核态切换"]
              },
              {
                icon: Cog,
                title: "编译原理实验",
                items: ["词法分析", "语法分析", "代码生成"]
              },
              {
                icon: Terminal,
                title: "Shell 实验",
                items: ["命令解析", "管道实现", "作业控制"]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <item.icon className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
                <ul className="space-y-2">
                  {item.items.map((subItem, subIdx) => (
                    <li key={subIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="text-emerald-500" size={16} />
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">真实 Linux 环境</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                在浏览器中直接操作真实的 Linux 系统，支持 GDB 调试、内核编译、系统调用跟踪等高级操作。
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                    <Terminal className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">完整终端体验</h4>
                    <p className="text-slate-600 text-sm">支持 Bash、Vim、GCC、GDB 等常用工具</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                    <Monitor className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">图形化调试</h4>
                    <p className="text-slate-600 text-sm">内存布局可视化、进程状态实时监控</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center shrink-0">
                    <Cog className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">内核级操作</h4>
                    <p className="text-slate-600 text-sm">支持内核模块加载、系统调用追踪</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-green-400 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2">OSLab Terminal - Ubuntu 22.04</span>
              </div>
              <div className="space-y-1 text-xs md:text-sm">
                <p><span className="text-blue-400">student@oslab</span>:<span className="text-purple-400">~/lab3</span>$ cat process.c</p>
                <p className="text-slate-500">#include &lt;stdio.h&gt;</p>
                <p className="text-slate-500">#include &lt;unistd.h&gt;</p>
                <p className="text-slate-500">int main() {"{"}</p>
                <p className="text-slate-500">    pid_t pid = fork();</p>
                <p className="text-slate-500">    ...</p>
                <p className="text-slate-500">{"}"}</p>
                <p><span className="text-blue-400">student@oslab</span>:<span className="text-purple-400">~/lab3</span>$ gcc -o process process.c</p>
                <p><span className="text-blue-400">student@oslab</span>:<span className="text-purple-400">~/lab3</span>$ ./process</p>
                <p className="text-slate-500">Parent PID: 1234, Child PID: 1235</p>
                <p className="text-yellow-400">[AI Assistant] 进程创建成功！观察到父子进程的 PID 关系</p>
                <p className="text-yellow-400">[AI Assistant] 建议使用 strace 追踪系统调用过程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI 行为数据分析</h2>
            <p className="text-slate-300 text-lg">全自动实验批改，生成真实技能画像</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Terminal className="text-emerald-400" /> 数据采集
              </h3>
              <ul className="space-y-4">
                {["终端命令序列完整记录", "代码编辑与编译过程", "调试操作与断点设置", "错误修复路径追踪"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="text-emerald-400" /> 智能评估
              </h3>
              <ul className="space-y-4">
                {["实验完成度自动评分", "代码质量分析", "问题解决能力评估", "学习进度预测"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">解决方案</h2>
          </div>

          {/* Solution 1 */}
          <div className="mb-12 bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">高校计算机学院</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-4">行业痛点</h4>
                <ul className="space-y-3">
                  {["实验环境配置复杂", "学生机器配置参差不齐", "实验批改工作量大", "难以追踪学习过程"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-red-400 font-bold">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-4">凌科方案</h4>
                <ul className="space-y-3">
                  {["浏览器内运行内核实验", "学生行为数据实时监控", "全自动实验批改", "提供真实技能画像"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-green-500 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-green-600 mb-4">落地效果</h4>
                <ul className="space-y-3">
                  {["教学效率提升 50%", "学生动手能力增强", "课程评估更加科学", "支持混合式教学"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Building2 className="text-purple-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">企业系统工程培训</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-red-500 mb-4">行业痛点</h4>
                <ul className="space-y-3">
                  {["新员工系统知识薄弱", "培训环境搭建成本高", "技能评估缺乏标准", "培训效果难以量化"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-red-400 font-bold">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#002B5B] mb-4">凌科方案</h4>
                <ul className="space-y-3">
                  {["系统级实战训练", "标准化技能评估", "学习路径个性化", "团队能力看板"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-green-500 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-green-600 mb-4">落地效果</h4>
                <ul className="space-y-3">
                  {["新员工上手更快", "技能水平可量化", "培训成本降低", "人才梯队更清晰"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">适用对象</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "高校计算机学院", desc: "操作系统课程实验" },
              { icon: Building2, title: "软件工程学院", desc: "系统开发能力培养" },
              { icon: Users, title: "企业培训部门", desc: "系统工程师训练" },
              { icon: Cpu, title: "技术面试", desc: "系统能力评估" }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <item.icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">开启您的操作系统实验之旅</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            立即申请试用，体验浏览器中的操作系统实验室
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold flex items-center gap-2">
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

export default OSLab;
