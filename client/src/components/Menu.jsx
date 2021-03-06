import React, {useState} from "react";
import ShopModal from "./ShopModal.jsx";

export default function Menu({player, fight, saveGame}) {
  const [showShop, setShowShop] = useState(false);

  const menuStyle = {
    border: '1px solid black',
    padding: 2.
  }


  function levelUp() {
    console.log(player.stats);
    player.stats.lvl += 1;
    player.stats.str += 2;
    player.stats.speed += 2;
    player.stats.maxHealth += 100;
    player.expToLvl = Math.pow(10 * player.stats.lvl, 2);
    alert(
      `Congratulations! You just leveled up! \n You are now level ${player.stats.lvl}`
      );
  }

  if (player.exp >= player.expToLvl) {
    levelUp();
  }

  return (
    <div>
      <h3>{player.name}, the {player.playerClass}</h3>
      <div style={{display: 'flex', alignContent: 'space-evenly', gap: 20, alignItems: 'normal'}}>
        <div style={menuStyle}>
          Inventory:
          <br/>
          <ul>
            {Object.keys(player.inventory).map((item, i) => <li key={i}>{item}: {player.inventory[item]}</li>)}
          </ul>
        </div>
        <div style={menuStyle}>
          Level:
          <p>{player.stats.lvl} ({player.exp}exp)</p>
        </div>
        <div style={menuStyle}>
          Win/Loss:
          <p>{player.win}W / {player.loss}L</p>
        </div>
        <div style={menuStyle}>
          {showShop ? <ShopModal player={player} hideShop={setShowShop}/> : null}
          <button onClick={() => setShowShop(true)}>Shop</button>
          <br/>
          <br/>
          <button onClick={() => fight(true)}>Fight</button>
          <br/>
          <br/>
          <button onClick={() => saveGame(player)}>Save</button>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  );
}

//<li key={i}>{item}: {player.inventory[item]}</li>