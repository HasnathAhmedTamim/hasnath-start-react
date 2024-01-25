// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <div className="text-center bg-violet-500 p-4 text-4xl w-full min-h-[700px] ">
      <div className="text-white font-bold flex justify-around bg-fuchsia-300  m-24">
        <div className="rounder-full py-8 ">
          <img width={300} src={data.avatar_url} alt="git pic" />
        </div>
        <div className=" text-start flex flex-col justify-center">
          <p> Github User Name: {data.name} </p>
          <p>User ID :{data.id} </p>
          <p>Followers: {data.followers} </p>
          <p>Location : {data.location} </p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("/data.json");
  return response.json();
};
