import { useEffect, useRef, useState } from "react";
import LeftHeader from "./LeftHeader";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderNavList from "./HeaderNavList";
import RightHeaderContent from "./RightHeaderContent";

function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 flex h-full items-center justify-between border-b border-gray-300 bg-white p-6">
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "❌" : <RxHamburgerMenu />}
      </button>

      <div
        ref={menuRef}
        className={`absolute left-0 top-20 flex w-full flex-col items-center gap-6 bg-white transition-transform md:hidden ${
          isOpen ? "" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center justify-center">
          <HeaderNavList onItemClick={() => setIsOpen(false)} />
        </ul>
        <div className="flex flex-col-reverse items-center gap-6">
          <RightHeaderContent closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
