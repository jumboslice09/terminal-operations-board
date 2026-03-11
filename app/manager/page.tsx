const groups = [
  {
    name: "Office",
    workers: ["Sarah L.", "Mike T."]
  },
  {
    name: "Roadgate",
    workers: ["Kevin R.", "John P."]
  },
  {
    name: "Warehouse",
    workers: ["Marcus L.", "David R.", "Chris M."]
  },
  {
    name: "Lift Operators",
    workers: ["Alex D.", "Troy B."]
  },
  {
    name: "Laborers",
    workers: ["James W.", "Tyler H.", "Brandon C."]
  },
  {
    name: "Mechanics",
    workers: ["Eric S."]
  }
];

export default function ManagerPage() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial", background: "#f5f7fb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Terminal Operations Board</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Live Crew Placement
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        }}
      >
        {groups.map((group) => (
          <div
            key={group.name}
            style={{
              background: "white",
              borderRadius: 12,
              padding: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}
          >
            <h2 style={{ fontSize: 20, marginBottom: 12 }}>
              {group.name} ({group.workers.length})
            </h2>

            <div style={{ display: "grid", gap: 10 }}>
              {group.workers.map((worker) => (
                <div
                  key={worker}
                  style={{
                    padding: 12,
                    borderRadius: 10,
                    background: "#eef3ff",
                    border: "1px solid #d7e3ff",
                    fontWeight: 600
                  }}
                >
                  {worker}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
