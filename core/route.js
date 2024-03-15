import CommonHTR from "./common.js";

const RouteHTR = {
    storage : [],

    path : window.location.pathname,

    set : () => {
        const xhr   = new XMLHttpRequest();
        xhr.open("GET", `/data/route.json`, true);
        xhr.responseType = "json";
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.onloadend = () => {
            if(xhr.status === 200){
                if(xhr.response.length > 0){
                    const mappingRoute = xhr.response.find(map => RouteHTR.path === map.path);
                    if (mappingRoute) {
                        CommonHTR.render(mappingRoute.file);
                    } else {
                        CommonHTR.notfound();
                    }

                    RouteHTR.storage.push(...xhr.response);
                } else {
                    CommonHTR.notfound();
                }
            } else 
            if(xhr.status !== 200){
                setTimeout(() => {
                    document.getElementById("app_root").innerHTML = `<center><h1>${xhr.status} - ${xhr.statusText}</h1></center>`;
                }, 100);
            }
        };
        xhr.send();
    }
}

export default RouteHTR;