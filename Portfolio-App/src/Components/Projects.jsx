import React from 'react';

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
    { title: 'Diamond Tech', description: 'Develop a tech website', img: DiamondTech, link: 'https://diamondtechwebsiteindividualproject.netlify.app'},
    { title: 'TFDRedesign', description: 'Redesign a website', img: TFDRedesign, link: 'https://wonderful-custard-0c989f.netlify.app' },
    { title: 'RackofLambRecipe', description: 'Develop a recipe website', img: RackofLambRecipe, link: 'https://visionary-dolphin-541341.netlify.app'},
    { title: 'BloomluxeGroupProject', description: 'Develop a luxury flower shop website-group project', img: BloomluxeGroupProject, link: 'https://spontaneous-caramel-d4b027.netlify.app' },
    { title: 'FireRoomRedesignGroupProject', description: 'Redesign a website-group project', img: FireRoomRedesignGroupProject , link: 'https://fireroom12.netlify.app/#top'},
    { title: 'MelsoftRedesignGroupProject', description: 'Redesign a website-group project', img: MelsoftRedesignGroupProject , link: 'https://68c75fe5e040822644335fa4--melsoft-bootstrap.netlify.app/#tholakele-accredited-programs'},
    { title: 'ApexCoders', description: 'Design a website-group project', img: ApexCoders, link: 'https://group-1-portfolio.netlify.app/tholakele'},
    { title: 'Coming Soon', description: 'More Projects coming soon', img: ComingSoon},

  ];
   //Projects background changed to Caramel #CC7F3B
  return (
    //id="Projects" used to link component to navbar links
    <section id="Projects" className="py-20 bg-[#CC7F3B]">
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

                    //a tag used to link to extrernal project sites
                    //button colour changed to Mahogany #C04000
                    //hover colour changed to Candy Apple Red #FF0800
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#C04000] text-white px-4 py-2 rounded-md hover:bg-[#FF0800] transition duration-200"
                    >
                      View
                    </a>
                  ) : ( 
                
                    //button colour changed to Mahogany #C04000
                    //hover colour changed to Candy Apple Red #FF0800
                    <button className="bg-[#C04000] text-white px-4 py-2 rounded-md hover:bg-[#FF0800] transition duration-200">
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