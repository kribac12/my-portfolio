import PropTypes from "prop-types";

function NavButtons({ scrollToSection }) {
  return (
    <nav className="flex justify-end space-x-4">
      <button className="uppercase font-light hover:bg-accentColor hover:text-white" onClick={() => scrollToSection("projects")}>
        Work
      </button>
      <button className="uppercase font-light hover:bg-accentColor hover:text-white" onClick={() => scrollToSection("skills")}>
        Skills
      </button>
      <button className="uppercase font-light hover:bg-accentColor hover:text-white" onClick={() => scrollToSection("about")}>
        About
      </button>
      <button className="uppercase font-light hover:bg-accentColor hover:text-white" onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </nav>
  );
}

NavButtons.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default NavButtons;
