import RouteHTR from "./route.js";
import CommonHTR from "./common.js";

const AppHTR = {
    run : () => {
        document.open();
        CommonHTR.root();
        RouteHTR.set();
        document.close();
    }
}

export default AppHTR;