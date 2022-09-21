import useAuth from "../../context/auth";

export default function Home() {
  const {
    state: { user },
  } = useAuth();

  return (
    <div>
      <p className="font-semibold">Connected as {user?.email}</p>
      <p className="font-semibold">Role: {user?.role}</p>
    </div>
  );
}
