export default function Home({ user }) {
  return (
    <div>
      <p className="font-semibold">Connected as {user?.email}</p>
      <p className="font-semibold">Role: {user?.roles[1]}</p>
    </div>
  );
}
