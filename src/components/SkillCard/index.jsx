import PropTypes from "prop-types";

function SkillCard({ name, Icon }) {
  return (
    <div className="flex flex-col  items-start space-y-2">
      <Icon className="text-4xl md:text-5xl text-accentColor" />
      <span className="text-md">{name}</span>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default SkillCard;
