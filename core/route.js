import Common from "./common.js";

const Routing = {
    path : window.location.pathname,
    set : () => {
        const xhr   = new XMLHttpRequest();
        xhr.open("GET", `/data/route.json`, true);
        xhr.responseType = "json";
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.onloadend = () => {
            if(xhr.status === 200){
                if(xhr.response.length > 0){
                    xhr.response.filter(map => {
                        Routing.path === map.path ? Common.render(map.file) : Common.notfound();
                    });
                } else {
                    Common.notfound();
                }
            } else 
            if(xhr.status !== 200){
                setTimeout(() => {
                    document.getElementById("app_root").innerHTML = `<center><h1>${xhr.status} - ${xhr.statusText}</h1></center>`;
                }, 0);
            }
        };
        xhr.send();
    }
}

export default Routing;