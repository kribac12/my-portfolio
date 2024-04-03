import PropTypes from "prop-types";

function ProjectCard({ title, description, imageUrl, demoUrl, repoUrl }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48
 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="">{description}</p>
      <div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accentColor text-white px-4 py-2 rounded hover:bg-accentColorDark transition-colors duration-150 ease-in-out">
          Live Demo
        </a>
        {"  "}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-lightColor text-black px-4 py-2 rounded hover:bg-lightColorDark transition-colors duration-150 ease-in-out ml-2">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
