import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import htmlLogo from '../assets/Images/html-5.png';
import cssLogo from '../assets/Images/css-3.png';
import dapperLogo from '../assets/Images/DapperLogo.png';
import entityLogo from '../assets/Images/EntityLogo.png';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const TechStackItem = ({ icon, name, experience }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-tertiary p-4 rounded-xl flex items-center gap-4"
  >
    <div className="text-[24px]">{icon}</div>
    <div>
      <h4 className="text-white font-medium">{name}</h4>
      <p className="text-secondary text-sm">{experience} Experience</p>
    </div>
  </motion.div>
);

const InterestCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-tertiary p-5 rounded-xl"
  >
    <div className="text-[24px] mb-3">{icon}</div>
    <h4 className="text-white font-bold text-[18px] mb-2">{title}</h4>
    <p className="text-secondary text-[14px]">{description}</p>
  </motion.div>
);

const ValueCard = ({ title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-tertiary p-6 rounded-xl"
  >
    <h4 className="text-white font-bold text-[18px] mb-3">{title}</h4>
    <p className="text-secondary text-[14px] leading-[24px]">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative w-full pt-28">
      <section className="relative py-20">
        <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-white font-bold text-[24px] mb-4">My Journey</h3>
                <div className="space-y-4">
                  <p className="text-secondary text-[17px] leading-[30px]">
                  Hi, I'm a Full Stack Developer from Abohar, Punjab, with hands-on experience in building modern and responsive web applications. I enjoy working with technologies like ReactJS, .NET Core, and SQL Server, and I'm always exploring new ways to solve real-world problems through code.                  </p>
                  <p className="text-secondary text-[17px] leading-[30px]">
                  After completing my B.Tech in Computer Science from SVIET, I worked as an intern at Audax Labs, where I gained practical experience with ReactJS, Tailwind CSS, Node.js, Express, and MongoDB. This experience gave me insights into how development works in a real corporate environment — from teamwork and deadlines to writing clean, efficient code.
                  </p>
                  <p className="text-secondary text-[17px] leading-[30px]">
                  Currently, I'm focused on improving my full-stack development skills by working on personal projects and building real-world applications that strengthen both my frontend and backend capabilities.                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-[24px] mb-4">Work Philosophy</h3>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: "Understand First, Code Later",
                      description: "I take time to understand the requirements and structure before jumping into code. Planning saves hours later."
                    },
                    {
                      title: "Learn from Every Project",
                      description: "With every app I build, I reflect on what went well and where I can improve — this has been the best way for me to grow."
                    },
                    {
                      title: "Continuous Learning",
                      description: "The tech world evolves rapidly, and I make it a priority to stay updated with the latest technologies and best practices through continuous learning and experimentation."
                    }
                  ].map((value, index) => (
                    <ValueCard key={index} {...value} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.5, 1)}
            className="mt-20"
          >
            <h3 className="text-white font-bold text-[24px] mb-8">My Hobbies</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-60">
                <span className="text-4xl mb-3">🏏</span>
                <h4 className="text-white font-bold text-[18px] mb-2">Playing Cricket</h4>
                <p className="text-secondary text-[14px] text-center">I love playing cricket with friends and enjoy both batting and bowling.</p>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-60">
                <span className="text-4xl mb-3">♟️</span>
                <h4 className="text-white font-bold text-[18px] mb-2">Chess</h4>
                <p className="text-secondary text-[14px] text-center">Chess helps me improve my strategic thinking and patience.</p>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-60">
                <span className="text-4xl mb-3">✈️</span>
                <h4 className="text-white font-bold text-[18px] mb-2">Travelling</h4>
                <p className="text-secondary text-[14px] text-center">I enjoy exploring new places, cultures, and cuisines whenever I can.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.7, 1)}
            className="mt-20"
          >
            <h3 className="text-white font-bold text-[24px] mb-8">Technical Expertise</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <span className="mb-2 w-12 h-12 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z">
                  </path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path>
                  <path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path>
                  <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                </svg>
                </span>
                <h4 className="text-white font-bold text-[18px] mb-1">React</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <span className="mb-2 w-12 h-12 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-12 h-12">
                    <path fill="#6a1b9a" d="M44,24c0,5.694-2.381,10.831-6.2,14.481l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025C13.169,6.381,18.306,4,24,4 C35.044,4,44,12.956,44,24z"></path>
                    <path fill="#7b1fa2" d="M38.375,37.862c-0.187,0.213-0.381,0.419-0.575,0.619l-0.006,0.006C34.2,41.9,29.344,44,24,44 C12.956,44,4,35.044,4,24c0-5.338,2.087-10.188,5.5-13.775c0.006-0.013,0.013-0.019,0.019-0.025c0.2-0.194,0.406-0.387,0.619-0.575 L38.375,37.862z"></path>
                    <path fill="#fff" d="M8.626,27.281c-0.236,0.004-0.463-0.091-0.625-0.262c-0.167-0.165-0.259-0.39-0.256-0.625 c-0.002-0.234,0.091-0.459,0.256-0.625c0.161-0.174,0.388-0.272,0.625-0.269c0.237-0.001,0.463,0.097,0.625,0.269 c0.169,0.164,0.263,0.39,0.262,0.625c0.002,0.236-0.093,0.462-0.262,0.625C9.087,27.188,8.861,27.283,8.626,27.281z"></path>
                    <path fill="#fff" d="M21.044,27.125h-1.638l-5.856-9.087c-0.146-0.224-0.267-0.463-0.363-0.712h-0.05 c0.056,0.519,0.077,1.041,0.062,1.562v8.237h-1.331V15.731h1.731l5.7,8.925c0.237,0.371,0.392,0.625,0.462,0.763h0.031 c-0.066-0.556-0.093-1.115-0.081-1.675v-8.012h1.331V27.125z"></path>
                    <path fill="#fff" d="M30.057,27.125h-6.056V15.731h5.775v1.206h-4.412v3.788h4.113v1.2h-4.113v3.95h4.7L30.057,27.125z"></path>
                    <path fill="#fff" d="M39.001,16.938h-3.312v10.188h-1.331V16.938h-3.275v-1.206h7.919V16.938z"></path>
                    <path fill="#f2f2f2" d="M20.326,34.875c-0.451,0.219-0.949,0.324-1.45,0.306c-0.674,0.03-1.327-0.232-1.794-0.719 c-0.459-0.514-0.701-1.186-0.675-1.875c-0.034-0.754,0.239-1.489,0.756-2.038c0.505-0.517,1.203-0.798,1.925-0.775 c0.427-0.015,0.853,0.06,1.25,0.219v0.625c-0.382-0.212-0.813-0.319-1.25-0.312c-0.557-0.016-1.094,0.213-1.469,0.625 c-0.39,0.444-0.592,1.022-0.562,1.612c-0.029,0.559,0.159,1.108,0.525,1.531c0.355,0.382,0.86,0.59,1.381,0.569 c0.48,0.013,0.954-0.109,1.369-0.35L20.326,34.875z"></path>
                    <path fill="#f2f2f2" d="M22.882,35.181c-0.503,0.016-0.989-0.187-1.331-0.556c-0.342-0.381-0.519-0.882-0.494-1.394 c-0.032-0.541,0.155-1.073,0.519-1.475c0.371-0.362,0.876-0.555,1.394-0.531c0.49-0.026,0.967,0.163,1.306,0.519 c0.332,0.4,0.5,0.912,0.469,1.431c0.026,0.527-0.156,1.043-0.506,1.438C23.89,34.989,23.395,35.197,22.882,35.181z M22.926,31.762 c-0.348-0.015-0.684,0.13-0.912,0.394c-0.24,0.31-0.36,0.696-0.338,1.088c-0.022,0.38,0.098,0.754,0.338,1.05 c0.231,0.26,0.566,0.402,0.912,0.388c0.34,0.02,0.67-0.118,0.894-0.375c0.227-0.31,0.338-0.691,0.312-1.075 c0.025-0.386-0.086-0.768-0.312-1.081C23.599,31.888,23.268,31.745,22.926,31.762z"></path>
                    <path fill="#f2f2f2" d="M27.663,31.95c-0.135-0.088-0.295-0.13-0.456-0.119c-0.256,0.009-0.49,0.145-0.625,0.363 c-0.186,0.295-0.276,0.64-0.256,0.988v1.912h-0.625v-3.75h0.625v0.781l0,0c0.069-0.242,0.205-0.459,0.394-0.625 c0.163-0.141,0.372-0.219,0.587-0.219c0.121-0.005,0.242,0.012,0.356,0.05V31.95z"></path>
                    <path fill="#f2f2f2" d="M31.326,33.375h-2.644c-0.018,0.349,0.096,0.693,0.319,0.963c0.234,0.234,0.557,0.356,0.887,0.338 c0.424-0.004,0.833-0.152,1.163-0.419v0.562c-0.386,0.255-0.844,0.38-1.306,0.356c-0.472,0.024-0.93-0.164-1.25-0.513 c-0.325-0.406-0.488-0.918-0.456-1.438c-0.022-0.52,0.154-1.03,0.494-1.425c0.313-0.362,0.772-0.564,1.25-0.55 c0.432-0.024,0.851,0.151,1.138,0.475c0.288,0.379,0.43,0.85,0.4,1.325L31.326,33.375z M30.701,32.869 c0.013-0.29-0.076-0.575-0.25-0.806c-0.173-0.196-0.426-0.302-0.688-0.288c-0.272-0.003-0.533,0.108-0.719,0.306 c-0.206-0.218-0.335-0.496-0.369-0.794L30.701,32.869z"></path>
                  </svg>
                </span>
                <h4 className="text-white font-bold text-[18px] mb-1">.NET</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <img src={dapperLogo} alt="Dapper" className="w-12 h-12 mb-2 object-contain" />
                <h4 className="text-white font-bold text-[18px] mb-1">Dapper</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <img src={entityLogo} alt="Entity Framework" className="w-12 h-12 mb-2 object-contain" />
                <h4 className="text-white font-bold text-[18px] mb-1">Entity</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <img src={htmlLogo} alt="HTML5" className="w-12 h-12 mb-2 object-contain" />
                <h4 className="text-white font-bold text-[18px] mb-1">HTML</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <img src={cssLogo} alt="CSS3" className="w-12 h-12 mb-2 object-contain" />
                <h4 className="text-white font-bold text-[18px] mb-1">CSS</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-12 h-12 mb-2">
                  <path fill="#6a1b9a" d="M36,5L17,21.5L7,14l-3,1.25v17.5L7,34l10-7.5L36,43l8-3V8L36,5z M8,20l5,4l-5,4V20z M24,24l10-7v14 L24,24z"></path>
                </svg>
                <h4 className="text-white font-bold text-[18px] mb-1">Visual Studio</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48" className="w-12 h-12 mb-2">
                  <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path>
                  <path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path>
                  <path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                </svg>
                <h4 className="text-white font-bold text-[18px] mb-1">VS Code</h4>
              </div>
              <div className="bg-tertiary p-6 rounded-xl flex flex-col items-center w-48">
                <svg className="w-12 h-12 mb-2 object-contain" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M254.953118,144.253071 C263.911504,74.1217108 214.38443,10.0052669 144.381048,1.04688158 C74.3776647,-7.9115038 10.0052669,41.6155696 1.04688158,111.618952 C-7.9115038,181.622335 41.6155696,245.866756 111.618952,254.953118 C181.750312,263.911504 245.866756,214.38443 254.953118,144.253071 Z" fill="#FF6C37"> </path> <g transform="translate(50.181225, 45.198924)"> <path d="M124.018448,36.9853339 L70.012182,90.9916 L54.7829269,75.7623449 C107.893354,22.6519173 113.140409,27.2590869 124.018448,36.9853339 L124.018448,36.9853339 Z" fill="#FFFFFF"> </path> <path d="M70.012182,92.2713693 C69.6282512,92.2713693 69.3722974,92.1433924 69.1163435,91.8874385 L53.7591114,76.6581834 C53.2472037,76.1462757 53.2472037,75.3784141 53.7591114,74.8665063 C107.765378,20.8602402 113.396363,25.9793176 124.78631,36.2174723 C125.042264,36.4734262 125.170241,36.72938 125.170241,37.1133108 C125.170241,37.4972416 125.042264,37.7531955 124.78631,38.0091494 L70.7800436,91.8874385 C70.6520667,92.1433924 70.2681359,92.2713693 70.012182,92.2713693 Z M56.574604,75.7623449 L70.012182,89.1999229 L122.098794,37.1133108 C112.628501,28.6668332 106.229654,26.1072945 56.574604,75.7623449 L56.574604,75.7623449 Z" fill="#FF6C37"> </path> <path d="M85.497391,106.476809 L70.7800436,91.7594616 L124.78631,37.7531955 C139.247703,52.342566 117.619601,76.0182987 85.497391,106.476809 Z" fill="#FFFFFF"> </path> <path d="M85.497391,107.756578 C85.1134602,107.756578 84.8575064,107.628601 84.6015525,107.372648 L69.8842051,92.6553001 C69.6282512,92.3993463 69.6282512,92.1433924 69.6282512,91.7594616 C69.6282512,91.3755308 69.7562282,91.1195769 70.012182,90.8636231 L124.018448,36.857357 C124.530356,36.3454492 125.298217,36.3454492 125.810125,36.857357 C129.137525,39.9288034 130.929203,44.2800191 130.801226,48.7592118 C130.545272,62.9646515 114.420178,81.0093992 86.5212065,107.372648 C86.1372757,107.628601 85.7533449,107.756578 85.497391,107.756578 L85.497391,107.756578 Z M72.5717207,91.7594616 C80.7622445,100.077962 84.2176217,103.405363 85.497391,104.685132 C106.997516,84.2088225 127.857756,63.2206053 127.985733,48.7592118 C128.11371,45.4318115 126.833941,42.1044113 124.658333,39.5448726 L72.5717207,91.7594616 Z" fill="#FF6C37"> </path> <path d="M55.0388808,76.1462757 L65.9169201,87.024315 C66.172874,87.2802689 66.172874,87.5362228 65.9169201,87.7921767 C65.7889432,87.9201536 65.7889432,87.9201536 65.6609663,87.9201536 L43.1370259,92.7832771 C41.9852335,92.911254 40.961418,92.1433924 40.7054642,90.9916 C40.5774872,90.3517153 40.8334411,89.7118307 41.2173719,89.3278999 L54.2710192,76.2742526 C54.526973,76.0182987 54.9109038,75.8903218 55.0388808,76.1462757 Z" fill="#FFFFFF"> </path> <path d="M42.7530951,94.0630464 C40.8334411,94.0630464 39.4256948,92.5273232 39.4256948,90.6076692 C39.4256948,89.7118307 39.8096256,88.8159921 40.4495103,88.1761075 L53.5031576,75.1224602 C54.2710192,74.4825755 55.2948346,74.4825755 56.0626962,75.1224602 L66.9407356,86.0004996 C67.7085972,86.6403842 67.7085972,87.7921767 66.9407356,88.5600383 C66.6847817,88.8159921 66.4288279,88.9439691 66.0448971,89.071946 L43.5209567,93.9350695 C43.2650028,93.9350695 43.009049,94.0630464 42.7530951,94.0630464 L42.7530951,94.0630464 Z M54.65495,77.5540219 L42.1132104,90.0957615 C41.8572566,90.3517153 41.7292796,90.7356461 41.9852335,91.1195769 C42.1132104,91.5035077 42.4971412,91.6314847 42.881072,91.5035077 L63.9972661,86.8963381 L54.65495,77.5540219 Z" fill="#FF6C37"> </path> <path d="M152.557304,7.03873136 C144.366781,-0.895838537 131.185156,-0.639884669 123.250587,7.67861603 C115.316017,15.9971167 115.57197,29.050764 123.890471,36.9853339 C130.673249,43.5121575 140.911403,44.6639499 148.97395,39.8008264 L134.38458,25.211456 L152.557304,7.03873136 Z" fill="#FFFFFF"> </path> <path d="M138.223888,44.0240653 C126.066079,44.0240653 116.211855,34.1698413 116.211855,22.0120326 C116.211855,9.85422391 126.066079,-1.81866161e-14 138.223888,-1.81866161e-14 C143.854873,-1.81866161e-14 149.357881,2.17560788 153.453143,6.14289283 C153.709097,6.39884669 153.837074,6.65480056 153.837074,7.03873136 C153.837074,7.42266217 153.709097,7.67861603 153.453143,7.9345699 L136.176257,25.211456 L149.741812,38.777011 C150.25372,39.2889187 150.25372,40.0567803 149.741812,40.568688 C149.613835,40.696665 149.613835,40.696665 149.485858,40.8246419 C146.158458,42.8722729 142.191173,44.0240653 138.223888,44.0240653 Z M138.223888,2.68751561 C127.473825,2.68751561 118.771394,11.3899471 118.899371,22.1400096 C118.899371,32.890072 127.601802,41.5925035 138.351865,41.4645266 C141.295334,41.4645266 144.238804,40.8246419 146.926319,39.4168956 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L150.63765,7.1667083 C147.182273,4.22323882 142.831057,2.68751561 138.223888,2.68751561 L138.223888,2.68751561 Z" fill="#FF6C37"> </path> <path d="M152.941235,7.42266217 L152.685281,7.1667083 L134.38458,25.211456 L148.845973,39.6728495 C150.25372,38.777011 151.661466,37.7531955 152.813258,36.6014031 C161.003782,28.5388563 161.003782,15.485209 152.941235,7.42266217 L152.941235,7.42266217 Z" fill="#FFFFFF"> </path> <path d="M148.97395,41.0805958 C148.590019,41.0805958 148.334066,40.9526188 148.078112,40.696665 L133.488741,26.1072945 C133.232787,25.8513406 133.10481,25.5953868 133.10481,25.211456 C133.10481,24.8275252 133.232787,24.5715713 133.488741,24.3156174 L151.661466,6.14289283 C152.173374,5.63098509 152.941235,5.63098509 153.453143,6.14289283 L153.837074,6.39884669 C162.411528,14.9733013 162.411528,28.7948101 153.965051,37.4972416 C152.685281,38.777011 151.277535,39.9288034 149.741812,40.8246419 C149.357881,40.9526188 149.101927,41.0805958 148.97395,41.0805958 L148.97395,41.0805958 Z M136.176257,25.211456 L149.101927,38.1371263 C150.125743,37.4972416 151.149558,36.6014031 151.91742,35.8335415 C159.212105,28.5388563 159.596036,16.6370014 152.557304,8.95838537 L136.176257,25.211456 Z" fill="#FF6C37"> </path> <path d="M126.194056,39.2889187 C123.12261,36.2174723 118.131509,36.2174723 115.060063,39.2889187 L66.8127587,87.5362228 L74.8753055,95.5987696 L125.938102,50.8068428 C129.265502,47.9913502 129.521456,43.0002498 126.705964,39.6728495 C126.45001,39.5448726 126.322033,39.4168956 126.194056,39.2889187 L126.194056,39.2889187 Z" fill="#FFFFFF"> </path> <path d="M74.7473286,96.878539 C74.3633978,96.878539 74.1074439,96.750562 73.85149,96.4946082 L65.7889432,88.4320613 C65.2770355,87.9201536 65.2770355,87.152292 65.7889432,86.6403842 L114.036247,38.3930802 C117.619601,34.809726 123.378563,34.809726 126.961918,38.3930802 C130.545272,41.9764343 130.545272,47.7353963 126.961918,51.3187505 C126.833941,51.4467274 126.705964,51.5747044 126.577987,51.7026813 L75.5151902,96.4946082 C75.3872133,96.750562 75.1312594,96.878539 74.7473286,96.878539 L74.7473286,96.878539 Z M68.6044358,87.5362228 L74.8753055,93.8070925 L125.042264,49.7830273 C127.857756,47.4794425 128.11371,43.2562037 125.810125,40.4407111 C123.50654,37.6252186 119.283302,37.3692647 116.467809,39.6728495 C116.339832,39.8008264 116.211855,39.9288034 115.955901,40.0567803 L68.6044358,87.5362228 Z" fill="#FF6C37"> </path> <path d="M29.8274248,142.438327 C29.3155171,142.694281 29.0595632,143.206189 29.1875401,143.718097 L31.363148,152.932436 C31.8750557,154.212205 31.1071941,155.747929 29.6994479,156.131859 C28.6756324,156.51579 27.52384,156.131859 26.8839553,155.363998 L12.8064926,141.414512 L58.7502118,95.4707927 L74.6193516,95.7267466 L85.3694141,106.476809 C82.8098754,108.652417 67.3246664,123.625718 29.8274248,142.438327 L29.8274248,142.438327 Z" fill="#FFFFFF"> </path> <path d="M28.8036093,157.411629 C27.7797938,157.411629 26.7559784,157.027698 26.1160937,156.259836 L12.1666079,142.31035 C11.910654,142.054397 11.7826771,141.798443 11.7826771,141.414512 C11.7826771,141.030581 11.910654,140.774627 12.1666079,140.518673 L58.1103272,94.5749541 C58.366281,94.3190003 58.7502118,94.1910233 59.0061657,94.1910233 L74.8753055,94.4469772 C75.2592363,94.4469772 75.5151902,94.5749541 75.7711441,94.830908 L86.5212065,105.58097 C86.7771604,105.836924 86.9051373,106.220855 86.9051373,106.604786 C86.9051373,106.988717 86.7771604,107.244671 86.3932296,107.500624 L85.497391,108.268486 C71.931836,120.170341 53.5031576,132.072196 30.5952864,143.462143 L32.7708943,152.548505 C33.1548251,154.212205 32.3869635,156.003882 30.8512403,156.899721 C30.0833787,157.283652 29.443494,157.411629 28.8036093,157.411629 Z M14.7261466,141.414512 L27.9077708,154.468159 C28.2917016,155.108044 29.0595632,155.363998 29.6994479,154.980067 C30.3393325,154.596136 30.5952864,153.828275 30.2113556,153.18839 L28.0357477,143.974051 C27.7797938,142.822258 28.2917016,141.798443 29.3155171,141.286535 C51.9674343,129.896588 70.2681359,118.12271 83.705714,106.476809 L74.2354208,97.0065159 L59.5180734,96.750562 L14.7261466,141.414512 Z" fill="#FF6C37"> </path> <path d="M1.9284532,152.420528 L12.9344695,141.414512 L29.3155171,157.795559 L3.20822254,156.003882 C2.05643013,155.875905 1.28856853,154.85209 1.41654546,153.700298 C1.41654546,153.18839 1.5445224,152.676482 1.9284532,152.420528 L1.9284532,152.420528 Z" fill="#FFFFFF"> </path> <path d="M29.3155171,158.947352 L3.0802456,157.155675 C1.16059159,157.027698 -0.119177745,155.363998 0.00879918845,153.444344 C0.136776122,152.676482 0.39272999,151.908621 1.03261466,151.396713 L12.038631,140.390696 C12.5505387,139.878789 13.3184003,139.878789 13.830308,140.390696 L30.2113556,156.771744 C30.5952864,157.155675 30.7232633,157.667583 30.4673095,158.17949 C30.2113556,158.691398 29.8274248,158.947352 29.3155171,158.947352 L29.3155171,158.947352 Z M12.9344695,143.206189 L2.82429173,153.316367 C2.44036093,153.572321 2.44036093,154.212205 2.82429173,154.468159 C2.95226867,154.596136 3.0802456,154.724113 3.33619947,154.724113 L25.9881168,156.259836 L12.9344695,143.206189 Z" fill="#FF6C37"> </path> <path d="M54.2710192,101.357732 C53.5031576,101.357732 52.9912498,100.717847 52.9912498,100.077962 C52.9912498,99.6940315 53.1192268,99.4380776 53.3751806,99.1821238 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L54.526973,101.357732 C54.3989961,101.357732 54.2710192,101.357732 54.2710192,101.357732 L54.2710192,101.357732 Z M66.6847817,89.4558768 L58.2383041,97.9023544 L72.059813,94.9588849 L66.6847817,89.4558768 Z" fill="#FF6C37"> </path> <path d="M74.6193516,95.7267466 L60.5418889,98.798193 C59.5180734,99.0541468 58.494258,98.4142622 58.2383041,97.3904467 C58.1103272,96.750562 58.2383041,96.1106774 58.7502118,95.5987696 L66.5568048,87.7921767 L74.6193516,95.7267466 Z" fill="#FFFFFF"> </path> <path d="M60.2859351,100.077962 C58.494258,100.077962 57.0865117,98.670216 57.0865117,96.878539 C57.0865117,95.9827004 57.4704425,95.2148388 57.9823502,94.5749541 L65.7889432,86.7683612 C66.3008509,86.2564534 67.0687125,86.2564534 67.5806203,86.7683612 L75.6431671,94.830908 C76.0270979,95.2148388 76.1550749,95.5987696 76.0270979,96.1106774 C75.899121,96.4946082 75.5151902,96.878539 75.0032825,97.0065159 L60.9258197,100.077962 C60.6698659,100.077962 60.413912,100.077962 60.2859351,100.077962 L60.2859351,100.077962 Z M66.6847817,89.4558768 L59.7740273,96.3666312 C59.5180734,96.6225851 59.5180734,96.878539 59.6460504,97.1344928 C59.7740273,97.3904467 60.0299812,97.5184236 60.413912,97.5184236 L72.1877899,94.9588849 L66.6847817,89.4558768 Z" fill="#FF6C37"> </path> <path d="M153.069212,19.7084478 C152.813258,18.9405862 151.91742,18.5566554 151.149558,18.8126093 C150.381697,19.0685632 149.997766,19.9644017 150.25372,20.7322633 C150.25372,20.8602402 150.381697,20.9882172 150.381697,21.1161941 C151.149558,22.6519173 150.893604,24.5715713 149.869789,25.9793176 C149.357881,26.6192023 149.485858,27.5150408 149.997766,28.0269485 C150.63765,28.5388563 151.533489,28.4108793 152.045397,27.7709947 C153.965051,25.3394329 154.348981,22.2679865 153.069212,19.7084478 L153.069212,19.7084478 Z" fill="#FF6C37"> </path> </g> </g> </g></svg>
                <h4 className="text-white font-bold text-[18px] mb-1">Postman</h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.9, 1)}
            className="mt-20"
          >
            <h3 className="text-white font-bold text-[24px] mb-8">Beyond Coding</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎓",
                  title: "Mentorship & Helping Others",
                  description: "I love helping fellow developers by sharing what I learn — whether it's through conversations, blog posts, or code reviews."
                },
                {
                  icon: "✍️",
                  title: "Learning from YouTube",
                  description: "YouTube has been one of my go-to platforms for learning new technologies and frontend development tricks."
                },
                {
                  icon: "🎤",
                  title: "Self Projects for Fun",
                  description: "I enjoy building small self-projects for fun — whether it's a portfolio site, a UI clone, or a basic tool — these help me learn by doing."
                },
                {
                  icon: "🌱",
                  title: "Learning from Mistakes",
                  description: "I believe the best learning happens when things break — I take errors as opportunities to understand what's really happening under the hood."
                },
                {
                  icon: "🎯",
                  title: "Learning Mindset",
                  description: "I'm curious by nature and always looking to explore new technologies and frameworks beyond my current stack."
                },
                {
                  icon: "🌐",
                  title: "Gaming / Hobbies",
                  description: "Outside of coding, I enjoy playing esports, chess, and cricket — which help me stay sharp, focused, and collaborative."
                }
              ].map((interest, index) => (
                <InterestCard key={index} {...interest} />
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-16">
            <a
              href="https://github.com/piyush6842"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#7000FF] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-lg"
            >
              Visit My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 