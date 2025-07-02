export default function Home() {
  return (
   <div>
      <h1>Sign in page</h1>
      <a href="http://localhost:3000/auth/sign-in" style={{ color: "#0070f3" }}>
        http://localhost:3000/auth/sign-in
      </a>
      <h1>Dashboard</h1>
      <a href="http://localhost:3000/home" style={{ color: "#28a745" }}>
        http://localhost:3000/home
      </a>
      <br />
      <a href="http://localhost:3000/home/KPI/clients-entry" style={{ color: "#e83e8c" }}>
        http://localhost:3000/home/KPI/clients-entry
      </a>
    </div>
  );
}
