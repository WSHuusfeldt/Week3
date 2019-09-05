window.onload = function () {
    //#region Opgave A + B + C
    var names = [];
    

    var arrayToHtml = function (x) {
        html = '<ul>'
        x.forEach(element => {
            html += '<li>' + element + '</li>'
        });
        return html + '</ul>'
    }

    var btn = document.getElementById("nameForm");
    btn.onsubmit = function(e) {
        e.preventDefault();
        var name = document.getElementById("inp").value;
        names.push(name);
        document.getElementById("outer").innerHTML = arrayToHtml(names);
    }

    var removeFirst = document.getElementById("removeFirst");
    removeFirst.onsubmit = function(e) {
        e.preventDefault();
        names.shift();
        document.getElementById("outer").innerHTML = arrayToHtml(names);
    }

    var removeLast = document.getElementById("removeLast");
    removeLast.onsubmit = function(e) {
        e.preventDefault();
        names.pop();
        document.getElementById("outer").innerHTML = arrayToHtml(names);
    }
    //#endregion
}