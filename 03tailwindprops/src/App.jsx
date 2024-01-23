import "./App.css";
import Card from "./components/Card";

function App() {
  let myInfo = {
    userName: "omen",
    role: ["smoker", "initiator", "sentinel"],
    id: [1, 2, 3],
  };

  let newArr = [2, 4];
  return (
    <>
      <h1 className="text-black bg-green-600 rounded-lg mb-4 ">Hello</h1>
      <div className="gap-4 grid flex-col md:grid-cols-3  lg:grid-cols-3">
        <Card
          userId={myInfo.id[0]}
          username="H.A.Tamim"
          someInfo={myInfo.role[0]}
          array={newArr}
          btnTxt="click me"
        ></Card>
        <Card
          username="Tazim"
          userId={myInfo.id[1]}
          btnTxt="click me"
          someInfo={myInfo.role[1]}
        ></Card>
        <Card
          username="Hasnath"
          userId={myInfo.id[2]}
          btnTxt="click me"
          someInfo={myInfo.role[2]}
        ></Card>
      </div>
    </>
  );
}

export default App;
