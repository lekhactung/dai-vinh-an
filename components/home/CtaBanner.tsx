import { company, primaryPhone, primaryPhoneDisplay } from "@/data/company";
import { Phone, MessageCircle } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-dva-charcoal py-20">
      <div className="container-dva text-center">
        <h2 className="mb-4 text-3xl font-black uppercase text-white md:text-4xl">
          Cần báo giá thép?{" "}
          <span className="gradient-text">Liên hệ ngay!</span>
        </h2>
        <p className="section-subheading mx-auto mb-10 max-w-xl text-gray-300">
          Đội ngũ kỹ thuật sẵn sàng tư vấn và báo giá miễn phí trong vòng 30 phút.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${primaryPhone}`} className="btn-primary">
            <Phone size={16} /> {primaryPhoneDisplay}
          </a>
          <a
            href={company.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <MessageCircle size={16} /> Chat Zalo
          </a>
        </div>
      </div>
    </section>
  );
}