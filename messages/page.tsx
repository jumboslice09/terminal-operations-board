const messageItems = [
  {
    title: "Company Announcement",
    subtitle: "Updated terminal policy and weekend vessel notice",
    color: "#2563eb",
  },
  {
    title: "Supervisor Kevin",
    subtitle: "Check in at Warehouse first this morning",
    color: "#f97316",
  },
  {
    title: "Shift Updates",
    subtitle: "Assignment changes and break notices",
    color: "#10b981",
  },
  {
    title: "Safety Notice",
    subtitle: "Forklift lane closed near Warehouse until noon",
    color: "#ef4444",
  },
];

export default function MessagesPage() {
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
          <div style={{ fontSize: 28, fontWeight: 800 }}>Messages</div>
          <div style={{ fontSize: 14, opacity: 0.9, marginTop: 6 }}>
            Announcements, supervisor updates, and shift notices
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: 18,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Inbox
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {messageItems.map((item) => (
              <a
                key={item.title}
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#f8fafc",
                  border: "1px solid #e5ebf5",
                  borderRadius: 14,
                  padding: 14,
                  textDecoration: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: item.color,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    •
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: 22, color: "#94a3b8" }}>›</div>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: 18,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Quick Actions
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <a href="/dashboard" style={{ textDecoration: "none" }}>
              <button style={navButtonStyle}>Dashboard</button>
            </a>

            <a href="/location" style={{ textDecoration: "none" }}>
              <button style={navButtonStyle}>Location</button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const navButtonStyle: React.CSSProperties = {
  width: "100%",
  padding: 14,
  borderRadius: 12,
  background: "white",
  color: "#1f2937",
  fontWeight: 700,
  fontSize: 15,
  border: "1px solid #d8e2f0",
};
