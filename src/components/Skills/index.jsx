import SkillCard from "../SkillCard";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaBootstrap, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

const mySkills = [
  { name: "Bootstrap", Icon: FaBootstrap },
  { name: "Wordpress", Icon: FaWordpress },
  { name: "Photoshop", Icon: SiAdobephotoshop },
  { name: "React", Icon: FaReact },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Html5", Icon: FaHtml5 },
  { name: "JavaScript", Icon: FaJsSquare },
];

function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-10 bg-white text-black">
      <h2 className="uppercase text-4xl font-light mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 text-center">
        {mySkills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} Icon={skill.Icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
