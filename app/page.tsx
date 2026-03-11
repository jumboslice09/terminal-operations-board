export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Terminal Operations Board</h1>
      <p>Your app is now deploying successfully.</p>

      <h2>Pages</h2>
      <ul>
        <li><a href="/manager">Manager Operations Board</a></li>
      </ul>

      <h2>Coming Soon</h2>
      <ul>
        <li>Worker clock in / out</li>
        <li>Daily crew placement updates</li>
        <li>Monthly vessel calendar</li>
      </ul>
    </main>
  );
}
