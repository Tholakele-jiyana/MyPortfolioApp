function Home() {
  return (
    //Home background changed to Caramel #CC7F3B
    //used id="Home" to link component to navbar links
    <section id="Home" className="bg-[#CC7F3B] py-24">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to LT's Portfolio
        </h1>

       {/*intro text changed to black*/}
        <div className="max-w-2xl mx-auto">
          <p className="text-black text-lg mb-10">
            My name is Lindokuhle T Jiyana. I design and develop websites thats are visually appealling and user friendly. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* button colour changed to Mahogany #C04000 */}
            {/* hover colour changed to Candy Apple Red #FF0800 */}

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
export default Home