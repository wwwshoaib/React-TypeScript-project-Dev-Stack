import type { ReactNode } from "react";

interface TechnologiesProps {
  children?: ReactNode;
}

const Technologies = ({ children }: TechnologiesProps) => {
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
          {/* Technology cards will be placed here */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {children}
          </div>

          {/* Your Stack design */}
          <aside className="rounded-2xl border border-[#e6eaf0] bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">
            <h3 className="text-base font-bold text-[#152036]">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-[#9aa5b8]">
              2 Technologies Selected
            </p>

            <div className="mt-4 space-y-2">
              {/* Selected item 1 */}
              <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-[#dfe5ec] px-3 py-2">
                <div className="h-7 w-7 rounded-md bg-orange-500" />

                <div className="flex-1">
                  <h4 className="text-xs font-bold text-[#172033]">
                    Svelte
                  </h4>
                  <p className="text-[9px] text-[#909aae]">
                    Frontend
                  </p>
                </div>

                <button
                  type="button"
                  className="text-xl font-light text-[#9ba8bd]"
                >
                  ×
                </button>
              </div>

              {/* Selected item 2 */}
              <div className="flex min-h-[48px] items-center gap-3 rounded-lg border border-[#dfe5ec] px-3 py-2">
                <div className="h-7 w-7 rounded-md bg-red-600" />

                <div className="flex-1">
                  <h4 className="text-xs font-bold text-[#172033]">
                    Redis
                  </h4>
                  <p className="text-[9px] text-[#909aae]">
                    Database
                  </p>
                </div>

                <button
                  type="button"
                  className="text-xl font-light text-[#9ba8bd]"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="my-5 border-t border-[#edf0f4]" />

            <button
              type="button"
              className="h-9 w-full rounded-md border border-[#ffaaa7] text-xs font-semibold text-[#ff3932] transition hover:bg-red-50"
            >
              Remove All
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;