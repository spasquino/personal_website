export default function About() {
  return (
    <article className="space-y-10">
      {/* Main Title */}
      <h1 className="text-3xl font-bold tracking-wider uppercase text-gray-900">
        About
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Text */}
        <div className="md:col-span-2 space-y-4 text-gray-800 leading-relaxed">
          <p>
            Hello, my name is Sara Pasquino and I am a data scientist with a Master’s in
            Business Analytics from MIT. My interest sits at the intersection of machine
            learning, optimization, and social impact, and I’m passionate about building
            solutions that combine analytical rigor with creative thinking to address
            complex, real-world challenges.
          </p>
          <p>
            I’m most proud of work that challenges me, pushes me beyond what I know, and
            forces me to grow. I thrive in projects that allow space for creativity and
            intellectual freedom, where I can question assumptions, explore unconventional
            approaches, and create something original. Above all, I’m driven by the
            opportunity to make a positive impact, using technology to contribute to
            meaningful change. Whether developing new methodologies or applying advanced
            models to practical problems, I’m drawn to work that blends curiosity,
            innovation, and purpose.
          </p>
        </div>

        {/* Photo */}
        <div className="flex md:justify-end justify-center">
          <img
            src="/profile.jpg"
            alt="Sara Pasquino"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-xl shadow-lg ring-2 ring-indigo-200/60"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-wider uppercase text-gray-900">
          Skills
        </h2>

        {/* Programming Languages */}
        <div>
          <h3 className="text-lg font-semibold tracking-wide uppercase text-[#1e3a8a] pb-2 border-b border-[#1e3a8a]/50">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-4 mt-3">
            {[
              { name: "Python", icon: "/icons/python.svg" },
              { name: "Julia", icon: "/icons/julia.svg" },
              { name: "R", icon: "/icons/r.svg" },
              { name: "MATLAB", icon: "/icons/matlab.svg" },
              { name: "SQL", icon: "/icons/sql.svg" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm aspect-square w-20 md:w-24"
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                <p className="mt-1 text-xs md:text-sm text-center text-gray-800">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Science Libraries */}
        <div>
          <h3 className="text-lg font-semibold tracking-wide uppercase text-[#1e3a8a] pb-2 border-b border-[#1e3a8a]/50">
            Data Science Libraries
          </h3>
          <div className="flex flex-wrap gap-4 mt-3">
            {[
              { name: "PyTorch", icon: "/icons/pytorch.svg" },
              { name: "Keras", icon: "/icons/keras.svg" },
              { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
              { name: "Gurobi", icon: "/icons/gurobi.svg" },
              { name: "GeoPandas", icon: "/icons/geopandas.svg" },
              { name: "Scikit-Learn", icon: "/icons/scikitlearn.svg" },
              { name: "Hugging Face", icon: "/icons/huggingface.svg" },
              { name: "NumPy", icon: "/icons/numpy.svg" },
              { name: "Pandas", icon: "/icons/pandas.svg" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm aspect-square w-20 md:w-24"
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                <p className="mt-1 text-xs md:text-sm text-center text-gray-800">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Technologies */}
        <div>
          <h3 className="text-lg font-semibold tracking-wide uppercase text-[#1e3a8a] pb-2 border-b border-[#1e3a8a]/50">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-4 mt-3">
            {[
              { name: "Git", icon: "/icons/git.svg" },
              { name: "Jupyter", icon: "/icons/jupyter.svg" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 shadow-sm aspect-square w-20 md:w-24"
              >
                <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                <p className="mt-1 text-xs md:text-sm text-center text-gray-800">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
