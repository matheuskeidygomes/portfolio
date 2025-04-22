import Avatar from '/assets/avatar.jpeg';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../utils/translations';
import Attachment from '/assets/attachment.png';

export default function Resume() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full">

      {/* Left side Container */}
      <div className="flex flex-col md:flex-row lg:flex-col gap-10 p-10 glassmorphism lg:w-[20%]">

        {/* Avatar */}
        <img src={Avatar} alt="Avatar" className="w-70 border-2 border-gray-800 rounded-full self-center" />

        {/* Personal information Container */}
        <div className="flex flex-col gap-6">

          {/* Name and job Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">Matheus Keidy</h1>
            <p className="text-xl text-gray-400">{translations[language].resume.personal.role}</p>
          </div>

          {/* Useful links Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">{translations[language].resume.title.usefulLinks}</h1>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/matheus-keidy-7b9886190/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6 cursor-pointer"
              >
                <svg
                  className="w-7 fill-neutral-50"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
                  ></path>
                </svg>
                <span className="px-1">LinkedIn</span>
              </a>

              <a
                href="https://github.com/matheuskeidygomes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black pl-2 pt-3 pb-3 pr-6 rounded-md border border-gray-600 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 items-center"
              >
                <svg viewBox="0 0 24 24" className="w-7 fill-neutral-50" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                Github
              </a>
            </div>
          </div>

          {/* Download resume Container */}
          <div className="flex flex-col gap-2">

            <h1 className="text-2xl font-bold text-white">{translations[language].resume.title.attachments}</h1>
            <a href={`/docs/${translations[language].resume.title.resumeFile}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300">
              <img src={Attachment} alt="Attachment" className="w-5 rounded-sm" />
              <span>{translations[language].resume.title.resume}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right side Container */}
      <div className="flex flex-1 flex-col p-10 gap-10 lg:flex-row ">

        {/* Left side */}
        <div className="flex flex-1 flex-col gap-6">

          {/* Personal information Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">{translations[language].resume.title.personal}</h1>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.age}: </h1>
              <p className="text-gray-300">{translations[language].resume.personal.age}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.location}: </h1>
              <p className="text-gray-300">{translations[language].resume.personal.location}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.email}: </h1>
              <p className="text-gray-300">{translations[language].resume.personal.email}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.phone}: </h1>
              <p className="text-gray-300">{translations[language].resume.personal.phone}</p>
            </div>
          </div>

          {/* Education Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">{translations[language].resume.title.education}</h1>
            <h2 className="text-lg font-bold text-gray-300">{translations[language].resume.education.university}</h2>
            <p className="text-gray-300">
              {translations[language].resume.education.course} - {translations[language].resume.education.graduation}
            </p>
          </div>

          {/* Languages Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">{translations[language].resume.title.languages}</h1>
            <p className="text-gray-300">
              {translations[language].resume.languages.portuguese}
            </p>
            <p className="text-gray-300">
              {translations[language].resume.languages.english}
            </p>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">{translations[language].resume.title.skills}</h1>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.frontend}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.frontend}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.backend}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.backend}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.database}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.database}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.cloud}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.cloud}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.messaging}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.messaging}</p>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="font-bold text-white text-lg">{translations[language].resume.title.devops}: </h1>
              <p className="text-gray-300">{translations[language].resume.skills.devops}</p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-1 flex-col gap-6"  >

          {/* Experience Container */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-white">{translations[language].resume.title.experience}</h1>

            {/* Findme Experience */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">{translations[language].resume.experience.findme.company}</h2>
              <p className="text-white font-bold">{translations[language].resume.experience.findme.location}</p>
              <p className="text-white font-bold">
                • {translations[language].resume.experience.findme.role} - {translations[language].resume.experience.findme.period}
              </p>
              <p className="text-gray-300">
                {translations[language].resume.experience.findme.description}
              </p>
            </div>

            {/* RRMV Caetano Experience */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">{translations[language].resume.experience.rrmvcaetano.company}</h2>
              <p className="text-white font-bold">{translations[language].resume.experience.rrmvcaetano.location}</p>
              <p className="text-white font-bold">
                • {translations[language].resume.experience.rrmvcaetano.role} - {translations[language].resume.experience.rrmvcaetano.period}
              </p>
              <p className="text-gray-300">
                {translations[language].resume.experience.rrmvcaetano.description}
              </p>
            </div>

            {/* Voxcity Experience */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">{translations[language].resume.experience.voxcity.company}</h2>
              <p className="text-white font-bold">{translations[language].resume.experience.voxcity.location}</p>
              <p className="text-white font-bold">
                • {translations[language].resume.experience.voxcity.role} - {translations[language].resume.experience.voxcity.period}
              </p>
              <p className="text-gray-300">
                {translations[language].resume.experience.voxcity.description}
              </p>
            </div>

            {/* Eprosys Experience */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-white">{translations[language].resume.experience.eprosys.company}</h2>
              <p className="text-white font-bold">{translations[language].resume.experience.eprosys.location}</p>
              <p className="text-white font-bold">
                • {translations[language].resume.experience.eprosys.role} - {translations[language].resume.experience.eprosys.period}
              </p>
              <p className="text-white font-bold">
                • {translations[language].resume.experience.eprosys.role2} - {translations[language].resume.experience.eprosys.period2}
              </p>
              <p className="text-gray-300">
                {translations[language].resume.experience.eprosys.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

