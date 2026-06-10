const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'GitHub']

const projects = [
  {
    title: 'Commerce Flow',
    description: 'A polished e-commerce interface with fast filters, smart checkout UX, and smooth animations.',
    stack: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'Insight Dashboard',
    description: 'A SaaS analytics experience designed to turn complex data into clear, actionable visuals.',
    stack: ['Next.js', 'TypeScript', 'Chart.js'],
  },
  {
    title: 'Studio Landing',
    description: 'A conversion-focused landing page for a creative agency with crisp storytelling and motion.',
    stack: ['React', 'Framer Motion', 'Tailwind'],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-cyan-400">
          TM
        </a>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main id="home" className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 lg:px-8">
        <section className="grid items-center gap-10 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:pt-20">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Frontend Developer</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              I build fast, beautiful web experiences that feel effortless.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I’m Tin Moe Myint, a frontend developer focused on building clean, modern web experiences with React and Tailwind CSS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                View Projects
              </a>
              <a href="#contact" className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Currently crafting</p>
              <h2 className="mt-3 text-2xl font-semibold">Design systems for modern products</h2>
              <p className="mt-4 text-slate-300">
                From landing pages to complex dashboards, I turn product ideas into intuitive interfaces with React and Tailwind.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">About</p>
            <h2 className="mt-3 text-3xl font-semibold">Creating thoughtful UI with clear purpose.</h2>
          </div>
          <div className="text-slate-300">
            <p>
              I love solving product problems through careful UI decisions, motion, and accessible interactions. My work blends speed, clarity, and personality to make interfaces feel both premium and easy to use.
            </p>
            <p className="mt-4">
              Whether it’s a one-page launch site or a multi-screen dashboard, I focus on performance, maintainability, and a polished experience from the first click to the last.
            </p>
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <span className="text-sm text-slate-400">What I work with</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <span className="text-sm text-slate-400">Recent highlights</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-800 bg-slate-900/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold">Let’s build something memorable.</h2>
          </div>
          <a href="mailto:tinmoemyint922@gmail.com" className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
            tinmoemyint922@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
