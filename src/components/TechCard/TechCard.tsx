import type {
  Dispatch,
  SetStateAction,
} from "react";

import { toast } from "react-toastify";
import type { TechTypeProps } from "../../Type/TechType";

interface TechCardProps {
  tech: TechTypeProps;
  Stack: TechTypeProps[];
  setStack: Dispatch<SetStateAction<TechTypeProps[]>>;
  setTechNumber: Dispatch<SetStateAction<number>>;
}

const TechCard = ({
  tech,
  Stack,
  setStack,
  setTechNumber,
}: TechCardProps) => {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = tech;

  // Stack-এ technology থাকলে button disabled হবে।
  // Delete করলে এটি automatically false হয়ে button active হবে।
  const isSelected = Stack.some(
    (stackTech) => stackTech.id === tech.id,
  );

  const handleAddToStack = () => {
    if (isSelected) return;

    setStack((previousStack) => [...previousStack, tech]);

    setTechNumber((previousNumber) => previousNumber + 1);

    toast.success(`${name} added to Stack`, {
      position: "top-center",
      autoClose: 600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  return (
    <article className="flex min-h-[340px] w-full flex-col rounded-[20px] border border-[#e7ebf1] bg-white p-6 shadow-[0_3px_12px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]">
      {/* Technology icon and badge */}
      <div className="flex min-h-10 items-start justify-between">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-500">
          {badge}
        </span>
      </div>

      {/* Technology information */}
      <div className="mt-5">
        <h3 className="text-[23px] font-bold leading-tight text-[#10182c]">
          {name}
        </h3>

        <p className="mt-4 line-clamp-3 min-h-[72px] text-[14px] leading-6 text-[#7a869d]">
          {description}
        </p>
      </div>

      {/* Card footer */}
      <div className="mt-auto border-t border-[#edf0f4] pt-4">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-[#f4f6f9] px-2.5 py-1.5 text-[11px] font-medium text-[#68758d]">
            {category}
          </span>

          <span className="text-[11px] font-medium text-[#68758d]">
            {difficulty}
          </span>

          <span className="flex items-center gap-1 text-[11px] font-semibold text-[#3c465a]">
            <svg
              className="h-4 w-4 fill-amber-400 text-amber-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m12 2.5 2.86 5.8 6.4.93-4.63 4.51 1.09 6.38L12 17.11l-5.72 3.01 1.09-6.38-4.63-4.51 6.4-.93L12 2.5Z" />
            </svg>

            {rating}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAddToStack}
          disabled={isSelected}
          className={`mt-4 h-9 w-full rounded-md border text-xs font-semibold transition ${
            isSelected
              ? "cursor-not-allowed border-gray-400 bg-gray-400 text-white"
              : "border-[#ffaaa7] bg-violet-500 text-white hover:bg-green-600"
          }`}
        >
          {isSelected ? "Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
};

export default TechCard;