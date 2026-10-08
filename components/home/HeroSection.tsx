import { company, primaryPhone } from "@/data/company"
import { Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center bg-dva-charcoal"
        >
            <Image
                src="/hero-bg.jpg"
                alt=""
                fill
                priority
                quality={80}
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-black/50 pointer-events-none" />
            
            <div className="container-dva relative z-10 py-20">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-dva-orange">
                    {company.shortName}
                </p>
                <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl">
                    Thép cho hiện tại —{" "}
                    <span className="gradient-text">Vững cho tương lai</span>
                </h1>
                <p className="mb-10 max-w-xl text-lg text-gray-300">
                    {company.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href={`tel:${primaryPhone}`} className="btn-primary">
                        <Phone size={16} /> NHẬN BÁO GIÁ
                    </a>
                    <Link href="/san-pham" className="btn-outline">
                        Xem sản phẩm
                    </Link>
                </div>
            </div>
        </section>
    )
}