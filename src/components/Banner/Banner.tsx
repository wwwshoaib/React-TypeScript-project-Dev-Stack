import BannerImage from "../../assets/banner-stack.png";
const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid min-h-86.5 max-w-300 grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-16 md:py-12 lg:px-16">
        {/* Banner content */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1 className="text-[38px] font-extrabold leading-[1.02] tracking-[-1.5px] text-[#10182c] sm:text-[44px] lg:text-[48px]">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-[#ff4e24] via-[#f43c72] to-[#a72cf0] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-130 text-[14px] leading-[1.65] text-[#657089] md:mx-0">
            Explore frontend, backend, database, and tooling options,
            <br className="hidden lg:block" />
            compare them side by side, and put together the stack that fits
            your
            <br className="hidden lg:block" />
            next project.
          </p>

          {/* Banner buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#technologies"
              className="inline-flex h-9.5 items-center justify-center rounded-[6px] bg-gradient-to-r from-[#ff5a24] to-[#f23791] px-4.25 text-[12px] font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Technologies
            </a>

            <a
              href="#learn-more"
              className="inline-flex h-[38px] min-w-[132px] items-center justify-center rounded-[6px] border border-[#e1e5ec] bg-white px-[22px] text-[12px] font-medium text-[#60697c] transition duration-300 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner image */}
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <img
            src= {BannerImage}
            alt="Development technology stack"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;