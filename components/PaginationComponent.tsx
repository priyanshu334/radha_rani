import React from "react";

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
  const renderPageNumbers = () => {
    const pageNumbers: any = [];
    const maxVisiblePages = 10; // Show 10 pages initially

    for (let i = 1; i <= totalPages; i++) {
      if (i <= maxVisiblePages || i === totalPages) {
        // Always show pages 1-10 and the last page
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-10 h-10 mx-1 flex items-center justify-center border p-8 transition-all duration-300 ease-in-out transform rounded-md ${
              i === currentPage
                ? "bg-[#9C7A4D] text-white scale-110 shadow-md"
                : "bg-[#C8AD84] text-white hover:bg-[#9C7A4D] hover:scale-105"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === maxVisiblePages + 1 && totalPages > maxVisiblePages + 1) {
        // Add ellipsis after 10 pages
        pageNumbers.push(
          <span
            key="ellipsis"
            className="w-10 h-10 tracking-wider font-bold flex items-center justify-center  text-white"
          >
            
            .  .  .
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`w-12 h-10 flex items-center justify-center border rounded-md text-black font-medium transition-all duration-300 ease-in-out ${
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
        className={`w-12 h-10 flex items-center justify-center border rounded-md text-black font-medium transition-all duration-300 ease-in-out ${
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
