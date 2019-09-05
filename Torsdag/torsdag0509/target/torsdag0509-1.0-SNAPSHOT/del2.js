window.onload = function() {
    //#region Opgave A rettet til at opfylde opg. c
    var div1 = document.getElementById('div1');
    div1.onclick = function() {
        document.getElementById('para').innerHTML = 'Hello from ' + 
            document.getElementById('div1').id
    }

    var div2 = document.getElementById('div2');
    div2.onclick = function() {
        document.getElementById('para').innerHTML = 'Hello from ' + 
            document.getElementById('div2').id
    }
    //#endregion 

    //#region Opgave B rettet til at opfylde opg. c
    var outer = document.getElementById('outer');

    for(var i = 2; i < outer.children.length; i++) {
        outer.children[i].onclick = function() {
            document.getElementById('para').innerHTML ='Hi from ' + this.id;
        }
    }
    //#endregion
}