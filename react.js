import React from "react";

export default function YouTubeSummarizer() {
  return (
    <div className="bg-[#0a0a0f] text-slate-100 font-[Poppins,sans-serif]">
      {/* Header */}
      <header className="bg-[rgba(10,10,20,0.9)] px-6 py-4 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md shadow-lg shadow-pink-500/30">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
          YouTube Summarizer
        </h1>
        <nav className="flex space-x-6">
          <a href="#features" className="hover:text-pink-300 transition">Features</a>
          <a href="#how" className="hover:text-pink-300 transition">How It Works</a>
          <a href="#pricing" className="hover:text-pink-300 transition">Pricing</a>
          <a href="#testimonials" className="hover:text-pink-300 transition">Testimonials</a>
          <a href="#contact" className="hover:text-pink-300 transition">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-4 bg-gradient-to-tr from-purple-600 via-pink-600 to-blue-600 text-white animate-fadeIn">
        <h2 className="text-5xl font-bold mb-4 animate-slideDown">Summarize YouTube Videos Instantly</h2>
        <p className="text-xl mb-6 opacity-90">
          Paste a YouTube link below and get a concise summary in seconds.
        </p>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Enter YouTube URL..."
            className="p-3 w-80 max-w-[80%] rounded-lg text-black outline-none"
          />
          <button className="ml-3 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold transition hover:scale-105 hover:shadow-xl hover:shadow-pink-400/50">
            Summarize
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 py-20 bg-[#141422]">
        {[
          { title: "⏱ Save Time", desc: "Get quick summaries without watching long videos." },
          { title: "📝 Smart Summaries", desc: "AI-generated key points and highlights." },
          { title: "🌍 Multi-Language", desc: "Supports summaries in multiple languages." },
          { title: "🎯 Accurate", desc: "Extracts only the most important details for you." },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-[#1e1e2f] p-6 rounded-xl text-center shadow-lg shadow-pink-500/30 hover:scale-105 transition"
          >
            <h3 className="text-cyan-400 text-lg font-semibold mb-2">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* How it Works */}
      <section id="how" className="px-6 py-20 text-center bg-gradient-to-br from-[#1e1e2f] to-[#111122]">
        <h2 className="text-3xl text-pink-300 mb-10">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { step: "🔗 Step 1", desc: "Paste the YouTube link into the input box." },
            { step: "⚡ Step 2", desc: 'Click on the "Summarize" button.' },
            { step: "📑 Step 3", desc: "Get instant AI-generated summaries in seconds." },
          ].map((s, i) => (
            <div key={i} className="bg-[#1e1e2f] p-6 rounded-lg w-64 shadow-lg hover:-translate-y-2 transition">
              <h3 className="text-cyan-400 text-lg font-semibold mb-2">{s.step}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 text-center bg-[#0a0a0f]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-10">
          Choose Your Plan
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Free",
              features: ["✔ Summarize up to 5 videos per day", "✔ Basic AI model"],
              btn: "Get Started",
            },
            {
              name: "Pro",
              features: ["✔ Unlimited summaries", "✔ Advanced AI accuracy", "✔ Multi-language support"],
              btn: "Upgrade",
            },
          ].map((p, i) => (
            <div key={i} className="bg-[#1e1e2f] p-6 rounded-xl w-72 shadow-lg shadow-pink-500/30 hover:scale-105 transition">
              <h3 className="text-cyan-400 text-xl font-bold mb-3">{p.name}</h3>
              {p.features.map((f, j) => (
                <p key={j} className="text-slate-300 mb-2">{f}</p>
              ))}
              <button className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold hover:shadow-lg hover:shadow-pink-400/50">
                {p.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20 text-center bg-[#141422]">
        <h2 className="text-2xl text-cyan-400 mb-10">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { text: "This tool saved me hours of watching lectures!", name: "- Arjun" },
            { text: "Accurate summaries, perfect for research notes.", name: "- Sneha" },
            { text: "Multi-language summaries are a game-changer.", name: "- David" },
          ].map((r, i) => (
            <div key={i} className="bg-[#1e1e2f] p-6 rounded-lg w-64 shadow-lg">
              <p className="italic text-slate-200 mb-3">"{r.text}"</p>
              <h4 className="text-pink-300 font-bold">{r.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 text-center bg-[#0a0a0f]">
        <h2 className="text-2xl text-pink-300 mb-2">Contact Us</h2>
        <p className="text-slate-400 mb-6">Have questions or feedback? Drop us a message!</p>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#1e1e2f] text-white" required />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#1e1e2f] text-white" required />
          <textarea rows="4" placeholder="Your Message" className="p-3 rounded-lg bg-[#1e1e2f] text-white" required />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold hover:shadow-lg hover:shadow-cyan-400/50">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#111122] text-center py-6 text-slate-400 text-sm">
        Made with ❤ for students & researchers | © 2025 YouTube Summarizer
      </footer>
    </div>
  );
}
