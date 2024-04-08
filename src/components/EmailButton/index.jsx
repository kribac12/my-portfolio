import PropTypes from "prop-types";

function EmailButton({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-block bg-customColor hover:bg-customColorDark text-black px-10 py-4 rounded-full transition-colors duration-150 ease-in-out">
      @ Email me!
    </a>
  );
}

EmailButton.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailButton;
