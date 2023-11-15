/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
export function Steps({ ActiveStep }) {
  const allSteps = [
    {
      id: "1",
      label: "Create account",
    },
    {
      id: "2",
      label: "Apply",
    },
    {
      id: "3",
      label: "Review & Submit",
    },
    // {
    //   id: "4",
    //   label: "Submit",
    // },
  ];

  return (
    <div className="mx-auto  max-w-3xl justify-between sm:gap-x-6  px-1  flex">
      {allSteps.map((step) => {
        const active = step.id == ActiveStep ? true : false;
        return (
          <div className="flex items-center gap-x-2" key={step.id}>
            <a
              className={`${
                active ? "bg-sky-400 font-bold text-white" : "text-black"
              } flex h-6 w-6 items-center justify-center rounded-full border border-white `}
              href=""
            >
              {step.id}
            </a>
            <p className=" text-xs sm:text-sm font-medium">{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export function ApplicationSteps({ ActiveStep }) {
  const allSteps = [
    {
      id: "1",
      label: "Submitted",
    },
    {
      id: "2",
      label: "Verified",
    },
    {
      id: "3",
      label: "Disbursed",
    },
    // {
    //   id: "4",
    //   label: "Submit",
    // },
  ];

  return (
    <div className="mx-auto  max-w-3xl justify-between sm:gap-x-6  px-1  flex">
      {allSteps.map((step) => {
        const active = step.id == ActiveStep ? true : false;
        return (
          <div className="flex items-center gap-x-2" key={step.id}>
            <a
              className={`${
                active ? "bg-sky-400 font-bold text-white" : "text-black"
              } flex h-6 w-6 items-center justify-center rounded-full border border-white `}
              href=""
            >
              {!active && step.id} {active && <FaCheck />}
            </a>
            <p className=" text-xs sm:text-sm font-medium">{step.label}</p>
          </div>
        );
      })}
    </div>
  );
}
