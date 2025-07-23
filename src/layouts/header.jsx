import GooeyNav from "../components/blocks/Components/GooeyNav/GooeyNav";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const items = [
    { label: "Home", href: "#" },
    { label: "Works", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center fixed right-[50%] translate-x-[50%] z-[100] top-4">
        <div className="px-5 z-40 py-3 text-white/90 border-2 border-white/70 rounded-full flex items-center justify-center gap-5 relative font-bold">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
          <div className="absolute inset-0 -z-10 rounded-full backdrop-blur-sm bg-white/10"></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        <button
          onClick={toggleMobileMenu}
          className="p-3 text-white/90 border-2 border-white/70 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm">
          <div className="absolute top-20 right-4 bg-[#060a21] border-2 border-white/70 rounded-2xl p-6 min-w-[200px]">
            <nav className="flex flex-col gap-4">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/90 hover:text-white text-left py-2 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
