import profileImage from "../../assets/images/profile-image.png";
import EmailButton from "../EmailButton";
import NavButtons from "../NavButtons";

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
          <NavButtons scrollToSection={scrollToSection} />
        </div>
      </header>
      <div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="pb-10 pt-10 text-center">
            <h1 className="text-4xl md:text-6xl pb-10 lg:text-8xl font-bold text-center">
              <div className="inline-block md:block">Hi! I am a</div>
              <div className="inline-block md:block mt-2">
                <span className="bg-[#e56258] text-white">Front-End</span> Developer
              </div>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-light mt-4 w-11/12 md:w-1/2 lg:w-10/12 xl:w-3/4 mx-auto">
              My name is Kristine, and I love creating websites with clean, exciting design and smooth user experiences.
            </p>
          </div>
          <div className="flex justify-center items-center w-full flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <EmailButton email="kristinembache@gmail.com" />
            <img src={profileImage} alt="Kristine" className="w-24 h-24 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
