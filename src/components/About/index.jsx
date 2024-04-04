import profileImage from "../../assets/images/profile-image.png";

function About() {
  return (
    <section id="about" className="px-4 py-20 mt-4 bg-lightColor text-black">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center">
        <img src={profileImage} alt="Kristine" className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8" />
        <div>
          <h2 className="uppercase text-4xl font-light mb-6">.. and here are a few facts about me</h2>
          <p className="text-lg mb-4">
            Based in Drammen, I am a Front-End Developer with a keen eye for design and a strong belief in the power of intuitive user experiences. My approach
            to development is grounded in <span className="font-bold">clarity, simplicity, and elegance</span>, aiming to build websites that not only look
            beautiful but feel seamless to use.
          </p>
          <p className="text-lg mb-4">
            Transitioning from a teaching career, I have brought with me the patience, creativity, and passion for learning that characterized my previous
            profession. Now, in the tech world, I channel these traits into coding, constantly exploring new technologies and techniques.
          </p>

          <p className="text-lg">
            Away from the keyboard, you will find me immersed in the world of <span className="font-bold">play and imagination</span> with my children or lost
            within the pages of a book, exploring other universes. These personal joys keep me grounded and enrich my professional creativity, providing a
            constant source of inspiration and balance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
