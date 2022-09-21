import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  return (
    <div>
      <p>Home!</p>
      <p>{location?.state}</p>
    </div>
  );
}
