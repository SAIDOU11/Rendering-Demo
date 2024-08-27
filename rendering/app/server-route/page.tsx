import "server-only";
import serverSideFunction from "@/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

function ServerRoutePage() {
  console.log("Server route rendered");
  const result = serverSideFunction();
  return (
    <div
      className="h-screen
    "
    >
      <div className="image-slider-container ">
        <h1 className="text-3xl font-bold">Server Route Page</h1>
        <p>{result}</p>
        <ImageSlider />
      </div>
    </div>
  );
}

export default ServerRoutePage;
