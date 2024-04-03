import PropTypes from "prop-types";

function EmailButton({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-block bg-buttonColor hover:bg-buttonColorDark text-black px-6 py-3 rounded transition-colors duration-150 ease-in-out">
      @ Email me!
    </a>
  );
}

EmailButton.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailButton;
