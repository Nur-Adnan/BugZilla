import React from "react";

function Home() {
  return (
    <div className="relative flex items-center justify-center pt-48">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header>
          <div className="md:hidden"></div>
          <nav className="pb-5 md:text-sm">
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8"></div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl ">
                Bug Busters: Squashing Glitches with 🐞 Power!
              </h1>
              <p className="font-medium">
                Unleash the Debugging Wizards! 🪄 Fixing Glitches, One Line at a
                Time.
              </p>
            </div>
            <div className="flex-1 hidden md:block">
              {/* Replace with your image */}
              <img
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
                className="max-w-xl"
                alt="hero_img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
