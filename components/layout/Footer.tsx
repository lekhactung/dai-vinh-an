

import { categories } from "@/data/categories";
import { company } from "@/data/company";
import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { formatPhoneHref } from "@/lib/utils";
import { footerNavLinks as navLinks } from "@/data/nav";
function FacebookIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function ZaloIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm8.5 27H15.3l9.4-12.5H16v-3h16.8L23.4 28H32.5v3z" />
        </svg>
    );
}


export default function Footer() {
    const productLinks = categories.map((cat) => ({
        label: cat.name,
        href: `/san-pham/${cat.slug}`
    }));

    return (
        <footer className="bg-dva-charcoal text-white">

            <div className="container-dva py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    <div className="flex flex-col gap-4">
                        <Link href="/" aria-label="Trang chủ Đại Vĩnh An">
                            <Image
                                src="/logo.svg"
                                alt="Đại Vĩnh An – DVA Steel"
                                width={120}
                                height={40}
                                className="w-[120px] h-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {company.description}
                        </p>
                        {/* <div className="flex gap-3 mt-2">
                            {company.social.facebook && (
                                <a
                                    href={company.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook Đại Vĩnh An"
                                    className="w-9 h-9 flex items-center justify-center
                             rounded-full bg-white/10
                             hover:bg-dva-orange transition-colors"
                                >
                                    <FacebookIcon size={16} />
                                </a>
                            )}
                            {company.social.zalo && (
                                <a
                                    href={company.social.zalo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Zalo Đại Vĩnh An"
                                    className="w-9 h-9 flex items-center justify-center
                             rounded-full bg-white/10 text-xs font-bold
                             hover:bg-dva-zalo transition-colors"
                                >
                                    <ZaloIcon size={16} />
                                </a>
                            )}
                        </div> */}
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-dva-orange">
                            Sản Phẩm
                        </h3>
                        <ul className="space-y-2">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-dva-orange">
                            Liên Kết
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-dva-orange">
                            Liên Hệ
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-gray-400">
                                <MapPin size={16} className="shrink-0 mt-0.5 text-dva-orange" />
                                <span>{company.headquarter.address}</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-400">
                                <Phone size={16} className="shrink-0 mt-0.5 text-dva-orange" />
                                <a
                                    href={formatPhoneHref(company.headquarter.phones[0])}
                                    className="hover:text-white transition-colors"
                                >
                                    {company.headquarter.phones[0]}
                                </a>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-400">
                                <Mail size={16} className="shrink-0 mt-0.5 text-dva-orange" />
                                <a
                                    href={`mailto:${company.email}`}
                                    className="hover:text-white transition-colors"
                                >
                                    {company.email}
                                </a>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-400">
                                <Clock size={16} className="shrink-0 mt-0.5 text-dva-orange" />
                                <span>{company.workingHours}</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container-dva py-4 flex flex-col sm:flex-row
                        items-center justify-between gap-2 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
                    {/* <p>DVA Steel</p> */}
                </div>
            </div>

        </footer>
    )
}