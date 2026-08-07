const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
  }) => {
  
    if (totalPages <= 1) return null;
    const getPages = () => {
        const pages = [];
      
        if (totalPages <= 7) {
          for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
          }
      
          return pages;
        }
      
        pages.push(1);
      
        if (currentPage > 3) {
          pages.push("...");
        }
      
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
      
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      
        if (currentPage < totalPages - 2) {
          pages.push("...");
        }
      
        pages.push(totalPages);
      
        return pages;
      };
    return (
      <div>
        <div className="mt-10 flex items-center justify-center gap-2">
        <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
        >
        Previous
        </button>
        {getPages().map((page, index) =>
        page === "..." ? (
            <span
            key={index}
            className="px-2"
            >
            ...
            </span>
        ) : (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 rounded-lg transition ${
                currentPage === page
                ? "bg-blue-600 text-white"
                : "border hover:bg-gray-100"
            }`}
            >
            {page}
            </button>
        )
        )}
        <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border px-4 py-2 disabled:opacity-40"
        >
        Next
        </button>
        </div>
      </div>
    );
  };
  
  export default Pagination;