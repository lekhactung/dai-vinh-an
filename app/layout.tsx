import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | ${company.slogan}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Công ty TNHH Thương Mại Sản Xuất Đại Vĩnh An — DVA Steel. Cung cấp thép tấm, thép hình, thép hộp, thép ống, xà gồ đạt tiêu chuẩn quốc tế. 30+ năm kinh nghiệm, 3 chi nhánh TP. Hồ Chí Minh.",
  keywords: [
    "sắt thép",
    "thép tấm",
    "thép hình",
    "thép hộp",
    "thép ống",
    "xà gồ",
    "thép xây dựng",
    "nhà cung cấp thép",
    "Đại Vĩnh An",
    "DVA Steel",
    "thép TPHCM",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: company.website,
    siteName: company.shortName,
    title: `${company.shortName} | ${company.slogan}`,
    description:
      "Cung cấp thép tấm, thép hình, thép hộp, thép ống, xà gồ chất lượng cao. 30+ năm kinh nghiệm, 3 chi nhánh tại TP. Hồ Chí Minh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Đại Vĩnh An — DVA Steel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | ${company.slogan}`,
    description: "Nhà cung cấp thép tấm, thép hình, thép hộp, thép ống và xà gồ tại TP. Hồ Chí Minh.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
