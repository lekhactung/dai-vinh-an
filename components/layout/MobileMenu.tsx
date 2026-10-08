"use client"

import { usePathname } from "next/navigation";
import { formatPhoneHref, cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, MessageCircle} from "lucide-react";
import { company, primaryPhone, primaryPhoneDisplay } from "@/data/company"
import { navLinks } from "@/data/nav";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();
    return (
        <>
            {/* Backdrop overlay */}
            <div
                onClick={onClose}
                aria-hidden="true"
                className={cn(
                    "fixed inset-0 z-40 bg-black/40 lg:hidden",
                    "transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            />

            {/* Side panel */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-72 z-50 bg-white lg:hidden",
                    "flex flex-col",
                    "transform transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Panel header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <Link href={"/"} onClick={onClose} aria-label="Trang chủ">
                        <Image
                            src={"/logo.svg"}
                            alt="Đại Vĩnh An"
                            width={100}
                            height={34}
                            className="w-[100px] h-auto"
                        />
                    </Link>
                    <button
                        onClick={onClose}
                        aria-label="Đóng menu"
                        className="p-2 rounded-md text-gray-500
                       hover:bg-gray-100 hover:text-gray-900
                       transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto p-4" aria-label="Menu mobile">
                    <ul className="space-y-1">
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={cn(
                                            "flex items-center px-4 py-3 rounded-md",
                                            "text-sm font-medium transition-colors",
                                            isActive
                                                ? "bg-dva-orange text-white"
                                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* CTA buttons */}
                <div className="p-4 border-t border-gray-100 space-y-2">
                    <a
                        href={formatPhoneHref(primaryPhone)}
                        className="flex items-center justify-center gap-2
                                   w-full px-4 py-3 rounded-sm
                                   bg-dva-orange text-white text-sm font-semibold
                                   hover:bg-dva-orange-hover transition-colors"
                    >
                        <Phone size={16} />
                        {primaryPhoneDisplay}
                    </a>
                    <a
                        href={company.social.zalo ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2
                                   w-full px-4 py-3 rounded-sm
                                   border-2 border-dva-zalo text-dva-zalo
                                   text-sm font-semibold
                                   hover:bg-dva-zalo hover:text-white transition-colors"
                    >
                        <MessageCircle size={16} />
                        Chat Zalo
                    </a>
                </div>
            </div>
        </>
    )
}