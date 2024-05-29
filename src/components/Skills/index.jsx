import SkillCard from "../SkillCard";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const mySkills = [
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Wordpress", Icon: FaWordpress },
  { name: "Photoshop", Icon: SiAdobephotoshop },
  { name: "React", Icon: FaReact },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Html5", Icon: FaHtml5 },
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "Vite", Icon: TbBrandVite },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20 bg-white text-black">
      <h2 className="uppercase text-2xl md:text-4xl font-light mb-7 ">These are my skills ..</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 text-center">
        {mySkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
