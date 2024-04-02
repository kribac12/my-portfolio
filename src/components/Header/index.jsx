import profileImage from "../../assets/images/profile-image.jpg";

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
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("about")}>About</button>
          </nav>
        </div>
      </header>
      <div className="bg-[#e56258] text-white">
        <div className="max-w-6xl mx-auto px-4  flex flex-col md:flex-row items-end justify-between">
          <div className="pb-10 pt-10 md:py-10">
            <h1 className="text-6xl font-bold">
              Hi! I am a <span className="bg-white text-black px-1">Front-End</span> Developer
            </h1>
            <p className="mt-4">My name is Kristine, and I love creating websites with smooth user experiences.</p>
          </div>
          <div className="flex justify-end w-full md:w-auto">
            <img src={profileImage} alt="Kristine" className="max-w-xs md:max-w-sm align-bottom" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
