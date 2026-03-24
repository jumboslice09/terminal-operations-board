export default function Dashboard() {
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
        
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>
          Today's Schedule
        </h1>

        <div
          style={{
            background: "white",
            borderRadius: 14,
            padding: 18,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: 20,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700 }}>
            8:00 AM - 4:00 PM
          </div>
          <p>Alabama Steel Terminal</p>
          <p>Mobile, AL</p>
        </div>

        <button
          style={{
            width: "100%",
            padding: 16,
            borderRadius: 10,
            background: "#e53935",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            border: "none",
            marginBottom: 20,
          }}
        >
          Clock Out
        </button>

        <div
          style={{
            background: "white",
            borderRadius: 14,
            padding: 18,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h3>Weekly Overview</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: 6,
              marginTop: 10,
            }}
          >
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                style={{
                  background: "#dbe7ff",
                  padding: 10,
                  borderRadius: 6,
                  textAlign: "center",
                  fontSize: 12,
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