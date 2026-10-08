"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "1e789e82-da28-4e9f-b0f1-be222d3a01ba";
        formData.append("access_key", accessKey);
        formData.append("subject", "Liên hệ mới từ Website DVA Steel");
        formData.append("from_name", "DVA Steel Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
                setErrorMessage(data.message || "Có lỗi xảy ra, vui lòng thử lại sau.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.");
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold text-dva-charcoal mb-6">Gửi tin nhắn cho chúng tôi</h2>

            {status === "success" ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                    <h3 className="text-xl font-bold text-green-800">Cảm ơn bạn đã liên hệ!</h3>
                    <p className="text-green-700 text-sm">
                        Thông tin của bạn đã được gửi thành công. Đội ngũ DVA Steel sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition"
                    >
                        Gửi yêu cầu khác
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <span>{errorMessage}</span>
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Họ tên <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-dva-orange transition"
                            placeholder="Vd: Nguyễn Văn A"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Điện thoại <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-dva-orange transition"
                                placeholder="Số điện thoại"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-dva-orange transition"
                                placeholder="Email của bạn"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nội dung yêu cầu <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-dva-orange resize-none transition"
                            placeholder="Bạn cần báo giá hay tư vấn sản phẩm gì?"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Đang gửi...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                <span>Gửi Yêu Cầu</span>
                            </>
                        )}
                    </button>

                    <p className="text-xs text-center text-gray-400 mt-4">
                        Bằng cách nhấp vào Gửi Yêu Cầu, bạn đồng ý với chính sách bảo mật của chúng tôi.
                    </p>
                </form>
            )}
        </div>
    );
}
