import "server-only";
import serverSideFunction from "@/utils/server-utils";

function ServerRoutePage() {
  console.log("Server route rendered");
  const result = serverSideFunction();
  return (
    <div>
      <h1 className="text-3xl font-bold">Server Route Page</h1>
      <p>{result}</p>
    </div>
  );
}

export default ServerRoutePage;
