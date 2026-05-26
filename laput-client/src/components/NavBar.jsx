const NavBar = () => {
  const scrollToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };
  
  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000000 40%, #000000 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 4px 24px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(67, 67, 67, 0.18)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
          pointerEvents: "none",
          mixBlendMode: "overlay",
          opacity: 0.5,
        }}
      />

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <button
          onClick={() => scrollToSection("hero")}
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "1.15rem",
            fontWeight: 400,
            letterSpacing: "0.04em",
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 1px 4px rgb(39, 39, 39)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        > </button>

        <nav className="flex items-center gap-6">
          {[
            { label: "About", id: "about" },
            { label: "Listen", id: "listen" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{
                color: "rgba(255,255,255,0.92)",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              className="transition hover:opacity-100 opacity-80"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;