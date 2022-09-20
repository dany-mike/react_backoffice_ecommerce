import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <p>Home!</p>
      <p>{location?.state}</p>
    </div>
  );
}
