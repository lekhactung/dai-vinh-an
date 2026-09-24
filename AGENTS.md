<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# DVA STEEL — Agent Rules & Project Context

> **Đọc file này TRƯỚC khi viết bất kỳ dòng code nào.**
> Tất cả quyết định kiến trúc, naming convention và dữ liệu thật đã được thiết lập từ đây.

## Thông tin dự án

- **Tên công ty:** Công ty TNHH Thương Mại Sản Xuất Đại Vĩnh An (DVA Steel)
- **Website gốc:** https://daivinhan.com
- **Mục tiêu:** Website giới thiệu doanh nghiệp sắt thép — KHÔNG phải e-commerce
- **Tech stack:** Next.js 16 (App Router) · TypeScript strict · Tailwind CSS v4 · shadcn/ui · Lucide React

## Quy tắc bắt buộc

### ❌ KHÔNG làm
- KHÔNG thêm giỏ hàng, checkout, payment, đăng ký tài khoản
- KHÔNG hard-code thông tin công ty trong UI — phải lấy từ `data/company.ts`
- KHÔNG tự bịa số liệu thống kê, địa chỉ, hotline
- KHÔNG dùng `any` trong TypeScript
- KHÔNG tạo component > 200 dòng mà không tách nhỏ
- KHÔNG dùng `console.log` (production code)
- KHÔNG import thư viện nặng không cần thiết

### ✅ BẮT BUỘC
- Server Components mặc định — chỉ dùng `"use client"` khi cần interaction
- Tất cả thông tin công ty lấy từ `@/data/company.ts`
- Tất cả sản phẩm lấy từ `@/data/products.ts`
- Dùng `@/lib/utils.ts` → `cn()` cho className, `formatPhoneHref()` cho tel link
- Path alias `@/` = root của project (`dai-vinh-an/`)
- Tailwind CSS v4 (không có `tailwind.config.js`, config trong `globals.css`)
- CTA chính toàn trang: "NHẬN BÁO GIÁ"

## Design System (globals.css)

```
Màu chính:
  --dva-charcoal:  #1C1F26  (nền tối, heading)
  --dva-orange:    #D4601A  (accent, CTA buttons)
  --dva-steel:     #3D4A5C  (secondary text)
  --dva-bg:        #F5F6F8  (background trang)

Utility classes đã có:
  .container-dva    → max-w-7xl, centered, có padding ngang
  .section-padding  → py-16 md:py-20 lg:py-24
  .btn-primary      → orange CTA button
  .btn-outline      → white outline button
  .section-heading  → h2 style
  .card-hover       → hover lift effect
  .gradient-text    → orange gradient text
```

## Cấu trúc thư mục

```
dai-vinh-an/
├── app/
│   ├── globals.css       ← Design system (ĐÃ HOÀN CHỈNH)
│   ├── layout.tsx        ← Root layout, Inter font, metadata (ĐÃ HOÀN CHỈNH)
│   └── page.tsx          ← Homepage (CẦN LÀM)
├── components/
│   ├── layout/           ← Header.tsx (rỗng), Footer.tsx (rỗng) — CẦN LÀM
│   ├── home/             ← Tất cả home sections — CẦN LÀM
│   ├── products/         ← ProductCard, Grid, Gallery... — CẦN LÀM
│   ├── contact/          ← ContactForm — CẦN LÀM
│   └── ui/               ← Shared UI
├── data/                 ← TẤT CẢ ĐÃ CÓ DỮ LIỆU THẬT
│   ├── company.ts        ✅ thông tin công ty thật
│   ├── categories.ts     ✅ 6 categories
│   ├── products.ts       ✅ 17 sản phẩm với thông số kỹ thuật
│   ├── projects.ts       ✅ 4 dự án
│   └── posts.ts          ✅ 6 bài viết
├── types/                ✅ Company, Product, Project, Post interfaces
└── lib/
    └── utils.ts          ✅ cn(), formatPhoneHref(), formatDate()
```

## Routing

```
/                      → Homepage
/gioi-thieu            → Giới thiệu công ty
/san-pham              → Danh sách sản phẩm (search + filter)
/san-pham/[slug]       → Chi tiết sản phẩm
/du-an                 → Danh sách dự án
/du-an/[slug]          → Chi tiết dự án
/tin-tuc               → Danh sách bài viết
/tin-tuc/[slug]        → Chi tiết bài viết
/lien-he               → Liên hệ (form + bản đồ)
```

## Import pattern chuẩn

```tsx
// Lấy data
import { company, stats, primaryPhone } from "@/data/company";
import { products, getFeaturedProducts } from "@/data/products";
import { categories } from "@/data/categories";

// Types
import type { Product } from "@/types/product";

// Utils
import { cn, formatPhoneHref } from "@/lib/utils";

// Icons
import { Phone, MessageCircle } from "lucide-react";
```

## Hotline CTA pattern

```tsx
// Gọi ngay
<a href={`tel:${primaryPhone}`} className="btn-primary">
  <Phone size={16} /> Gọi ngay
</a>

// Zalo
<a href={company.social.zalo} target="_blank" rel="noopener noreferrer">
  Chat Zalo
</a>
```
