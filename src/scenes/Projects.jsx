import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project from "../components/Project";

const projectList = [
    {
        title:'Project 1',
        description:'Analytics Dashboard - React',
    },
    {
        title:'Project 2',
        description:'Social Network - React/Node',
    },
    {
        title:'Project 3',
        description:'Estate Agency - React/Django',
    },
    {
        title:'Project 4',
        description:'Ecommerce - React/Django Braintree',
    },
    {
        title:'Project 5',
        description:'Ecommerce - React/Node Strapi',
    },
    {
        title:'Project 6',
        description:'YouTube Clone - React/Node',
    },
    {
        title:'Project 7',
        description:'Ecommerce - Express/EJS',
    },
    {
        title:'Project 8',
        description:'Photographer Portfolio - HTML/CSS/Javascript',
    },
    {
        title:'Project 9',
        description:'Artwork Gallery - Flask CRUD',
    },
    {
        title:'Project 10',
        description:'RountinApp - Javascript',
    },
    {
        title:'Project 11',
        description:'Role Game - Javascript CANVAS',
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
};

function Projects() {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Something nice Something nice Something nice Something nice Something
          nice Something nice Something nice
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
            <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400ox] text-2xl font-playfair font-semibold">
                BEAUTIFUL USER INTERFACES
            </div>
            {projectList.map((project, index) => (
                <Project 
                title={project.title}
                description={project.description}
                key={index}
                />
            ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Projects;
