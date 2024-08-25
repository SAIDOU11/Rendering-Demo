import React from "react";

const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div>
      <h1 className="font-bold font-3xl mb-4 text-blue-600">Reviews</h1>
    </div>
  );
};

export default Reviews;
