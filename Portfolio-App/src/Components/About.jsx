function About() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to LT's Portfolio
        </h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-10">
            My name is Lindokuhle T Jiyana. I design and develop websites thats are visually appealling and user friendly. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-200"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-50 transition duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About
