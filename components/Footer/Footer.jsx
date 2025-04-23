import { footerLinks, languages, socials, userData } from "@/data/data";
import Social from "../UI/Social";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-secondary relative flex min-h-[560px] flex-col justify-around gap-20 overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <div>
          <h5 className="mb-8 flex items-center gap-2">
            <Image
              src="/images/SKL.png"
              width={50}
              height={50}
              className="rounded-full"
              alt="Logo"
            />

            <span className="text-neutral text-lg font-medium">
              Shernille Licud
            </span>
          </h5>
        </div>

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline"
            >
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <ul className="flex flex-col gap-4">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <Social href={item.href} Icon={item.icon} />
              </li>
            ))}
          </ul>
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            <span>&copy; {new Date().getFullYear()} — Copyright</span>
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium">
                Contact Me
              </h5>
              {userData.emails.map((email, index) => (
                <a
                  key={index}
                  href={`mailto:${email}`}
                  className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300 mb-2"
                >
                  {email}
                </a>
              ))}
              <a
                href={`tel:${userData.phone}`}
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
              >
                {userData.phone}
              </a>
            </div>
          </div>

          <div className="md:self-end">
            <p className="text-neutral mb-8 text-sm md:text-right">Languages</p>
            <div className="flex gap-8 md:gap-4 lg:gap-8">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={
                    idx === 0 ? "text-neutral" : "text-tertiary-content"
                  }
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
