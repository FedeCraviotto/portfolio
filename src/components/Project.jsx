import { motion } from "framer-motion";

function Project({ title, description }){

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration 500 bg-grey z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return(
        <motion.div variants={projectVariant} className='relative my-1 md:my-0'>
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">{description}</p>
            </div>
            <img src={`/images/project-${projectTitle}.png`} alt={projectTitle} />
        </motion.div>
    )
};
export default Project;