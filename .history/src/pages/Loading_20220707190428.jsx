import React, { useEffect, useState } from "react";

const Loading = () => {
  const [cat, setCat] = useState("");
  const [done, setDone] = useState(undefined);
  const getCat = () => {
    setTimeout(() => {
      fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => setCat(data.file));
      setDone(true);
    }, 1200);
  };
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div>
      <div>get random cat images</div>
      <button className="bg-blue-500">click</button>
      <div className="flex justify-center">
        {!done ? <p>loading ..</p> : <img src={cat} alt="c" />}
      </div>
    </div>
  );
};

export default Loading;
