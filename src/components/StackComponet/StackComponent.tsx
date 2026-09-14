import type {
  Dispatch,
  SetStateAction,
} from "react";

import type { TechTypeProps } from "../../Type/TechType";

interface StackComponentProps {
  Stack: TechTypeProps[];
  setStack: Dispatch<SetStateAction<TechTypeProps[]>>;
  TechNumber: number;
  setTechNumber: Dispatch<SetStateAction<number>>;
}

const StackComponent = ({
  Stack,
  setStack,
  TechNumber,
  setTechNumber,
}: StackComponentProps) => {
  // Delete a single technology
  const handleRemoveTech = (techId: TechTypeProps["id"]) => {
    setStack((previousStack) => {
      const updatedStack = previousStack.filter(
        (tech) => tech.id !== techId,
      );

      setTechNumber(updatedStack.length);

      return updatedStack;
    });
  };

  // Delete all technologies
  const handleRemoveAll = () => {
    setStack([]);
    setTechNumber(0);
  };

  return (
    <div>
      <h3 className="text-base font-bold text-[#152036]">
        Your Stack
      </h3>

      <p className="mt-1 text-xs text-[#94a3b8]">
        {TechNumber}{" "}
        {TechNumber === 1
          ? "technology selected"
          : "technologies selected"}
      </p>

      {/* Selected technologies */}
      <div className="mt-5 space-y-3">
        {Stack.map((tech) => (
          <div
            key={tech.id}
            className="flex items-center gap-3 rounded-lg border border-[#edf0f4] bg-[#f8fafc] p-3"
          >
            <img
              src={tech.icon}
              alt={`${tech.name} logo`}
              className="h-8 w-8 shrink-0 object-contain"
            />

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold text-[#152036]">
                {tech.name}
              </h4>

              <p className="truncate text-xs text-[#94a3b8]">
                {tech.category}
              </p>
            </div>

            {/* Delete single technology */}
            <button
              type="button"
              onClick={() => handleRemoveTech(tech.id)}
              aria-label={`Remove ${tech.name}`}
              title={`Remove ${tech.name}`}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6 6 18"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="my-5 border-t border-[#edf0f4]" />

      {/* Delete all technologies */}
      <button
        type="button"
        onClick={handleRemoveAll}
        className="h-9 w-full rounded-md border border-[#ffaaa7] text-xs font-semibold text-[#ff3932] transition hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackComponent;