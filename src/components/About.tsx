export default function About() {
    return (
      <section
        id="about"
        className="min-h-screen bg-gray-950 text-white px-10 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-500 mb-10">
            About Me
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/anakha.jpeg"
                alt="Anakha Vijay"
                width={450}
                height={450}
                className="rounded-3xl shadow-2xl object-cover"
              />
            </div>
  
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Hello, I'm Anakha Vijay 👋
              </h3>
  
              <p className="text-gray-300 leading-8 text-lg">
                I'm a passionate Data Analyst who enjoys transforming raw data
                into meaningful insights.
  
                <br /><br />
  
                My expertise includes SQL, Python, Power BI, Machine Learning,
                Data Visualization and Dashboard Development.
  
                <br /><br />
  
                I enjoy building analytical solutions that help organizations make
                smarter business decisions.
              </p>
  
              <div className="grid grid-cols-2 gap-6 mt-10">
  
                <div>
                  <h4 className="font-bold text-blue-400">Name</h4>
                  <p>Anakha Vijay</p>
                </div>
  
                <div>
                  <h4 className="font-bold text-blue-400">Role</h4>
                  <p>Data Analyst</p>
                </div>
  
                <div>
                  <h4 className="font-bold text-blue-400">Location</h4>
                  <p>Kerala, India</p>
                </div>
  
                <div>
                  <h4 className="font-bold text-blue-400">Experience</h4>
                  <p>2+ Years</p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }