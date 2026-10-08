import { company } from "@/data/company";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="gioi-thieu" className="section-padding bg-dva-bg">
      <div className="container-dva grid gap-12 md:grid-cols-2 md:items-center">
        {/* Text */}
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dva-orange">
            Về chúng tôi
          </p>
          <h2 className="section-heading mb-4">{company.name}</h2>
          <p className="section-subheading mb-8">
            Hơn 30 năm kinh nghiệm phân phối và gia công thép, phục vụ hàng nghìn
            công trình xây dựng, đóng tàu và cơ khí chế tạo trên toàn quốc.
          </p>
          <ul className="mb-10 space-y-4">
            {[
              { label: "Tiêu chuẩn quốc tế", desc: "ASTM · JIS · API · TCVN — kiểm định từng lô hàng" },
              { label: "Đa dạng chủng loại", desc: "Thép tấm, hộp, ống, hình, xà gồ, cuộn — trên 17 quy cách" },
              { label: "Dịch vụ trọn gói", desc: "Gia công cơ khí, tráng phủ kim loại và vận chuyển tận nơi" },
            ].map(({ label, desc }) => (
              <li key={label} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dva-orange text-white text-xs font-black">✓</span>
                <span>
                  <span className="font-semibold text-dva-charcoal">{label}: </span>
                  <span className="text-dva-text-muted">{desc}</span>
                </span>
              </li>
            ))}
          </ul>
          <Link href="/gioi-thieu" className="btn-primary">
            Tìm hiểu thêm
          </Link>
        </div>
        {/* Image */}
        <div className="relative h-80 overflow-hidden rounded-lg md:h-[420px]">
          <Image
            src="/factory.jpg"
            alt="Nhà máy Đại Vĩnh An"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}