import { useMemo } from "react";

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const range = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5; // Show 5 page numbers along with siblings

    // Case 1: When the total page count is less than or equal to the total page numbers to be shown
    if (totalPageCount <= totalPageNumbers) {
      return Array.from({ length: totalPageCount }, (_, index) => index + 1);
    }

    // Case 2: When the current page is near the start
    if (currentPage <= siblingCount + 2) {
      const rangeStart = 1;
      const rangeEnd = totalPageNumbers - 1;
      return [...Array(rangeEnd - rangeStart + 1)].map((_, index) => index + rangeStart);
    }

    // Case 3: When the current page is near the end
    if (currentPage >= totalPageCount - siblingCount - 1) {
      const rangeStart = totalPageCount - totalPageNumbers + 2;
      const rangeEnd = totalPageCount;
      return [...Array(rangeEnd - rangeStart + 1)].map((_, index) => index + rangeStart);
    }

    // Case 4: When the current page is in the middle
    const rangeStart = currentPage - siblingCount;
    const rangeEnd = currentPage + siblingCount;
    return [...Array(rangeEnd - rangeStart + 1)].map((_, index) => index + rangeStart);
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return {
    pages: range,
    currentPage,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < Math.ceil(totalCount / pageSize),
    gotoPage: (page) => {
      // Add logic here to handle updating the current page
      console.log(`Go to page ${page}`);
    },
  };
};
