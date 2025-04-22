import React from "react";

const Input = ({ label, id, name, type, placeholder, required }) => {
  const inputClass =
    "border-border focus:ring-accent text-neutral w-full resize-none rounded-lg border p-[10px] placeholder:font-thin focus:ring-2 focus:outline-none";

  return (
    <div className="mb-4 flex w-full flex-col gap-2">
      <label htmlFor={name} className="text-neutral text-base">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className={inputClass}
          rows="7"
          autoComplete="off"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          className={inputClass}
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Input;
