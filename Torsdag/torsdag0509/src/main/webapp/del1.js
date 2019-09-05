window.onload = function () {
    var divs = document.getElementsByTagName('div');

    var btn = document.getElementById('btn');
    btn.onclick = function () {
        document.getElementById('box1').style.backgroundColor = 'red';
        document.getElementById('box3').style.backgroundColor = 'green';
    }
}