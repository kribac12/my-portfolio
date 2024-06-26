import profileImage from "../../assets/images/profile-image.png";

function About() {
  return (
    <section id="about" className="relative px-4 py-20 mt-4 bg-lightColor text-black">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">
        <img src={profileImage} alt="Kristine" className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8" />
        <div className="md:pb-20 xl:pb-40">
          <h2 className="uppercase text-2xl md:text-4xl font-light mb-6">.. and here are a few facts about me</h2>
          <p className="text-lg mb-4">
            Based in Drammen, I am a Front-End Developer with a keen eye for design and a strong belief in the power of intuitive user experiences. My approach
            to development is grounded in <span className="font-bold">clarity, simplicity, and elegance</span>, aiming to build websites that not only look
            beautiful but feel seamless to use.
          </p>
          <p className="text-lg mb-4">
            Transitioning from a teaching career, I have brought with me the patience, creativity, and passion for learning that characterized my previous
            profession, and now I channel these traits into coding, constantly exploring new technologies and techniques.
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 transform translate-y-1/3">
        <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
