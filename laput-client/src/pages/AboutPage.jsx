import { useNavigate } from "react-router-dom";
import me2 from "../assets/me2.jpg";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-zinc-50">

            {/* Header */}
            <div className="bg-black px-6 py-4 flex items-center justify-between">
                <h1 className="text-white font-semibold text-lg">
                    Zoe's Portfolio
                </h1>
                <button
                    onClick={() => navigate("/")}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                    ← Back
                </button>
            </div>

            {/* Hero */}
            <section className="bg-black px-6 py-16">
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-zinc-700">
                        <img src={me2} alt="Zoe" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-white">
                            Zoe Isobel Laput
                        </h2>
                        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                            3rd Year BSIT Student · National University PH
                        </p>
                        <p className="mt-7 text-sm leading-7 text-zinc-300 max-w-xl mx-auto">
                            A passionate BSIT student with a love for creativity — from designing interfaces
                            and writing code, to mixing audio and bringing ideas to life through animation and 3D.
                        </p>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="px-6 py-10 max-w-3xl mx-auto space-y-6">

                <div className="rounded-3xl border-2 border-zinc-900 bg-white p-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        About Me
                    </p>
                    <p className="text-sm leading-7 text-zinc-600">
                        Hi! I'm Zoe, a 3rd year Bachelor of Science in Information Technology student
                        at National University Philippines. I'm currently exploring the world of audio
                        engineering — specifically audio mixing — and I'm excited to grow in this field.
                        My passion for sound and music drives me to keep learning and improving every day.
                    </p>
                </div>

                <div className="rounded-3xl border-2 border-zinc-900 bg-white p-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Audio
                    </p>
                    <p className="text-sm leading-7 text-zinc-600">
                        I have a deep interest in audio mixing and am actively studying the craft.
                        I've been working on personal projects to sharpen my skills — including
                        mixing and producing compositions using tools like Audacity.
                    </p>
                </div>

                <div className="rounded-3xl border-2 border-zinc-900 bg-white p-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Audio Skills & Tools
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            "Audio Mixing",
                            "Sound Design",
                            "Music Production",
                            "Audio Editing",
                            "Audacity",
                        ].map((skill) => (
                            <span key={skill} className="rounded-full border-2 border-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border-2 border-zinc-900 bg-white p-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Other Skills & Tools
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {[
                            "UI/UX Design",
                            "Programming",
                            "Animation",
                            "3D Modeling",
                            "Blender",
                            "Photoshop",
                            "Illustrator",
                            "Premiere Pro",
                        ].map((skill) => (
                            <span key={skill} className="rounded-full border-2 border-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl border-2 border-zinc-900 bg-white p-6">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                        Education
                    </p>
                    <p className="text-sm font-semibold text-zinc-900">National University Philippines</p>
                    <p className="text-sm text-zinc-600 mt-1">Bachelor of Science in Information Technology</p>
                    <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest">3rd Year · Currently Enrolled</p>
                </div>

            </section>
        </div>
    );
};

export default AboutPage;
