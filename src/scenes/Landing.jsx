import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ProfileImg from "../assets/profile-pic-05.png";
import SocialMediaIcons from "../components/SocialMediaIcons";
function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:top-10 before:left-5 before:w-[300px] before:h-[300px] before:border-t-4 before:border-l-4 before:border-violet before:z-[-1] after:absolute after:bottom-5 after:right-5 after:w-[300px] after:h-[300px] after:border-b-4 after:border-r-4 after:border-yellow after:z-[-2]">
            <img
              src={ProfileImg}
              alt="profile"
              className="rounded-full hover:filter hover:saturate-150 opacity-80 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
            />
          </div>
        ) : (
          <img
            src={ProfileImg}
            alt="profile"
            className="rounded-full hover:filter hover:saturate-150 opacity-80 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          // Display only once, when element is supposed to be shown at 50% size (like intersectionObserver)
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            // pont1/from/frame1 : {prop: value}
            // pont2/50%/frame2 : {pro: val}
            // pont3/end/frame3 : {pro: val}
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Federico {""}
            <span className="xs:relative xs:text-violet xs:font-semibold md:before:content-brush before:absolute md:before:-bottom-[250px] md:before:-left-[280px] lg:before:-left-[25px] lg:before:top-[20px] before:z-[-1]">
              Craviotto
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            necessitatibus delectus, obcaecati ea quo
          </p>
        </motion.div>

        <motion.div
        className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ dealy: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={()=> setSelectedPage('contact')}
            href='#contact'
            >
                Contact Me
            </AnchorLink>
            
            <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={()=> setSelectedPage('contact')}
            href='#contact'
            >
                <div
                className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10"
                >
                    Let's Talk
                </div>
            </AnchorLink>
        </motion.div>

        <motion.div
        className="flex mt-10 md:mt-20 lg:mt-10 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
}
export default Landing;
