import { userData } from "@/data/data";
import { FaMessage } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12"
    >
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">Let's Talk</h3>

          <p className="text-neutral mt-8">
            Crafting innovative solutions to solve real-world problems
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">Contact Information</p>
          <p className="text-neutral">{userData.name}</p>
          {userData.emails.map((email, index) => (
            <a
              key={index}
              href={`mailto:${email}`}
              className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
            >
              <FaMessage /> {email}
            </a>
          ))}
          <a
            href={`tel:${userData.phone}`}
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300"
          >
            <FaPhone /> {userData.phone}
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactSection;
