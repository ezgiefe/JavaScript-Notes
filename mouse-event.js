const div = document.querySelector("div");
const img = document.querySelector("img");


function onClick() {
    console.log("onclick");
}

function onDblClick() {
    console.log("dblclick");
}

function onContextmenu() {
    console.log("onContextmenu");
}

function onMouseDown() {
    console.log("onMouseDown");
}

function onMouseEnter() {
    console.log("onMouseEnter");
}

function onMouseMove() {
    console.log("onMouseMove");
}

function onDrag() {
    console.log("onDrag");
}

div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDblClick);
div.addEventListener("contextmenu", onContextmenu);
div.addEventListener("mousedown", onMouseDown);
div.addEventListener("mouseenter", onMouseEnter);
div.addEventListener("mousemove", onMouseMove);
img.addEventListener("drag", onDrag);






