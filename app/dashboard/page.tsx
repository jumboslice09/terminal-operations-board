export default function Dashboard() {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        background: "#f3f6fb",
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(180deg, #0d5bd7 0%, #0a4fc4 100%)",
            borderRadius: 22,
            padding: 20,
            color: "white",
            boxShadow: "0 8px 24px rgba(13,91,215,0.22)",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <div>
              <div style={{ fontSize: 14, opacity: 0.9 }}>Good Morning</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>John</div>
            </div>

            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              JB
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.14)",
              borderRadius: 14,
              padding: 14,
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 4 }}>
              Today’s Schedule
            </div>
            <div style={{ fontSize: 24, fontWeight: 800 }}>8:00 AM - 4:00 PM</div>
            <div style={{ marginTop: 8, fontSize: 15 }}>Alabama Steel Terminal</div>
            <div style={{ fontSize: 14, opacity: 0.9 }}>Mobile, AL</div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <div style={smallCardStyle}>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>Status</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#1e8e3e" }}>Clocked In</div>
          </div>

          <div style={smallCardStyle}>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 8 }}>Today’s Station</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#0d5bd7" }}>Warehouse</div>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>
            Today’s Assignment
          </div>

          <div style={infoBoxStyle}>
            <div style={{ fontSize: 14, color: "#6b7280", marginBottom: 6 }}>Primary Area</div>
            <div style={{ fontSize: 22, fontWeight: 800 }}>Warehouse</div>
          </div>

          <div style={{ display: "grid", gap: 10, marginBottom: 12 }}>
            <div style={infoRowStyle}>
              <span style={labelStyle}>Subgroup</span>
              <span style={valueStyle}>Crane Operators</span>
            </div>

            <div style={infoRowStyle}>
              <span style={labelStyle}>Work Station</span>
              <span style={valueStyle}>Crane 12</span>
            </div>

            <div style={infoRowStyle}>
              <span style={labelStyle}>Supervisor Note</span>
              <span style={valueStyle}>Report to Warehouse first</span>
            </div>
          </div>

          <a href="/location" style={{ textDecoration: "none" }}>
            <button style={primaryButtonStyle}>View Station Location</button>
          </a>
        </div>

        <div style={{ display: "grid", gap: 12, marginBottom: 18 }}>
          <button
            style={{
              width: "100%",
              padding: 16,
              borderRadius: 14,
              background: "#e53935",
              color: "white",
              fontWeight: 800,
              fontSize: 18,
              border: "none",
              boxShadow: "0 8px 18px rgba(229,57,53,0.18)",
            }}
          >
            Clock Out
          </button>

          <div style={{ display: "grid", gap: 12 }}>
  <a href="/messages" style={{ textDecoration: "none" }}>
    <button style={secondaryButtonStyle}>Messages</button>
  </a>

  <button style={secondaryButtonStyle}>Start Break</button>
        </div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Weekly Overview
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: 8,
            }}
          >
            {weekDays.map((day, index) => (
              <div
                key={day}
                style={{
                  background: index === 2 ? "#0d5bd7" : "#dbe7ff",
                  color: index === 2 ? "white" : "#1f2937",
                  padding: "12px 6px",
                  borderRadius: 10,
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  marginBottom: 18,
};

const smallCardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const infoBoxStyle: React.CSSProperties = {
  background: "#f7f9fc",
  borderRadius: 14,
  padding: 14,
  border: "1px solid #e5ebf5",
  marginBottom: 12,
};

const infoRowStyle: React.CSSProperties = {
  background: "#f8fafc",
  borderRadius: 12,
  padding: "12px 14px",
  border: "1px solid #e5ebf5",
  display: "flex",
  flexDirection: "column",
  gap: 4,
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
};

const valueStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: "#111827",
};

const primaryButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: 15,
  borderRadius: 12,
  background: "#2563eb",
  color: "white",
  fontWeight: 700,
  fontSize: 16,
  border: "none",
};

const secondaryButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: 14,
  borderRadius: 12,
  background: "white",
  color: "#1f2937",
  fontWeight: 700,
  fontSize: 15,
  border: "1px solid #d8e2f0",
};
