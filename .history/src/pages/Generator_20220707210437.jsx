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
      <div className="flex text-indigo-500 text-3xl justify-center md:hidden">
        <div className="mt-32 font-[Rock Salt]"> Cute Cats</div>
      </div>
      <div className="md:hidden flex justify-center text-3xl">
        <button
          onClick={getCat}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white w-72 h-10 rounded mt-7"
        >
          click
        </button>
      </div>
      <div className=" flex justify-center md:hidden">
        {!done ? (
          <Loading loading={loading} />
        ) : (
          <img
            src={cat}
            alt="c"
            className="h-[300px] w-[3000px] rounded my-20"
          />
        )}
      </div>
      <div className="hidden md:flex justify-center text-indigo-500 text-3xl gap-5">
        <div className="mt-7">Get Random Cat Images</div>
        <button
          onClick={getCat}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white w-72 h-10 rounded mt-7"
        >
          click
        </button>
      </div>

      <div className="hidden md:flex justify-center">
        {!done ? (
          <Loading loading={loading} />
        ) : (
          <img
            src={cat}
            alt="c"
            className="h-[500px] w-[500px] rounded my-20"
          />
        )}
      </div>
    </div>
  );
};

export default Generator;
