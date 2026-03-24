export default function Location() {
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
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 6 }}>
            Today’s Station
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
            Warehouse
          </div>
          <div style={{ fontSize: 15 }}>Alabama Steel Terminal</div>
          <div style={{ fontSize: 14, opacity: 0.9 }}>Mobile, AL</div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Shift Details
          </div>

          <div style={infoRowStyle}>
            <span style={labelStyle}>Time</span>
            <span style={valueStyle}>8:00 AM - 4:00 PM</span>
          </div>

          <div style={infoRowStyle}>
            <span style={labelStyle}>Primary Area</span>
            <span style={valueStyle}>Warehouse</span>
          </div>

          <div style={infoRowStyle}>
            <span style={labelStyle}>Subgroup</span>
            <span style={valueStyle}>Crane Operators</span>
          </div>

          <div style={infoRowStyle}>
            <span style={labelStyle}>Work Station</span>
            <span style={valueStyle}>Crane 12</span>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Map View
          </div>

          <div
            style={{
              height: 180,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 35%, #93c5fd 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1d4ed8",
              fontWeight: 700,
              fontSize: 18,
              border: "1px solid #bfdbfe",
            }}
          >
            Map Placeholder
          </div>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Supervisor Notes
          </div>

          <div style={noteCardStyle}>
            Report to Warehouse first, then move to Crane 12 after morning check-in.
          </div>

          <div style={noteCardStyle}>
            Confirm with lead before moving to barge work.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <a href="/dashboard" style={{ textDecoration: "none" }}>
            <button style={secondaryButtonStyle}>Back to Dashboard</button>
          </a>

          <a href="/manager" style={{ textDecoration: "none" }}>
            <button
              style={{
                ...secondaryButtonStyle,
                background: "#2563eb",
                color: "white",
                border: "none",
              }}
            >
              Manager Board
            </button>
          </a>
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

const infoRowStyle: React.CSSProperties = {
  background: "#f8fafc",
  borderRadius: 12,
  padding: "12px 14px",
  border: "1px solid #e5ebf5",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  marginBottom: 10,
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

const noteCardStyle: React.CSSProperties = {
  background: "#f8fafc",
  borderRadius: 12,
  padding: "14px 16px",
  border: "1px solid #e5ebf5",
  marginBottom: 10,
  color: "#1f2937",
  lineHeight: 1.45,
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
