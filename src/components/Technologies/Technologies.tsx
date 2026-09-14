import {
  use,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { TechTypeProps } from "../../Type/TechType";
import TechCard from "../TechCard/TechCard";
import StackEmptyComponent from "../StackEmptyComponent/StackEmptyComponent";
import StackComponent from "../StackComponet/StackComponent";

export interface TechnologiesProps {
  techPromise: Promise<TechTypeProps[]>;
}

export interface StackProps {
  Stack: TechTypeProps[];
  setStack: Dispatch<SetStateAction<TechTypeProps[]>>;
}

const Technologies = ({ techPromise }: TechnologiesProps) => {
  const technologies = use(techPromise);

  
  const [Stack, setStack] = useState<TechTypeProps[]>([]);
  const [TechNumber, setTechNumber] = useState<number>(0);

  return (
    <section
      id="technologies"
      className="w-full bg-[#fbfcfe] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-8 lg:mb-10">
          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-1px] text-[#10182c] sm:text-[34px] lg:text-[38px]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-[#748099] sm:text-[15px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards and stack layout */}
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_230px]">
          {/* Technology cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                setStack={setStack}
                setTechNumber={setTechNumber}
              />
            ))}
          </div>

          {/* Selected stack */}
          <aside className="rounded-2xl border border-[#e6eaf0] bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
            {Stack.length === 0 ? (
              <StackEmptyComponent />
            ) : (
              <StackComponent
                Stack={Stack}
                TechNumber={TechNumber}
                setTechNumber={setTechNumber}
              />
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;