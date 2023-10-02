import Alerts from "./containers/alerts";
import { Buttons } from "./containers/buttons";
import Chat from "./containers/chat";
import Colors from "./containers/colors";
import Forms from "./containers/forms";
import Progress from "./containers/progress";
import { Tags } from "./containers/tags";
import Typography from "./containers/typography";

function App() {
  return (
    <div className="App container my-5">
      <Typography />
      <Colors />
      <Forms />
      <Tags />
      <Buttons />
      <Alerts />
      <Progress />
      <Chat />
    </div>
  );
}

export default App;
