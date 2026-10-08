import { company, primaryPhone } from "@/data/company";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
    title: "Liên Hệ - DVA Steel",
    description: "Kết nối với Đại Vĩnh An để nhận báo giá và tư vấn các sản phẩm thép công nghiệp.",
};

export default function ContactPage() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container-dva">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-dva-charcoal mb-4">
                        Liên Hệ DVA Steel
                    </h1>
                    <p className="text-lg text-gray-600">
                        Cần báo giá hoặc tư vấn kỹ thuật? Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Tru so chinh */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-dva-charcoal mb-6 border-b pb-4">Trụ sở chính</h2>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex gap-4 items-start">
                                    <MapPin className="text-dva-orange shrink-0 mt-1" />
                                    <span>{company.headquarter.address}</span>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone className="text-dva-orange shrink-0" />
                                    <div className="flex flex-col">
                                        {company.headquarter.phones.map((p: string, i: number) => (
                                            <a key={i} href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-dva-orange">{p}</a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail className="text-dva-orange shrink-0" />
                                    <a href={`mailto:${company.email}`} className="hover:text-dva-orange">{company.email}</a>
                                </div>
                            </div>
                        </div>

                        {/* Chi nhanh */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-dva-charcoal mb-6 border-b pb-4">Chi nhánh</h2>
                            <div className="space-y-8">
                                {company.branches.map((branch: { name: string; address: string; phones: string[]; email: string }, idx: number) => (
                                    <div key={idx} className="space-y-2 text-gray-600">
                                        <h3 className="font-bold text-gray-800">{branch.name}</h3>
                                        <div className="flex gap-4 items-start">
                                            <MapPin size={18} className="text-gray-400 shrink-0 mt-1" />
                                            <span className="text-sm">{branch.address}</span>
                                        </div>
                                        <div className="flex gap-4 items-start">
                                            <Phone size={18} className="text-gray-400 shrink-0 mt-1" />
                                            <span className="text-sm">{branch.phones.join(" - ")}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Tích hợp Web3Forms */}
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
