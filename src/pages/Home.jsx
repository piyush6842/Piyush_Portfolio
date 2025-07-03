import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ComputersCanvas } from '../components/canvas';
import { styles } from '../styles';
import Avatar from "../assets/Images/portrait-3d-male-doctor.png"
import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import GithubLogo from "../assets/Images/github-mark.png";
import LinkedinLogo from "../assets/Images/LinkedinLogo.PNG";
import { FiSmartphone, FiMail, FiFileText } from "react-icons/fi";
import { Link } from 'react-router-dom';

const TYPEWRITER_TEXTS = [
  "Hi, I'm Piyush Mittal.",
  "A Full Stack Developer.",
  "Learning. Building. Growing.",
  "Let's Create Something New."
];

function useTypewriterLoop(texts, speed = 80, pause = 1200) {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = texts[textIdx];
    if (!deleting && charIdx < currentText.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), speed);
    } else if (!deleting && charIdx === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((textIdx + 1) % texts.length);
    }
    setDisplayed(currentText.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts, speed, pause]);

  return displayed;
}

const StatCard = ({ number, label }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center p-4 bg-tertiary rounded-xl"
  >
    <h3 className="text-[#915EFF] text-[24px] font-bold">{number}</h3>
    <p className="text-white-100 text-[14px] text-center">{label}</p>
  </motion.div>
);

const FeaturedSkill = ({ icon, name, level }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 bg-tertiary p-3 rounded-lg"
  >
    <div className="w-10 h-10 flex items-center justify-center bg-[#915EFF] rounded-lg">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium">{name}</h4>
      <div className="w-[100px] h-2 bg-black-100 rounded-full mt-1">
        <div
          className="h-full bg-[#915EFF] rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ text, author, role, company }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-tertiary p-6 rounded-2xl"
  >
    <p className="text-white-100 text-[16px] italic">"{text}"</p>
    <div className="mt-4">
      <p className="text-white font-semibold">{author}</p>
      <p className="text-secondary text-[14px]">{role} at {company}</p>
    </div>
  </motion.div>
);

const AchievementCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-tertiary p-5 rounded-xl"
  >
    <div className="text-[24px] mb-3">{icon}</div>
    <h4 className="text-white font-bold text-[18px] mb-2">{title}</h4>
    <p className="text-secondary text-[14px]">{description}</p>
  </motion.div>
);

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold m-0">
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    {experience.skills && (
      <div className="mt-4">
        <p className="text-secondary text-[14px] mb-2">Technologies used:</p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="bg-tertiary px-2 py-1 rounded text-[12px] text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )}
  </VerticalTimelineElement>
);

const Home = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:h-screen">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-5`}>
          <div className="flex flex-row lg:flex-col justify-center items-center mt-5 mb-5 lg:mb-0">
            <div className="w-3 h-3 lg:w-5 lg:h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-24 sm:h-40 lg:h-80 violet-gradient" />
          </div>
          {/* Main content and avatar flex row/col */}
          <div className="flex flex-col-reverse lg:flex-row flex-1 items-center justify-between gap-8 w-full">
            <div className="z-10 flex-1 w-full text-center lg:text-left">
              <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-bold text-white">
                <span className="text-[#915EFF]">{useTypewriterLoop(TYPEWRITER_TEXTS)}</span>
                <span className="text-[#915EFF] animate-pulse">|</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Full Stack Developer <br className="sm:block hidden" />
                Currently Open to Exciting Full-Time Roles
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-8 sm:mt-10"
              >
                <p className="text-secondary text-[15px] sm:text-[17px] max-w-full sm:max-w-3xl leading-[26px] sm:leading-[30px]">
                  As a Full Stack Developer with one year of experience, I've worked on real-world projects using React and .NET Core, and I'm passionate about learning, improving, and delivering impactful solutions.
                </p>
                <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 items-center justify-center lg:justify-start">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/917814073920?text=Hi%20Piyush%2C%20I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
                    className="bg-[#915EFF] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-center"
                  >
                    Get in Touch
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/work"
                    className="border-2 border-[#915EFF] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#915EFF] transition-all w-full sm:w-auto text-center"
                  >
                    View Projects
                  </motion.a>
                </div>
                <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <StatCard number="1 Year" label="Hands-on Experience" />
                  <StatCard number="10 +" label="Tech Stack Tools Used" />
                  <StatCard number="3" label="Companies Worked At" />
                  <StatCard number="∞" label="Passion for Learning" />
                </div>
              </motion.div>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center mb-8 lg:mb-60 w-full lg:w-auto">
              <motion.img
                src={Avatar}
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full border-2 border-[#915EFF] shadow-md object-cover"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </div>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-20 sm:mt-0">
          <Link href="/">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="relative py-16 sm:py-20 bg-primary pb-8 sm:pb-0 mt-64 lg:mt-0">
        <div className={`${styles.paddingX} max-w-7xl mx-auto px-2 sm:px-6`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 sm:mb-20"
          >
            <h2 className="text-white font-bold text-[28px] sm:text-[32px] mb-8 sm:mb-10 flex items-center gap-2 mt-64 sm:mt-0 lg:mt-0 md:mt-0">
              <span className="text-[#915EFF] text-[26px] sm:text-[30px]">💼</span> Experience
            </h2>
            <div className="flex flex-col">
              <VerticalTimeline>
                {experiences.slice(0, 2).map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))}
              </VerticalTimeline>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-[32px] mb-10 flex items-center gap-2">
              <span className="text-[#915EFF] text-[30px]">&lt;/&gt;</span> Featured Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="bg-tertiary rounded-xl p-8 flex flex-col items-center">
                <h3 className="text-white font-bold text-[20px] mb-4">
                Programming Languages</h3>
                <p className="text-secondary text-[16px] text-center">
                  HTML5, CSS3/Tailwind CSS, C#, React.js, .NET Core, SQL Server
                </p>
              </div>
              {/* Platforms Used */}
              <div className="bg-tertiary rounded-xl p-8 flex flex-col items-center">
                <h3 className="text-white font-bold text-[20px] mb-4">Platforms Used</h3>
                <p className="text-secondary text-[16px] text-center">
                  Visual Studio, Visual Studio Code, Git, GitHub, Postman
                </p>
              </div>
              {/* Operating Systems Used */}
              <div className="bg-tertiary rounded-xl p-8 flex flex-col items-center">
                <h3 className="text-white font-bold text-[20px] mb-4">Operating Systems Used</h3>
                <p className="text-secondary text-[16px] text-center">
                  Windows
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-[32px] mb-10 flex items-center gap-2">
              <span className="text-[#915EFF] text-[30px]">🏆</span> Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <AchievementCard
                title="IIS Deployment Done"
                description="Deployed .NET projects on IIS and configured connection strings securely."
              />
              <AchievementCard
                title="Completed Client Projects"
                description="Worked on real-world client requirements with clean, maintainable code."
              />
              <AchievementCard
                title="Portfolio Website Launched"
                description="Showcases full-stack projects, achievements, and skills in a clean, responsive design."
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-white font-bold text-[32px] mb-10 flex items-center gap-2">
              <span className="text-[#915EFF] text-[30px]">🎓</span> Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-tertiary p-6 rounded-2xl flex flex-col items-start">
                <h3 className="text-white font-bold text-[20px] mb-2 flex items-center gap-2">
                  B.Tech in Computer Science
                </h3>
                <p className="text-secondary text-[16px] mb-1">I.K.G Punjab Technical University, Jalandhar</p>
                <p className="text-secondary text-[15px] mb-2">2020 - 2024 | 8.4 CGPA</p>
              </div>
              <div className="bg-tertiary p-6 rounded-2xl flex flex-col items-start">
                <h3 className="text-white font-bold text-[20px] mb-2 flex items-center gap-2">
                  Intermediate
                </h3>
                <p className="text-secondary text-[16px] mb-1">Senior Secondary School, PSEB</p>
                <p className="text-secondary text-[15px] mb-2">2019 - 2020 | 89%</p>
              </div>
              <div className="bg-tertiary p-6 rounded-2xl flex flex-col items-start">
                <h3 className="text-white font-bold text-[20px] mb-2 flex items-center gap-2">
                  Matriculation
                </h3>
                <p className="text-secondary text-[16px] mb-1">Navyug Senior Secondary School, Abohar</p>
                <p className="text-secondary text-[15px] mb-2">2017 - 2018 | 83%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-white font-bold text-[32px] mb-10">Let's Connect</h2>
            <div className="flex flex-wrap gap-4 justify-around">
              {[
                { name: 'Github', url: 'https://github.com/piyush6842', icon: <img src={GithubLogo} alt="Github" className="w-6 h-6" /> },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/piyushmittal2002', icon: <img src={LinkedinLogo} alt="LinkedIn" className="w-6 h-6 rounded" /> },
                { name: 'Mobile', url: 'tel:+917814073920', icon: <FiSmartphone className="w-6 h-6" /> },
                { name: 'Mail', url: 'mailto:piyushmittal033@gmail.com', icon: <FiMail className="w-6 h-6" /> },
                { name: 'Resume', url: '/PiyushMittalFullStackResume.pdf', icon: <FiFileText className="w-6 h-6" />, download: true },
              ].map((link) => (
                <motion.a
                  key={link.name}
                  whileHover={{ y: -5 }}
                  href={link.url}
                  target={link.download ? undefined : "_blank"}
                  rel={link.download ? undefined : "noopener noreferrer"}
                  download={link.download ? true : undefined}
                  className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-lg text-white hover:text-[#915EFF] transition-colors"
                >
                  <span>{link.icon}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 