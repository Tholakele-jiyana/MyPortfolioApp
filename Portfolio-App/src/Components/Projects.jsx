import ChezPortia from '../assets/chezportia.jpeg';
import DiamondTech from '../assets/DiamondTech.png';
import TFDRedesign from '../assets/TFDRedesign.png';
import RackofLambRecipe from '../assets/RackofLambRecipe.png';
import BloomluxeGroupProject from '../assets/BloomluxeGroupProject.png';
import FireRoomRedesignGroupProject from '../assets/FireRoomRedesignGroupProject.png';
import MelsoftRedesignGroupProject from '../assets/MelsoftRedesignGroupProject.png';
import ApexCoders from '../assets/ApexCoders.png';  
import ComingSoon from '../assets/ComingSoon.png';      

function Projects() {
  const projectList = [
    { title: 'Chez Portia', description: 'Design and develop a menu', img: ChezPortia, link: 'https://venerable-smakager-5f92ff.netlify.app' },
    { title: 'Diamond Tech', description: 'Develop a tech website', img: DiamondTech, link: 'https://venerable-smakager-5f92ff.netlify.app'},
    { title: 'TFDRedesign', description: 'Redesign a website', img: TFDRedesign },
    { title: 'RackofLambRecipe', description: 'Develop a recipe website', img: RackofLambRecipe, link: 'https://venerable-smakager-5f92ff.netlify.app'},
    { title: 'BloomluxeGroupProject', description: 'Develop a luxury flower shop website-group project', img: BloomluxeGroupProject, link: 'https://venerable-smakager-5f92ff.netlify.app' },
    { title: 'FireRoomRedesignGroupProject', description: 'Redesign a website-group project', img: FireRoomRedesignGroupProject , link: 'https://venerable-smakager-5f92ff.netlify.app'},
    { title: 'MelsoftRedesignGroupProject', description: 'Redesign a website-group project', img: MelsoftRedesignGroupProject , link: 'https://venerable-smakager-5f92ff.netlify.app'},
    { title: 'ApexCoders', description: 'Design a website-group project', img: ApexCoders, link: 'https://venerable-smakager-5f92ff.netlify.app'},
    { title: 'Coming Soon', description: 'More Projects coming soon', img: ComingSoon, link: 'https://venerable-smakager-5f92ff.netlify.app'},

  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
                    >
                      View
                    </a>
                  ) : (
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
                      View
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;