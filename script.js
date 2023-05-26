function changeBG() {
    document.body.style.backgroundColor = "blue";
}

function goodvibes() {
    let goodVibes = document.getElementById("demo")
    goodVibes.innerHTML = "Be the best version of you";
}

function showtime() {
    let timePlacer = document.getElementById("time")
    var date = Date()
    timePlacer.innerHTML = date;
}

function changepic() {
    let pic = document.getElementById("pic")
    pic.src = "dice-6.png";
}

function hidepic() {
    let pic = document.getElementById("pic")
    pic.remove();
}

function showpic() {
    let addpic = document.createElement("img");
    let place = document.getElementById("EventDiv")
    addpic.src = "dice-6.png";
    addpic.style.height = "100px"
    addpic.id="pic";
    place.appendChild(addpic);
}

function header() {
    let header = document.getElementById("EventDiv")
    let img = document.getElementById("pic")
    header.style.background = "gray";
    header.style.textAlign = "center";
    header.style.color = "white";
    header.style.marginBottom="50px"
    img.style.border = "10px solid green";
}

function removeheader() {
    let date = document.getElementById("time")
    let img = document.getElementById("pic")
    let head = document.getElementById("demo")
    date.remove();
    img.remove();
    head.remove();
}

function addheader() {
    let place = document.getElementById("EventDiv")
    place.style.textAlign="center"
    place.style.marginBottom="50px"

    let addimg = document.createElement("img");
    addimg.src="dice-6.png"
    addimg.style.height="100px"
    addimg.style.width="100px"
    addimg.style.border = "10px solid green";

    let addtime = document.createElement("p")
    var date = Date()
    addtime.innerHTML = date;

    let addtitle = document.createElement("h1")
    addtitle.innerHTML = "Be the best version of you"

    let addcaption = document.createElement("p")
    addcaption.innerHTML = "Thank you for using my site"
    addcaption.style.textAlign="center"
    addcaption.style.color="yellow"

    place.appendChild(addtitle)
    place.appendChild(addtime)
    place.appendChild(addimg)
    document.body.appendChild(addcaption)
}