function About() {
  return (
    //About background changed to Light Orange #FED8B1
    <section className="bg-[#FED8B1] py-24">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          About Me
        </h1>
        
        {/*About me text changed to black*/}

        <div className="max-w-2xl mx-auto">
          <p className="text-black text-lg mb-10">
            I am a Software Development student currently enrolled at Melsoft Academy.
            I am inquisitive about the evolving digital space; which is why I decided to pursue a career in tech. <br />
            I enjoy learning about the new technologies and how they have become useful in solving
            real world problems. <br />
            The desire to shift from my previous career to tech is both exciting and challenging.
            I am looking forward to gaining more knowledge, designing and developing as I progress and find my niche in the field. <br />

            Outside of my day-to-day job and studies, I enjoy spending time with family and friends over a good meal.
            Anything with to do with vacation, having time-out while indulging in sweet treats is always welcome in my world. 
          </p>

             {/* button colour changed to Mahogany #C04000 */}
            {/* hover colour changed to Candy Apple Red #FF0800 */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-[#C04000] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#FF0800] transition duration-200"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="bg-[#C04000] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#FF0800] transition duration-200"
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
