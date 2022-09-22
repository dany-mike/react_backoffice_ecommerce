export default function Home({ user }) {
  return (
    <div>
      <p className="font-semibold">Connected as {user?.email}</p>
      <p className="font-semibold">Role: {user?.role}</p>
    </div>
  );
}
