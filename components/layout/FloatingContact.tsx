"use client"
import { primaryPhone, primaryPhoneDisplay, company } from "@/data/company";
import { formatPhoneHref, cn } from "@/lib/utils";
import { Phone, MessageCircle, Mail} from "lucide-react";

interface FloatingContactProps {
    hiddenOnMobile?: boolean;
}

export default function FloatingContact({ hiddenOnMobile = false }: FloatingContactProps) {
    return (
        <>
            <div className="hidden md:flex fixed right-4 bottom-8 z-50 flex-col gap-3">
                <a href={formatPhoneHref(primaryPhone)}
                    className="group relative flex items-center justify-center
                     w-12 h-12 rounded-full
                     bg-[#D4601A] text-white
                     shadow-lg hover:shadow-xl
                     hover:scale-110 transition-all duration-200"
                    aria-label={`Gọi ngay : ${primaryPhoneDisplay}`}
                >
                    <Phone size={20} />
                    <span className="absolute right-14
                       bg-gray-900 text-white
                       text-xs font-medium
                       px-2 py-1 rounded whitespace-nowrap
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-200
                       pointer-events-none">
                        Hotline Tư Vấn
                    </span>
                </a>

                <a href={company.social.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center
                     w-12 h-12 rounded-full
                     bg-[#0068FF] text-white
                     shadow-lg hover:shadow-xl
                     hover:scale-110 transition-all duration-200"
                    aria-label="Chat Zalo"
                >
                    <MessageCircle size={20} />
                    <span className="absolute right-14
                       bg-gray-900 text-white
                       text-xs font-medium
                       px-2 py-1 rounded whitespace-nowrap
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-200
                       pointer-events-none">
                        Chat Zalo
                    </span>
                </a>
            </div>

            <div
                className={cn(
                    "flex md:hidden fixed bottom-0 left-0 right-0 z-50",
                    "bg-white border-t border-gray-200 shadow-lg",
                    "transition-transform duration-300",
                    hiddenOnMobile ? "translate-y-full" : "translate-y-0"
                )}
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                <a href={formatPhoneHref(primaryPhone)}
                    className="flex-1 flex flex-col items-center justify-center
                     gap-1 py-2
                     text-[#D4601A] text-xs font-medium
                     hover:bg-orange-50 transition-colors">
                    <Phone size={18} />
                    <span>Hotline Tư Vấn</span>
                </a>
                <a
                    href={company.social.zalo ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center
                     gap-1 py-2
                     text-[#0068FF] text-xs font-medium
                     hover:bg-blue-50 transition-colors"
                >
                    <MessageCircle size={18} />
                    <span>Zalo</span>
                </a>
                <a
                    href="/lien-he"
                    className="flex-1 flex flex-col items-center justify-center
                     gap-1 py-2
                     bg-[#D4601A] text-white text-xs font-medium
                     hover:bg-[#B85216] transition-colors"
                >
                    <span className="text-base leading-none"><Mail/></span>
                    <span>Báo giá</span>
                </a>
            </div>
        </>
    )
}