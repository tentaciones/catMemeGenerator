import React, { useEffect, useState } from "react";

const Loading = () => {
  const [cat, setCat] = useState("");
  const getCat = () => {
    setTimeout(() => {
      fetch("https://aws.random.cat/meow").then((res) => res.json());
    }, 1200);
  };
  useEffect(() => {
    getCat();
  }, []);

  return <div>Loading</div>;
};

export default Loading;
