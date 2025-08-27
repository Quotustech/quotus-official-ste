import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setIsScrolling(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsVisible(false);
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent default button behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Force focus to ensure accessibility
    e.currentTarget.blur();
  };

  return (
    isVisible &&
    isScrolling && (
      <button
        onClick={scrollToTop}
        className="z-200 fixed bottom-8 right-8 bg-[#21047c] text-white p-4 rounded-full shadow-xl hover:bg-[#2e0aa3] transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#21047c] focus:ring-opacity-50 opacity-0 data-[visible=true]:opacity-100 z-50"
        aria-label="Scroll to top"
        data-visible={isScrolling}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    )
  );
}