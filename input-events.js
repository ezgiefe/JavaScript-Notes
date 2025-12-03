const input = document.getElementById("input");
const title = document.getElementById("title");
const checkbox = document.getElementById("checkbox");
const select = document.getElementById("select");

function onInput(e){
    title.textContent = e.target.value;
}

function onChange(e){
    title.textContent = e.target.checked;
}

function onSelected(e){
    title.textContent = e.target.value;
}

input.addEventListener("input", onInput);
checkbox.addEventListener("change", onChange);
select.addEventListener("change", onSelected);

