export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #0d5bd7 0%, #0a4fc4 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 390,
          background: "transparent",
          borderRadius: 28,
          padding: "28px 24px 32px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 26 }}>
          <div
            style={{
              width: 82,
              height: 82,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
              fontSize: 34,
              color: "#0d5bd7",
              fontWeight: 700,
            }}
          >
            i
          </div>
        </div>

        <div style={{ display: "grid", gap: 14 }}>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
          />

          <div style={{ textAlign: "right", fontSize: 13, opacity: 0.95, marginTop: -4 }}>
            Forgot Password?
          </div>

          <a href="/dashboard">
<button style={loginButtonStyle}>Log In</button>
</a>

          <button style={socialButtonStyle}>
            <span style={socialIconStyle}>G</span>
            Sign in with Google
          </button>

          <button
            style={{
              ...socialButtonStyle,
              background: "#111",
              color: "white",
              border: "none",
            }}
          >
            <span style={{ ...socialIconStyle, background: "transparent", color: "white" }}>
              
            </span>
            Sign in with Apple
          </button>
        </div>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 14px",
  borderRadius: 10,
  border: "none",
  outline: "none",
  fontSize: 16,
  background: "white",
  color: "#222",
  boxSizing: "border-box",
};

const loginButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 14px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.22)",
  background: "linear-gradient(180deg, #4aa3ff 0%, #1e73ea 100%)",
  color: "white",
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
};

const socialButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 999,
  border: "none",
  background: "white",
  color: "#222",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
};

const socialIconStyle: React.CSSProperties = {
  width: 22,
  height: 22,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f2f2f2",
  fontSize: 14,
  fontWeight: 700,
};
