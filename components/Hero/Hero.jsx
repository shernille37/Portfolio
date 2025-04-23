"use client";

import Image from "next/image";

const Hero = () => {
  const role = "Full Stack Developer";

  return (
    <section className="bg-primary min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">
              Hi - I'm Shernille Licud
            </span>
            <span className="text-accent block text-[1.75rem] font-bold">
              {role}
            </span>
          </h1>

          <h2 className="text-neutral mt-3">
            Strong passion for Software Development
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href={"/cv/ShernilleKhyle_Licud_Resume.pdf"}
              download
              aria-label="Curriculum Vitae"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={"/images/profile_picture.jpeg"}
              priority={true}
              fill={true}
              alt="Shernille Licud - Full Stack Developer"
              className="object-cover object-top rounded-2xl md:rounded-full md:p-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
