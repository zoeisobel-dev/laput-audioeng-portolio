import { useState } from "react";
import me from "../assets/me.png";
import me2 from "../assets/me2.jpg";
import cardImage from "../assets/RUDEH.png";
import cardImage2 from "../assets/DeadToMe.jpg";
import cardImage3 from "../assets/Kalapastangan.jpg";
import cardImage4 from "../assets/SDTG.jpg";
import cardImage5 from "../assets/LMNU.png";
import cardImage6 from "../assets/OMGML.png";
import cardImage7 from "../assets/SOMY.JPG";

// ── Project data ───────────────────────────────────────────────
const listen = [
  {
    id: 1,
    title: "Project 1: Medley",
    description:
      "A blend “Hypnotized” by XG with “Rude” by Hearts2Hearts through smooth transitions and layered arrangement.",
    image: cardImage,
    link: "https://drive.google.com/file/d/1Q9pWH1pJH4NRtNzWxJcKNQglcfbFdWhn/view?usp=drive_link",
    body: "A medley combining “Hypnotized” by XG and “Rude” by Hearts2Hearts, blending their contrasting moods into one continuous arrangement through transitions and layering.",
  },
  {
    id: 2,
    title: "Project 2: Cut Up",
    description:
      "A fragmented sampling of “Dead to Me” by Kali Uchis, reshaped into an atmospheric sound collage using chopped vocals and layered textures.",
    image: cardImage2,
    link: "https://drive.google.com/file/d/1r6GteTNb4lfIvJk1CYk6b9zxPmNdu0CS/view?usp=drive_link",
    body: "A sample-based rework of “Dead to Me” by Kali Uchis, a track centered on emotional detachment and closure in a relationship. This piece cuts and reshapes its vocals and textures into a fragmented, atmospheric interpretation.",
  },
  {
    id: 3,
    title: "Project 3: Remix",
    description:
      "A reimagined trap version of “Kalapastangan” with heavier percussion, darker tones, and modern production techniques.",
    image: cardImage3,
    link: "https://drive.google.com/file/d/1h9iYF62-m2_SWvpEnpbAmj6VFaXb9q0U/view?usp=drive_link",
    body: "A rework of “Kalapastangan” that shifts the original track into a trap-influenced sound. It uses heavier drums, darker textures, and updated production styles to give the song a more aggressive and modern feel.",
  },
  {
    id: 4,
    title: "Project 4: Dubbing",
    description:
      "An English dubbing project of a scene from She's Dating the Gangster starring Kathryn Bernardo and Daniel Padilla.",
    image: cardImage4,
    link: "https://drive.google.com/file/d/1JA0W_HlvIPNsGpy8RJ_ujrlzxvmohJCt/view?usp=drive_link",
    body: "An English dub of the intro scene from She's Dating the Gangster, focused on adapting dialogue while maintaining emotional delivery, timing, and character expression. It also highlights synchronization between voice performance and on-screen acting.",
  },
  {
    id: 5,
    title: "Project 5: Mashup",
    description:
      "A fusion of “Love Me Not” by Ravyn Lenae and “Undressed” by Sombr, merging both songs into a single emotional progression.",
    image: cardImage5,
    link: "https://drive.google.com/file/d/1wDO4EcpMDOVeOMPO8jA7ySBF4LmRzP9Q/view?usp=drive_link",
    body: "A blend of “Love Me Not” by Ravyn Lenae and “Undressed” by Sombr, combining their melodies and emotional tones into one cohesive composition. It explores how both tracks can be layered and aligned to create a unified listening experience.",
  },
  {
    id: 6,
    title: "Project 6: Beat Matching",
    description:
      "A synchronized blend of “OMG” by Usher and “My Love” by Justin Timberlake, aligned through tempo matching and smooth transitions.",
    image: cardImage6,
    link: "https://drive.google.com/file/d/1S1pE4oye1QelIAt_JTSI9oB9O0i0tx2_/view?usp=sharing",
    body: "A rhythmic alignment of “OMG” by Usher and “My Love” by Justin Timberlake, focusing on syncing tempo, groove, and structure between two R&B tracks. It creates a continuous flow by carefully matching timing and transitions.",
  },
  {
    id: 7,
    title: "The Sound of My Soul",
    description:
      "An original orchestral piece that begins with a delicate piano and violin arrangement before building into a powerful, cinematic crescendo.",
    image: cardImage7,
    link: "https://drive.google.com/file/d/1nljbcIDtR80t25yo7--I01aGBPPptz9K/view?usp=drive_link",
    body: "An original composition titled “A Sound of My Soul” that explores emotional contrast through orchestral storytelling. It starts with a soft piano and violin section, gradually building tension before transitioning into a heavy, intense orchestral climax filled with layered instrumentation and dramatic energy.",
  },
];

