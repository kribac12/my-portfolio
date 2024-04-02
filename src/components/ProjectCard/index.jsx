import PropTypes from "prop-types";

function ProjectCard({ title, imageUrl, demoUrl, repoUrl }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow space-y-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48
 object-cover rounded-md"
      />

      <h3 className="text-lg font-semibold">{title}</h3>
      <div>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-150 ease-in-out">
          Live Demo
        </a>
        {" | "}
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-150 ease-in-out ml-2">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  demoUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
