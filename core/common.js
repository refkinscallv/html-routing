const Common = {
    root : () => {
        document.write(`<main id="app_root"></main>`);
    },

    notfound : () => {
        setTimeout(() => {
            document.getElementById("app_root").innerHTML = `<center><h1>404 - Not Found</h1></center>`;
        }, 0);
    },

    render : (file, template = false) => {
        const xhr   = new XMLHttpRequest();
        xhr.open("GET", `/app/${file}`, true);
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.onloadend = () => {
            if(xhr.status === 200){
                document.getElementById("app_root").remove();
                document.write(xhr.response);
            } else 
            if(xhr.status !== 200){
                setTimeout(() => {
                    document.getElementById("app_root").innerHTML = `<center><h1>${xhr.status} - ${xhr.statusText}</h1></center>`;
                }, 0);
            }
        };
        xhr.send();
    },
}

export default Common;