function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="bg-[#e56258] text-white">
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <nav className="flex justify-center space-x-4">
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
          </nav>
        </div>
      </header>
      <div className="bg-[#e56258] text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-wrap md:flex-nowrap items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold">Hi! I am a Front-end Developer</h1>
            <p className="mt-4">My name is Kristine... etc</p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src="/path/to/image.jpg" alt="Kristine" className="max-w-xs md:max-w-sm rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
