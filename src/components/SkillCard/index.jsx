import PropTypes from "prop-types";

function SkillCard({ name, Icon }) {
  return (
    <div className="flex flex-col items-start space-y-2">
      <Icon className="text-5xl md:text-6xl text-customColor " />
      <span className="text-md lg:text-lg">{name}</span>
    </div>
  );
}

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default SkillCard;
