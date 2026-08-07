export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-12">
          About Me
        </h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Profile Image */}
          <div className="flex justify-center lg:-mt-6">
            <img
              src="/anakha.jpeg"
              alt="Anakha Vijay"
              className="w-[350px] h-[450px] object-cover object-center rounded-3xl shadow-2xl border-2 border-gray-800"
            />
          </div>

          {/* About Content */}
          <div className="max-w-xl">

            <h3 className="text-3xl font-bold mb-6">
              Hello, I'm
              <span className="text-blue-500"> Anakha Vijay</span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-8 text-left">
              I'm an{" "}
              <span className="text-white font-semibold">
                Information Technology professional
              </span>{" "}
              with experience in{" "}
              <span className="text-white font-semibold">
                Data Engineering
              </span>
              ,{" "}
              <span className="text-white font-semibold">
                AI Education
              </span>
              , and{" "}
              <span className="text-white font-semibold">
                Academic Research
              </span>
              . I enjoy transforming raw data into meaningful insights using
              SQL, Python, and Power BI while continuously expanding my
              expertise in{" "}
              <span className="text-blue-500 font-bold">
                Data Analytics
              </span>
              .

              <br />
              <br />

              Alongside Data Analytics, I'm continuously expanding my expertise
              in{" "}
              <span className="text-blue-500 font-bold">
                Artificial Intelligence
              </span>
              ,{" "}
              <span className="text-blue-500 font-bold">
                Machine Learning
              </span>
              , and{" "}
              <span className="text-blue-500 font-bold">
                Prompt Engineering
              </span>{" "}
              to build intelligent, data-driven solutions.

              <br />
              <br />

              I enjoy solving real-world business problems through analytics,
              automation, and modern AI technologies while continuously
              learning and improving my technical skills.
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">
                <h4 className="text-blue-400 font-semibold">
                  Name
                </h4>

                <p className="mt-2">
                  Anakha Vijay
                </p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">
                <h4 className="text-blue-400 font-semibold">
                  Role
                </h4>

                <p className="mt-2">
                  Data Analyst
                </p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">
                <h4 className="text-blue-400 font-semibold">
                  Location
                </h4>

                <p className="mt-2">
                  Kerala, India
                </p>
              </div>

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">
                <h4 className="text-blue-400 font-semibold">
                  Current Focus
                </h4>

                <p className="mt-2">
                  Data Analytics • AI
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}