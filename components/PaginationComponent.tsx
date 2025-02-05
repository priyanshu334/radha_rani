import React, { useState, useEffect } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on the client-side
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initialize the state
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers: any = [];
    const maxVisiblePages = 5;
    const visiblePages = isMobile ? 3 : maxVisiblePages;

    for (let i = 1; i <= totalPages; i++) {
      if (i <= visiblePages || i === totalPages) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-0.5 sm:mx-1 lg:mx-2 flex items-center justify-center border p-4 transition-all duration-300 ease-in-out transform rounded-md text-sm sm:text-base lg:text-lg ${
              i === currentPage
                ? "bg-[#9C7A4D] text-white scale-110 shadow-md"
                : "bg-[#C8AD84] text-white hover:bg-[#9C7A4D] hover:scale-105"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === visiblePages + 1 && totalPages > visiblePages + 1) {
        pageNumbers.push(
          <span
            key="ellipsis"
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-xs sm:text-base lg:text-lg flex items-center justify-center text-white font-bold"
          >
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-wrap items-center justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2 lg:space-x-3">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center border rounded-md text-xs sm:text-base lg:text-lg font-medium transition-all duration-300 ease-in-out ${
          currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200 hover:scale-105"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {renderPageNumbers()}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center border rounded-md text-xs sm:text-base lg:text-lg font-medium transition-all duration-300 ease-in-out ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "hover:bg-gray-200 hover:scale-105"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
