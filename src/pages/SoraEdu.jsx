import {
  Code, CheckCircle2, ArrowRight, Sparkles, Users,
  GraduationCap, BookOpen, BarChart3, Brain, Eye,
  Lightbulb, Gamepad2, LineChart, FileText, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SoraEdu = () => {
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-yellow-400/20 rounded-xl">
              <Code className="text-yellow-300" size={32} />
            </div>
            <span className="text-yellow-300 font-bold text-sm uppercase tracking-wider">K12 编程教育平台</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            朔源未来课堂
            <span className="block text-3xl md:text-4xl text-blue-200 mt-2">SoraEdu</span>
          </h1>

          <p className="text-2xl text-blue-100 mb-8 max-w-3xl font-light">
            面向中小学的 AI 编程实验课堂
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg font-semibold flex items-center gap-2 transition-all">
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
            <p className="text-slate-500 text-lg">为学校构建智能化新型课堂</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "AI 自动生成课程",
                desc: "可自动生成适龄难度的课程，匹配不同年级学生"
              },
              {
                icon: Code,
                title: "浏览器内实验",
                desc: "让学生在浏览器内动手做实验（Python、逻辑、图形化编程）"
              },
              {
                icon: FileText,
                title: "学习报告",
                desc: "家长和教师获得详细学习报告，了解孩子学习进度"
              },
              {
                icon: Brain,
                title: "行为数据分析",
                desc: "专注度、掌握度、思考路径全方位分析"
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-6 bg-blue-50 rounded-2xl hover:bg-blue-500 hover:text-white transition-all duration-300">
                <div className="p-3 bg-white rounded-xl w-fit mb-4 group-hover:bg-white/20">
                  <item.icon className="text-blue-500 group-hover:text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 group-hover:text-blue-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">多元学习模式</h2>
            <p className="text-slate-500 text-lg">图形化与代码无缝切换</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Gamepad2 className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">图形化编程</h3>
              <p className="text-slate-600 mb-4">适合低年级学生，通过拖拽积木块学习编程逻辑</p>
              <ul className="space-y-2">
                {["Scratch 风格界面", "游戏化学习任务", "即时运行反馈"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="text-green-500" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Python 编程</h3>
              <p className="text-slate-600 mb-4">适合中高年级，学习真正的编程语言</p>
              <ul className="space-y-2">
                {["智能代码提示", "错误实时诊断", "AI 助教指导"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="text-blue-500" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">逻辑思维训练</h3>
              <p className="text-slate-600 mb-4">培养计算思维和问题解决能力</p>
              <ul className="space-y-2">
                {["算法可视化", "步骤分解练习", "创意项目实践"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="text-purple-500" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Analysis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">AI 行为数据分析</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                全方位追踪学生学习过程，智能分析学习行为，为教师和家长提供科学的教育决策依据。
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center shrink-0">
                    <Eye className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">专注度分析</h4>
                    <p className="text-slate-600 text-sm">实时监测学习专注状态，识别走神和疲劳</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center shrink-0">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">掌握度评估</h4>
                    <p className="text-slate-600 text-sm">多维度评估知识点掌握程度，精准定位薄弱环节</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center shrink-0">
                    <LineChart className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">思考路径追踪</h4>
                    <p className="text-slate-600 text-sm">记录解题思路，分析思维模式，培养逻辑能力</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">学习数据看板</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>专注度</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>知识掌握</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>创造力指数</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-pink-400 h-3 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-blue-100">AI 建议：建议加强循环结构的练习，可尝试更多创意项目</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal System */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">多端协同</h2>
            <p className="text-blue-100 text-lg">学生、教师、家长三端联动</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">学生端</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 游戏化学习路径
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 成就徽章系统
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> AI 实时辅导
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">教师端</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 班级数据看板
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 作业自动批改
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 个性化教学建议
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">家长端</h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 学习进度报告
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 能力成长曲线
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} /> 家校沟通桥梁
                </li>
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
            <p className="text-slate-500 text-lg">面向"双减"的智能教学平台</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-red-500 mb-4">行业痛点</h3>
                <ul className="space-y-3">
                  {["缺乏适龄的 AI 教学内容", "实验环境配置门槛高", "无法精准掌握学生兴趣点", "教师备课负担重"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-red-400 font-bold">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#002B5B] mb-4">朔源方案</h3>
                <ul className="space-y-3">
                  {["AI 自动生成适龄课程", "浏览器即开即用", "学习过程全可视化", "教师门户查看行为数据"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-green-600 mb-4">落地效果</h3>
                <ul className="space-y-3">
                  {["配合校内 ICT 课程改革", "落实科学教育加法", "提升学生编程兴趣", "减轻教师工作负担"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <Star className="text-yellow-500 shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">让每个孩子都能享受编程的乐趣</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            立即申请试用，为您的学校引入智能化编程教育
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-lg font-semibold flex items-center gap-2">
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

export default SoraEdu;
