import ProjectCard from "../ProjectCard";
import rainydaysImage from "../../assets/images/rainydays.jpg";
import communityImage from "../../assets/images/communitymuseum2.jpg";
import fabulousImage from "../../assets/images/fabulous-fiction.jpg";
import fetchfriendsImage from "../../assets/images/fetchfriends.jpg";
import buysphereImage from "../../assets/images/buysphere.jpg";
import gavelgaloreImage from "../../assets/images/gavelgalore.jpg";
import holidazeImage from "../../assets/images/holidaze.jpg";

const projectsData = [
  {
    title: "Holidaze",
    description:
      "Holidaze is an accommodation booking site that provides a seamless experience for users to book holidays at various venues. The application includes both customer-facing and admin-facing interfaces. Customers can browse and book venues, while admins can register, manage and delete venues. Built with React, Tailwind and Vite.",
    imageUrl: holidazeImage,
    demoUrl: "https://holidazing.netlify.app/",
    repoUrl: "https://github.com/kribac12/holidaze",
  },

  {
    title: "GavelGalore",
    description:
      "GavelGalore is an auction website that allows users to bid on and list items for auction. The website utilizes a RESTful API to manage auctions and user interactions. Built with Bootstrap and SASS, GavelGalore offers a responsive and intuitive user interface.",
    imageUrl: gavelgaloreImage,
    demoUrl: "https://gavelgalore.netlify.app/",
    repoUrl: "https://github.com/kribac12/gavelgalore",
  },
  {
    title: "BuySphere",
    description:
      "BuySphere E-Commerce Store project, a React-based e-commerce application designed to provide a seamless shopping experience. Built with React, Styled Components, Tailwind and Vite.",
    imageUrl: buysphereImage,
    demoUrl: "https://buysphere.netlify.app/",
    repoUrl: "https://github.com/kribac12/kb-ecom-store",
  },
  {
    title: "FetchFriends",
    description:
      "FetchFriends is a social media site where users can view, post, edit, and delete posts using a provided API and its documentation. Built with Bootstrap, SCSS and JavaScript.",
    imageUrl: fetchfriendsImage,
    demoUrl: "https://fetchfriends-app.netlify.app/index.html",
    repoUrl: "https://github.com/kribac12/css-ca23",
  },
  {
    title: "Fabulous Fiction",
    description:
      "My first exam project, a book blog. The website contains reviews of fiction books, urging readers to find their new favorite book. Built with HTML, CSS, JS and Wordpress REST API.",
    imageUrl: fabulousImage,
    demoUrl: "https://fabulous-fiction.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/project-exam-1-kribac12",
  },

  {
    title: "Community Science Museum",
    description:
      "A science museum focusing on children and schools. The website informs people about the Community Science Museum, with interactive exhibitions and science accessible to all. Built with HTML, CSS and Wordpress REST API.",
    imageUrl: communityImage,
    demoUrl: "https://kristine-project.netlify.app/",
    repoUrl: "https://github.com/kribac12/csm-repo",
  },
  {
    title: "Rainydays",
    description:
      "My first design at school, a clothing store for active people. Rainydays makes rain jackets for active and adventurous people. Built with HTML, CSS, JavaScript and Wordpress REST API.",
    imageUrl: rainydaysImage,
    demoUrl: "https://kristine-bache.netlify.app/",
    repoUrl: "https://github.com/Noroff-FEU-Assignments/cross-course-project-kribac12",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-4 py-20 mt-4 bg-lightColor text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="uppercase text-2xl md:text-4xl font-light mb-6">These are my projects ..</h2>
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
