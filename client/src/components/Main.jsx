import React, {useState} from "react";
import Combat from "./Combat.jsx";
import ShopModal from "./ShopModal.jsx";
import Menu from "./Menu.jsx";

export default function Main({player}) {
  const [inFight, setInFight] = useState(false);



  return (
    <div>
      {inFight ? <Combat player={player} fight={setInFight}/> : <Menu player={player} fight={setInFight}/>}
    </div>
  )
};