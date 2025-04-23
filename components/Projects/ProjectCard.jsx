import Image from "next/image";
import { FaEye, FaGithub } from "react-icons/fa";

const IconText = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
);

const ProjectCard = ({ data }) => {
  const {
    title,
    shortDescription,
    technologies,
    livePreview,
    githubLink,

    cover,
  } = data;

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col items-start flex-wrap gap-3 ">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">
              {title}
            </h3>
            <div className="flex gap-3">
              {technologies.map((tech, index) => (
                <Image
                  alt={title}
                  key={index}
                  src={tech}
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <Image
            src={cover}
            width={150}
            height={80}
            alt="Project Cover"
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary text-primary-content my-4 min-h-[100px] overflow-scroll rounded-2xl p-4">
          <p className="text-[14px] font-normal md:text-base">
            {shortDescription}
          </p>
        </div>
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
            >
              <FaEye className="h-auto w-[18px] md:w-5" />
              <span>Live Preview</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex items-center gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
            >
              <FaGithub className="text-base md:w-5" />
              <span>Github Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
