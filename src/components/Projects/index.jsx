import ProjectCard from "../ProjectCard";
import rainydaysImage from "../../assets/images/rainydays.jpg";
import communityImage from "../../assets/images/communitymuseum2.jpg";
import fabulousImage from "../../assets/images/fabulous-fiction.jpg";

const projectsData = [
  {
    title: "Rainydays",
    imageUrl: rainydaysImage,
    demoUrl: "https://kristine-bache.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/cross-course-project-kribac12",
  },
  {
    title: "Community Science Museum",
    imageUrl: communityImage,
    demoUrl: "https://kristine-project.netlify.app/",
    repoUrl: "https://github.com/kribac12/csm-repo",
  },
  {
    title: "Fabulous Fiction",
    imageUrl: fabulousImage,
    demoUrl: "https://fabulous-fiction.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "FetchFriends",
    imageUrl: "/path/to/project3.jpg",
    demoUrl: "https://fetchfriends-app.netlify.app/index.html",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "BuySphere",
    imageUrl: "/path/to/project3.jpg",
    demoUrl: "https://buysphere.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "GavelGalore",
    imageUrl: "/path/to/project3.jpg",
    demoUrl: "https://gavelgalore.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
];

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10 bg-[#ffffff] text-black">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} title={project.title} imageUrl={project.imageUrl} demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
