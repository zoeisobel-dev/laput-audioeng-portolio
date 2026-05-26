const Footer = () => {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #000000 40%, #000000 100%)",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        boxShadow:
          "0 -4px 24px rgba(160,64,96,0.2), inset 0 -1px 0 rgba(255,255,255,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Matte noise texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
          pointerEvents: "none",
          mixBlendMode: "overlay",
          opacity: 0.5,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "1.05rem",
            fontWeight: 400,
            letterSpacing: "0.04em",
            color: "rgba(255, 255, 255, 0.92)",
            textShadow: "0 1px 4px rgba(100,20,40,0.3)",
          }}
        >
          Zoe's Portfolio
        </p>

        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          © 3rd Term SY 2025-2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
