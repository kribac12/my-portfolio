import PropTypes from "prop-types";
function NavButtons({ scrollToSection }) {
  return (
    <nav className="flex justify-end space-x-2 sm:space-x-4">
      <button
        className="uppercase  py-1 px-1  sm:py-2 sm:px-4 font-light text-sm sm:text-lg hover:bg-accentColor hover:text-white transition-colors duration-150 ease-in-out"
        onClick={() => scrollToSection("projects")}>
        Work
      </button>
      <button
        className="uppercase py-1 px-1 sm:py-2 sm:px-4 font-light text-sm sm:text-lg hover:bg-accentColor hover:text-white transition-colors duration-150 ease-in-out"
        onClick={() => scrollToSection("skills")}>
        Skills
      </button>
      <button
        className="uppercase py-1 px-1 sm:py-2 sm:px-2 font-light text-sm sm:text-lg hover:bg-accentColor hover:text-white transition-colors duration-150 ease-in-out"
        onClick={() => scrollToSection("about")}>
        About
      </button>
      <button
        className="uppercase py-1 px-1 sm:py-2 sm:px-4 font-light text-sm sm:text-lg hover:bg-accentColor hover:text-white transition-colors duration-150 ease-in-out"
        onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </nav>
  );
}

NavButtons.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default NavButtons;
