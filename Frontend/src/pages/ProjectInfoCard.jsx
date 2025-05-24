import { FaGithub } from "react-icons/fa";

const ProjectInfoCard = ({ title, content, github }) => {
    return (
      <div className="bg-[#121212] border border-green-500/20 rounded-2xl shadow-md p-6 text-gray-200 transition duration-300 transform hover:shadow-xl hover:shadow-green-500/20 hover:scale-[1.02]">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-400">{title}</h2>
        <div className="space-y-3 text-sm md:text-base leading-relaxed">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        {github && (
        <div className="flex justify-end mt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      )}
      </div>
    );
  };
  
export default ProjectInfoCard;
  