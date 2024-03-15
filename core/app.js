import Routing from "./route.js";
import Common from "./common.js";

const App = {
    run : () => {
        document.open();
        Common.root();
        Routing.set();
        document.close();
    }
}

export default App;