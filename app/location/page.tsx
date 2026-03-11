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
      <h2>Station Location</h2>

      <div
        style={{
          background: "white",
          borderRadius: 14,
          padding: 18,
          marginTop: 20,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h3>8:00 AM - 4:00 PM</h3>
        <p>Alabama Steel Terminal</p>
        <p>Mobile, AL</p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: 14,
          padding: 18,
          marginTop: 20,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <h3>Notes</h3>

        <ul>
          <li>Crane 12</li>
          <li>Barge Crew</li>
          <li>Lift 002</li>
        </ul>
      </div>
    </main>
  );
}