// ── Project Modal ──────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-zinc-900 bg-zinc-50 shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-zinc-900 bg-zinc-50 px-6 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Sample Work
          </p>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-100 text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-center p-2 border-b-2 border-zinc-900">
          <div className="w-70 h-70 rounded-[1.25rem] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          <h2 className="text-2xl font-bold text-zinc-900">{project.title}</h2>

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              About this project
            </p>
            <p className="text-sm leading-6 text-zinc-600">{project.body}</p>
          </div>

          <div className="rounded-2xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Project link
            </p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors break-all"
              >
                {project.link}
              </a>
            ) : (
              <p className="text-sm text-zinc-400 italic">
                No link added yet — set one in the{" "}
                <code className="text-zinc-500 not-italic">listen</code> array.
              </p>
            )}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Open Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ── HomePage ───────────────────────────────────────────────────
const HomePage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const heroProject = listen[0];

  return (
    <div className="flex w-full flex-col flex-1">

      {/* ── HERO ── */}
      <section id="hero" className="border-b border-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Zoe's Portfolio
            </h1>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400 mt-2 flex gap-1">
              BS Information Technology Student
            </p>
          
            <div className="mt-16 flex gap-4">
              <a
                href="#contact"
                className="inline-flex rounded-full border-2 border-white bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Get in Touch
              </a>
              <a
                href="#listen"
                className="inline-flex rounded-full border-2 border-white px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-black">
            <div className="flex items-center justify-center rounded-[1.25rem] overflow-hidden">
              <img
                src={me}
                alt="Hero"
                className="w-3/4 h-3/4 object-cover rounded-[1.25rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="border-b border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            About Me
          </h2>
        </div>

        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <p className="text-sm leading-7 text-zinc-600 text-center">
            I’m Zoe Isobel Laput, a 3rd-year BSIT student at National University with a strong passion for audio mixing and sound design. I’m driven by the creative process of shaping sound, turning raw ideas into polished recordings, and helping bring musical visions to life.
          </p>
          <p className="text-sm leading-7 text-zinc-600 text-center">
            I’m currently focused on developing my skills in audio engineering and music production, with a growing interest in how sound can influence emotion, storytelling, and culture. My goal is to create music that resonates deeply with listeners and contributes meaningfully to the evolving landscape of modern sound.
          </p>

          <div className="flex gap-4">
            {[
              { value: "7", label: "Projects Completed" },
              { value: "1", label: "Original Composition" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5 text-center"
              >
                <p className="text-2xl font-bold text-zinc-900">{value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <a href="/about"
            className="rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-95 inline-flex"
          >
            View More
          </a>
        </div>
      </section>

      {/* ── LISTEN NOW ── */}
      <section id="latest" className="border-b border-zinc-900 bg-zinc-900 bg-black px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mt-2 text-2xl font-semibold text-zinc-100">
            L I S T E N
          </h2>
        </div>

        <article className="rounded-3xl bg-zinc-50 p-4 max-w-4xl mx-auto flex gap-6 items-center shadow-2xl">
          <div className="flex-shrink-0 w-64 h-64 rounded-[1.25rem] bg-zinc-200 overflow-hidden">
            <img
              src={cardImage7}
              alt="Latest Song"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-bold text-zinc-900">
              The Sound of My Soul
            </h3>
            <p className="text-sm leading-6 text-zinc-600">
              An original orchestral piece that begins with a delicate piano and violin arrangement before building into a powerful, cinematic crescendo.
            </p>
            <a href="https://drive.google.com/file/d/1nljbcIDtR80t25yo7--I01aGBPPptz9K/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-95 w-fit mt-2"
              >
              Listen Now
            </a>
          </div>
        </article>
      </section>

      {/* ── PROJECTS ── */ }
      <section id="listen" className="bg-zinc-900 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-50">
            Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-50">
            My Work in Audio
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {listen.map((project) => (
            <article
              key={project.id}
              className="rounded-3xl bg-zinc-100 p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {project.description}
              </p>
              <button
                onClick={() => setActiveProject(project)}
                className="mt-4 rounded-full border-2 border-zinc-900 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 active:scale-95"
              >
                View More
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */ }
      <section id="contact" className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 flex-1">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Get in Touch
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <p className="text-sm leading-7 text-zinc-600">
            Have a project in mind or want to collaborate? Feel free to reach
            out — I'd love to hear from you!
          </p>

          <div className="space-y-3">
            {[
              { label: "Email", value: "zoeisobel.laput1@gmail.com", href: "mailto:zoeisobel.laput1@gmail.com" },
              { label: "LinkedIn", value: "linkedin.com/in/zoeisobell", href: "https://www.linkedin.com/in/zoe-isobel-l-044941317/" },
            ].map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border-2 border-zinc-900 bg-zinc-100 px-5 py-3 transition hover:bg-zinc-200"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  {label}
                </span>
                <span className="text-sm font-medium text-zinc-900">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */ }
      {
        activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )
      }
    </div >
  );
};

export default HomePage;
