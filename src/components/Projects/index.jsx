import ProjectCard from "../ProjectCard";
import rainydaysImage from "../../assets/images/rainydays.jpg";
import communityImage from "../../assets/images/communitymuseum2.jpg";
import fabulousImage from "../../assets/images/fabulous-fiction.jpg";
import fetchfriendsImage from "../../assets/images/fetchfriends.jpg";
import buysphereImage from "../../assets/images/buysphere.jpg";
import gavelgaloreImage from "../../assets/images/gavelgalore.jpg";

const projectsData = [
  {
    title: "Rainydays",
    description: "My first design at school, a clothing store for active people.",
    imageUrl: rainydaysImage,
    demoUrl: "https://kristine-bache.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/cross-course-project-kribac12",
  },
  {
    title: "Community Science Museum",
    description: "A science museum focusing on children and schools.",
    imageUrl: communityImage,
    demoUrl: "https://kristine-project.netlify.app/",
    repoUrl: "https://github.com/kribac12/csm-repo",
  },
  {
    title: "Fabulous Fiction",
    description: "My first exam project, a book blog.",
    imageUrl: fabulousImage,
    demoUrl: "https://fabulous-fiction.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "FetchFriends",
    description: "A social media page.",
    imageUrl: fetchfriendsImage,
    demoUrl: "https://fetchfriends-app.netlify.app/index.html",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "BuySphere",
    description: "An e-commerce store.",
    imageUrl: buysphereImage,
    demoUrl: "https://buysphere.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
  {
    title: "GavelGalore",
    description: "A bidding website.",
    imageUrl: gavelgaloreImage,
    demoUrl: "https://gavelgalore.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 mt-4 bg-lightColor text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-4xl font-light mb-6">These are my projects ..</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
