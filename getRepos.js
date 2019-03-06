function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

var retri_lolo;

function getReposInit() {
    httpGetAsync("https://api.github.com/users/ED7BA470/repos", function (resp) {
        console.log("GG");
        retri_lolo = JSON.parse(resp);
        var Bresp = JSON.parse(resp);
        var el = document.getElementById("reposcontainer");
        el.innerHTML = "";
        var RName;
        var Rsrc;
        for(var i = 0; i < Bresp.length; i++) {
            RName = Bresp[i].name;
            Rsrc = Bresp[i].html_url;
            var a = document.createElement("a");
            var br = document.createElement("br");
            a.innerHTML = RName;
            a.setAttribute("href", Rsrc);
            a.setAttribute("id", RName + "-repo");
            el.appendChild(a);
            el.appendChild(br);
        }
    });
}