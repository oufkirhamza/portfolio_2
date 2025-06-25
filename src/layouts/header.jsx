import GooeyNav from "../components/blocks/Components/GooeyNav/GooeyNav";
const Header = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "Works", href: "#projects" },
    { label: "About", href: "#about" },
    // { label: "Contact", href: "#contact" },
  ];
  return (
    <div className="flex justify-center fixed right-[50%] translate-x-[50%] z-[100] top-4">
      <div className="px-5 z-40 py-3 text-white/90 border-2  border-white/70 rounded-full flex items-center justify-center gap-5 relative  font-bold">
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
  );
};

export default Header;
