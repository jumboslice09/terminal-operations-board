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
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>
            Inbox
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <div style={cardStyle}>Company Announcement</div>
            <div style={cardStyle}>Supervisor Kevin</div>
            <div style={cardStyle}>Shift Updates</div>
            <div style={cardStyle}>Safety Notice</div>
          </div>
        </div>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#f8fafc",
  border: "1px solid #e5ebf5",
  borderRadius: 14,
  padding: 14,
  fontWeight: 700,
  color: "#111827",
};
