import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
const Generator = () => {
  const [cat, setCat] = useState("");
  const [done, setDone] = useState(undefined);
  const [loading, setLoading] = useState(undefined);
  const getCat = () => {
    setDone(undefined);
    setLoading(undefined);
    setTimeout(() => {
      fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => setCat(data.file));
      setLoading(true);
      setTimeout(() => {
        setDone(true);
      }, 1000);
    }, 1200);
  };
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className="bg-black h-screen">
      <div>get random cat images</div>
      <button onClick={getCat} className="bg-blue-500">
        click
      </button>
      <div className="flex justify-center">
        {!done ? (
          <Loading loading={loading} />
        ) : (
          <img src={cat} alt="c" className="h-[500px] w-[500px]" />
        )}
      </div>
    </div>
  );
};

export default Generator;
