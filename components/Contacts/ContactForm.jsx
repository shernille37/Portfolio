"use client";

// import action from "@/actions/contact-form";
import { useActionState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const ContactForm = () => {
  // const [status, formAction, isPending] = useActionState(action, null);

  // if (status?.success) {
  //   return (
  //     <p className="text-accent self-center text-center text-2xl font-medium">
  //       {status.message}
  //     </p>
  //   );
  // }

  return (
    <form>
      <Input
        label={"Full Name"}
        id={"name"}
        name={"name"}
        placeholder={"Enter your name"}
        type={"text"}
        required
      />
      <Input
        label={"Email Address"}
        id={"email"}
        name={"email"}
        placeholder={"Enter your email"}
        type={"email"}
        required
      />
      <Input
        label={"Subject"}
        id={"subject"}
        name={"subject"}
        placeholder={"Enter the subject"}
        type={"text"}
        required
      />
      <Input
        label={"Message"}
        id={"message"}
        name={"message"}
        placeholder={"Enter your message"}
        type={"textarea"}
        required
      />
      <Button text={"Submit"} />

      {/* {!status?.success && (
        <p className="my-2 font-light text-red-600">{status?.message}</p>
      )} */}
    </form>
  );
};

export default ContactForm;
