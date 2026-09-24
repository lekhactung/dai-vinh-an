"use client"
import { primaryPhone, primaryPhoneDisplay, company } from "@/data/company";
import { formatPhoneHref } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingContact() {
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
        </>
    )
}