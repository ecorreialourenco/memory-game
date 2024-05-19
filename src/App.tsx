import { useMemo, useState } from "react";
import { GameBoard, GameSelector } from "./Components";
import { GameContext } from "./Context";

function App() {
  const [type, setType] = useState<string>("easy");
  const [selected, setSelected] = useState<boolean>(false);
  const gameProviderValue = useMemo(() => ({ type, setType }), [type, setType]);

  return (
    <div className="App">
      <GameContext.Provider value={gameProviderValue}>
        {selected ? (
          <GameBoard onSelect={() => setSelected(false)} />
        ) : (
          <GameSelector onSelect={() => setSelected(true)} />
        )}
      </GameContext.Provider>
    </div>
  );
}

export default App;
