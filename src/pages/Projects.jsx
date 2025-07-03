import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';

const ProjectCard = ({ index, name, description, tags, image,live_link, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="relative flex flex-col md:flex-row bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-3xl overflow-hidden group transition-transform duration-300 hover:scale-[1.01]"
    >
      {/* Diagonal Arrow for Live Link */}
      <a
        href={live_link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 z-20 bg-gradient-to-br from-[#915EFF] to-[#7000FF] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-white text-2xl"
        title="Visit Live Project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      {/* Project Image */}
      <div className="md:w-2/5 w-full h-56 md:h-auto overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      {/* Project Details */}
      <div className="flex-1 p-6 flex flex-col justify-center md:items-start items-center text-center md:text-left">
        <h3 className="text-white font-bold text-[24px] mb-2 group-hover:text-[#915EFF] transition-colors duration-300">{name}</h3>
        <p className="mb-4 text-secondary text-[15px]">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#915EFF]/80 to-[#7000FF]/80 text-white shadow ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <a
            href={source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#915EFF] to-[#7000FF] text-white px-5 py-2 rounded-full font-semibold shadow flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            title="View GitHub Repo"
          >
            <img src={github} alt="github" className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute left-[-80px] top-[-80px] w-[300px] h-[300px] bg-[#915EFF] rounded-full opacity-20 blur-3xl animate-blob" />
        <div className="absolute right-[-100px] top-[200px] w-[350px] h-[350px] bg-[#7000FF] rounded-full opacity-20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/2 bottom-[-120px] w-[320px] h-[320px] bg-[#915EFF] rounded-full opacity-20 blur-3xl animate-blob animation-delay-4000" />
      </div>
      <div className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through real-world examples of my work. 
            Each project is briefly described with links to code repositories and live demos. 
            It reflects my ability to solve complex problems, work with different technologies, 
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-col gap-12 justify-center">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "spring", 2, 1)}
          className="mt-20 text-center"
        >
          <h3 className="text-white font-bold text-[24px]">Want to see more?</h3>
          <p className="mt-4 text-secondary text-[17px]">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/piyush6842"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#915EFF] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 