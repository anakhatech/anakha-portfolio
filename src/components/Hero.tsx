"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Main Heading */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            leading-tight
            text-white
            animate-[heroTitle_0.8s_ease-out_forwards]
            opacity-0
          "
        >
          Hi, I'm{" "}
          <span className="text-blue-500">
            Anakha Vijay
          </span>{" "}
          👋
        </h1>

        {/* Subtitle */}
        <h2
          className="
            mt-6
            text-xl
            sm:text-2xl
            md:text-4xl
            font-semibold
            text-gray-300
            max-w-4xl
            mx-auto
            leading-relaxed
            animate-[heroSubtitle_0.8s_ease-out_0.25s_forwards]
            opacity-0
          "
        >
          Data Analyst • AI Enthusiast • Prompt Engineer
        </h2>

        {/* Description */}
        <p
          className="
            mt-8
            max-w-3xl
            mx-auto
            text-base
            sm:text-lg
            md:text-xl
            text-gray-400
            leading-8
            animate-[heroText_0.8s_ease-out_0.5s_forwards]
            opacity-0
          "
        >
          Passionate about transforming complex data into meaningful insights
          using
          <span className="text-white font-medium"> SQL</span>,
          <span className="text-white font-medium"> Python</span>, and
          <span className="text-white font-medium"> Power BI</span>. I'm also
          exploring
          <span className="text-blue-400 font-medium">
            {" "}Artificial Intelligence
          </span>
          ,
          <span className="text-blue-400 font-medium">
            {" "}Machine Learning
          </span>
          , and
          <span className="text-blue-400 font-medium">
            {" "}Prompt Engineering
          </span>
          {" "}to build intelligent, data-driven solutions.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            w-full
            sm:w-auto
            animate-[heroButtons_0.8s_ease-out_0.75s_forwards]
            opacity-0
          "
        >
          <a
            href="#contact"
            className="
              bg-blue-600
              hover:bg-blue-700
              hover:-translate-y-1
              hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
              transition-all
              duration-300
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            Contact Me
          </a>

          <a
            href="/Anakha_Vijay.pdf"
            download
            className="
              border
              border-white
              hover:bg-white
              hover:text-black
              hover:-translate-y-1
              transition-all
              duration-300
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}