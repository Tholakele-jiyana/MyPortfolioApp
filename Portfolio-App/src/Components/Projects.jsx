import ChezPortia from '../assets/chezportia.jpeg';
import DiamondTech from '../assets/DiamondTech.png';

function Projects() {
  const projectList = [
    { title: 'Chez Portia', description: 'Design and develop a menu', img: ChezPortia },
    { title: 'Diamond Tech', description: 'Develop a tech website', img: DiamondTech },
    { title: 'TFDRedesign', description: 'Redesign a website', img: TFDRedesign },
    { title: 'RackofLambRecipe', description: 'Develop a recipe website', img: RackofLambRecipe },
    { title: 'BloomluxeGroupProject', description: 'Develop a luxury flower shop website-group project', img: BloomluxeGroupProject },
    { title: 'FireRoomRedesignGroupProject', description: 'Redesign a website-group project', img: FireRoomRedesignGroupProject },
    { title: 'MelsoftRedesignGroupProject', description: 'Redesign a website-group project', img: MelsoftRedesignGroupProject },
    { title: 'ApexCoders', description: 'Design a website-group project', img: 'ApexCoders' },
    { title: 'Coming Soon', description: 'More Projects coming soon', img: CoomingSoon }, 

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
                <div className="flex justify-between items-center">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200">View</button>
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