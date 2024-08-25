import { cookies } from "next/headers";

const About = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("About Server component");
  return (
    <div className="m-4 h-screen">
      <h1 className="text-3xl font-bold">
        About page {new Date().toLocaleTimeString()}{" "}
      </h1>
    </div>
  );
};

export default About;
