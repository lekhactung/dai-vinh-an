import { ShieldCheck, Truck, Factory, Clock, Award, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Chất lượng đảm bảo", desc: "Tiêu chuẩn ASTM / JIS / TCVN, kiểm định từng lô hàng." },
  { icon: Truck,       title: "Giao hàng đúng tiến độ", desc: "Đội xe chuyên dụng, phủ sóng TP.HCM và các tỉnh lân cận." },
  { icon: Factory,     title: "Kho hàng quy mô lớn", desc: "4 địa điểm, hơn 5.000m² kho bãi luôn sẵn hàng." },
  { icon: Clock,       title: "30+ năm kinh nghiệm", desc: "Tích lũy chuyên môn sâu, phục vụ hàng nghìn công trình." },
  { icon: Award,       title: "Tiêu chuẩn quốc tế", desc: "Thép nhập khẩu và trong nước đều đạt chuẩn quốc tế." },
  { icon: HeadphonesIcon, title: "Hỗ trợ kỹ thuật", desc: "Tư vấn chọn thép đúng thông số cho từng công trình." },
];

export default function WhyChooseUs() {
  return (
    <section id="tai-sao-chon-chung-toi" className="section-padding bg-dva-bg">
      <div className="container-dva">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dva-orange">
            Lý do
          </p>
          <h2 className="section-heading">Tại Sao Chọn Đại Vĩnh An?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg bg-white p-6 shadow-sm">
              <Icon className="mb-4 h-8 w-8 text-dva-orange" />
              <h3 className="mb-2 font-bold text-dva-charcoal">{title}</h3>
              <p className="text-sm text-dva-text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}