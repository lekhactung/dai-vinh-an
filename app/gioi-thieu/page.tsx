import { company } from "@/data/company";
import Image from "next/image";
import StatsSection from "@/components/home/StatsSection";

export const metadata = {
    title: "Giới Thiệu - DVA Steel",
    description: "Khám phá lịch sử, tầm nhìn và sứ mệnh của Đại Vĩnh An trong ngành công nghiệp thép Việt Nam.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Header Area */}
            <div className="relative py-32 bg-dva-charcoal text-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image 
                    src="/hero-bg.jpg" 
                    alt="DVA Steel Factory" 
                    fill 
                    className="object-cover z-0"
                />
                <div className="container-dva relative z-20 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6">
                        Giới thiệu Về DVA Steel
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300">
                        {company.description}
                    </p>
                </div>
            </div>

            <StatsSection />

            {/* Core Values */}
            <div className="py-20 bg-white">
                <div className="container-dva grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-dva-charcoal mb-6">Tầm nhìn & Sứ mệnh</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Với hơn 30 năm kinh nghiệm, <strong>{company.name}</strong> không ngừng đổi mới công nghệ và quy trình sản xuất để mang lại những sản phẩm thép chất lượng cao nhất cho thị trường trong nước và quốc tế.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Chúng tôi cam kết trở thành đối tác tin cậy, đồng hành cùng sự phát triển bền vững của mọi công trình, từ dân dụng đến công nghiệp nặng, đóng góp vào sự phồn vinh của đất nước.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dva-orange text-white text-xs font-black">✓</span>
                                <span className="text-gray-700">Chất lượng đạt chuẩn quốc tế (ASTM, JIS)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dva-orange text-white text-xs font-black">✓</span>
                                <span className="text-gray-700">Cam kết giao hàng đúng tiến độ dứt điểm</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dva-orange text-white text-xs font-black">✓</span>
                                <span className="text-gray-700">Dịch vụ chăm sóc và hậu mãi tận tâm</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                            src="/images/posts/nang-luc-cung-cap.jpg" 
                            alt="Vision" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    ); 
}
