import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1 className="text-[4rem] p-4 text-center">Welcome to About Page</h1>
      <Link to="/about/profile">Profile Details</Link>
    </>
  );
}
