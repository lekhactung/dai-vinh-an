import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Không tìm thấy trang',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Số 404 */}
        <p className="text-[120px] md:text-[160px] font-black leading-none text-dva-charcoal/10 select-none">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-black text-dva-charcoal mt-[-20px] mb-4">
          Trang không tồn tại
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          Trang bạn đang tìm kiếm đã bị xóa hoặc đường dẫn không đúng.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-8 py-3 inline-block">
            Về trang chủ
          </Link>
          <Link
            href="/san-pham"
            className="px-8 py-3 border-2 border-dva-charcoal text-dva-charcoal rounded-lg font-semibold hover:bg-dva-charcoal hover:text-white transition inline-block"
          >
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </main>
  );
}
