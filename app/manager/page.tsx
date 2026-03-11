const groups = [
  {
    name: "Office",
    subgroups: [
      {
        name: "Office Staff",
        workers: ["Sarah L.", "Mike T."]
      }
    ]
  },
  {
    name: "Roadgate",
    subgroups: [
      {
        name: "Roadgate Staff",
        workers: ["Kevin R.", "John P."]
      }
    ]
  },
  {
    name: "Warehouse",
    subgroups: [
      {
        name: "Crane Operators",
        workers: ["Steve C.", "Han L.", "Mark T.", "Alex D."]
      },
      {
        name: "Clerks",
        workers: ["Lisa B.", "David R.", "Chris M."]
      }
    ]
  },
  {
    name: "Lift Operators",
    subgroups: [
      {
        name: "Lift Crew",
        workers: ["Tyler H.", "Brandon C."]
      }
    ]
  },
  {
    name: "Laborers",
    subgroups: [
      {
        name: "Labor Crew",
        workers: ["James W.", "Marcus L.", "Troy B."]
      }
    ]
  },
  {
    name: "Mechanics",
    subgroups: [
      {
        name: "Shop Mechanics",
        workers: ["Eric S."]
      }
    ]
  }
];

export default function ManagerPage() {
  return (
    <main
      style={{
        padding: 24,
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fb",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Terminal Operations Board</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>Live Crew Placement</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16
        }}
      >
        {groups.map((group) => {
          const totalWorkers = group.subgroups.reduce(
            (sum, subgroup) => sum + subgroup.workers.length,
            0
          );

          return (
            <div
              key={group.name}
              style={{
                background: "white",
                borderRadius: 14,
                padding: 18,
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
              }}
            >
              <h2 style={{ fontSize: 28, marginBottom: 14 }}>
                {group.name} ({totalWorkers})
              </h2>

              <div style={{ display: "grid", gap: 14 }}>
                {group.subgroups.map((subgroup) => (
                  <div
                    key={subgroup.name}
                    style={{
                      background: "#f8faff",
                      border: "1px solid #dbe6ff",
                      borderRadius: 12,
                      padding: 14
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 18,
                        marginBottom: 10,
                        color: "#23395d"
                      }}
                    >
                      {subgroup.name} ({subgroup.workers.length})
                    </h3>

                    <div style={{ display: "grid", gap: 10 }}>
                      {subgroup.workers.map((worker) => (
                        <div
                          key={worker}
                          style={{
                            padding: 12,
                            borderRadius: 10,
                            background: "#eef3ff",
                            border: "1px solid #cfdcff",
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
            </div>
          );
        })}
      </div>
    </main>
  );
}
