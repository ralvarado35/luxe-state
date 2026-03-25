'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  hasPrev,
  hasNext,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Previous */}
      {hasPrev ? (
        <Link
          href={`?page=${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border border-[#19322F]/10 hover:border-[#006655] hover:text-[#006655] text-[#19322F] font-medium rounded-lg transition-all hover:shadow-md text-sm"
        >
          <span className="material-icons text-base">chevron_left</span>
          Prev
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 bg-white border border-[#19322F]/5 text-[#5C706D]/40 rounded-lg text-sm cursor-not-allowed">
          <span className="material-icons text-base">chevron_left</span>
          Prev
        </span>
      )}

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
              page === currentPage
                ? 'bg-[#19322F] text-white shadow-sm'
                : 'bg-white border border-[#19322F]/10 text-[#19322F] hover:border-[#006655] hover:text-[#006655] hover:shadow-md'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next */}
      {hasNext ? (
        <Link
          href={`?page=${currentPage + 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border border-[#19322F]/10 hover:border-[#006655] hover:text-[#006655] text-[#19322F] font-medium rounded-lg transition-all hover:shadow-md text-sm"
        >
          Next
          <span className="material-icons text-base">chevron_right</span>
        </Link>
      ) : (
        <span className="flex items-center gap-1 px-4 py-2 bg-white border border-[#19322F]/5 text-[#5C706D]/40 rounded-lg text-sm cursor-not-allowed">
          Next
          <span className="material-icons text-base">chevron_right</span>
        </span>
      )}
    </div>
  );
}
