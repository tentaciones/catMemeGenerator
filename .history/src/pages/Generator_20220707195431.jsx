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
      <div className="flex  text-indigo-500 text-3xl">
        <div className="mt-7">Get Random Cat Images</div>
        <button
          onClick={getCat}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white w-72 h-20 rounded "
        >
          click
        </button>
      </div>

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
