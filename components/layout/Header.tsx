"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import FloatingContact from "./FloatingContact";
import { navLinks } from "@/data/nav";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-sm shadow-md"
                        : "bg-dva-charcoal"
                )}
            >
                <div className="container-dva flex items-center justify-between h-16 lg:h-20">

                    <Link href="/" aria-label="Đại Vĩnh An — Trang chủ" className="flex h-full items-center">
                        <Image
                            src="/logo.svg"
                            alt="Đại Vĩnh An – DVA Steel"
                            width={120}
                            height={40}
                            priority
                            className={cn(
                                "h-full w-auto transition-all duration-300",
                                /* Nếu logo tối: khi chưa scroll dùng filter trắng */
                                // !isScrolled && "brightness-0 invert"
                            )}
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav
                        className="hidden lg:flex items-center gap-1"
                        aria-label="Điều hướng chính"
                    >
                        {navLinks.map((link) => {
                            const isActive =
                                link.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-sm transition-colors",
                                        /* Màu text thay đổi theo scroll */
                                        isScrolled
                                            ? "text-gray-700 hover:text-dva-orange"
                                            : "text-white/90 hover:text-dva-orange-muted",
                                        /* Active state luôn orange */
                                        isActive && "text-dva-orange font-semibold"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right side: CTA + Hamburger */}
                    <div className="flex items-center gap-3">

                        {/* CTA button — ẩn trên màn nhỏ hơn sm */}
                        <Link
                            href="/lien-he"
                            className="hidden sm:inline-flex items-center justify-center gap-2
                         rounded-sm bg-dva-orange px-5 py-2.5
                         text-sm font-semibold uppercase tracking-wide text-white
                         transition-all duration-200
                         hover:bg-dva-orange-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Nhận Báo Giá
                        </Link>

                        {/* Hamburger — chỉ hiện dưới lg */}
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            aria-label="Mở menu điều hướng"
                            aria-expanded={isMobileOpen}
                            className={cn(
                                "lg:hidden p-2 rounded-md transition-colors",
                                isScrolled
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white hover:bg-white/10"
                            )}
                        >
                            <Menu size={24} />
                        </button>

                    </div>
                </div>
            </header>

            <MobileMenu
                isOpen={isMobileOpen}
                onClose={() => setIsMobileOpen(false)}
            />

            <FloatingContact hiddenOnMobile={isMobileOpen} />
        </>
    )
}