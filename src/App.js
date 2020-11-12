import Game from "./Game";
import { HanoiProvider } from "./providers/HanoiContext";

function App() {
  return (
    <HanoiProvider>
      <Game />
    </HanoiProvider>
  );
}

export default App;
