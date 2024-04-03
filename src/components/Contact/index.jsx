function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-10 bg-[#ffffff] text-black">
      <h2 className=" text-5xl md:text-8xl font-bold text-center mb-6">
        Enough about me, let us <span className="bg-accentColor text-white">Connect</span>
      </h2>
      <p className="text-xl text-center mb-8">I am open to job opportunities and collaborations. Feel free to reach out!</p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <a
          href="mailto:your.email@example.com"
          className="py-3 px-11 bg-customColor hover:bg-customColorDark text-white rounded-full transition-colors duration-150 ease-in-out">
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="py-3 px-11 bg-customColor hover:bg-customColorDark text-white rounded-full transition-colors duration-150 ease-in-out">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
