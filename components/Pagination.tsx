'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

interface PaginationProps {
  total: number;
  page: number;
  take: number;
}

export default function Pagination({ total, page, take }: PaginationProps) {
  const pathname = usePathname();

  const totalPages = Math.ceil(total / take);
  const showPages = 5;
  const startPage =
    page - Math.ceil(showPages / 2) < 1 ? 1 : page - Math.ceil(showPages / 2);
  const endPage =
    page + Math.floor(showPages / 2) > totalPages
      ? totalPages
      : page + Math.floor(showPages / 2);

  const getPageArr = useCallback(() => {
    const pageArr = [];
    for (let i = startPage; i <= endPage; i++) {
      pageArr.push(i);
    }
    return pageArr;
  }, [page, showPages, startPage, endPage]);

  const pageArr = getPageArr();

  const renderPage = useCallback(
    (page: number) => {
      return (
        <Link key={page} href={`${pathname}?page=${page}&take=${take}`}>
          <div className="p-2 border">{page}</div>
        </Link>
      );
    },
    [take]
  );

  return (
    <div className="flex gap-2">
      {page > startPage && (
        <Link href={`${pathname}?page=${page - 1}&take=${take}`}>
          <div className="p-2 border">이전</div>
        </Link>
      )}
      <div className="flex">{pageArr.map((page) => renderPage(page))}</div>
      {page < endPage && (
        <Link href={`${pathname}?page=${page + 1}&take=${take}`}>
          <div className="p-2 border">다음</div>
        </Link>
      )}
    </div>
  );
}
