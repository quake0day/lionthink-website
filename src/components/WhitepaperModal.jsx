import { useState } from 'react';
import { X, FileText, CheckCircle } from 'lucide-react';

const WhitepaperModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 保存到 localStorage
    const requests = JSON.parse(localStorage.getItem('whitepaperRequests') || '[]');
    const newRequest = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: '待处理'
    };
    requests.push(newRequest);
    localStorage.setItem('whitepaperRequests', JSON.stringify(requests));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setFormData({ name: '', organization: '', email: '' });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* 弹窗内容 */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        {/* 顶部装饰 */}
        <div className="h-2 bg-gradient-to-r from-blue-400 via-[#002B5B] to-blue-400"></div>

        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* 标题 */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#002B5B]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">申请技术白皮书</h3>
                <p className="text-slate-500 text-sm">
                  请填写以下信息，我们将尽快将白皮书发送至您的邮箱
                </p>
              </div>

              {/* 表单 */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    机构/公司 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                    placeholder="请输入您的机构或公司名称"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B]/20 focus:border-[#002B5B] transition-all"
                    placeholder="请输入您的邮箱地址"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#002B5B] to-blue-700 hover:from-[#003875] hover:to-blue-800 text-white rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '提交中...' : '提交申请'}
                </button>
              </form>

              <p className="text-xs text-slate-400 text-center mt-4">
                提交即表示您同意我们的隐私政策
              </p>
            </>
          ) : (
            /* 成功提示 */
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">申请成功!</h3>
              <p className="text-slate-500 mb-6">
                感谢您的申请，我们将在 1-2 个工作日内<br/>
                将白皮书发送至 <span className="text-[#002B5B] font-medium">{formData.email}</span>
              </p>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors"
              >
                关闭
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhitepaperModal;
