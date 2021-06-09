const fill = document.querySelector(".fill");
const filll = document.querySelector(".filll");
const fillll = document.querySelector(".fillll");

const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

filll.addEventListener("dragstart", dragStart);
filll.addEventListener("dragend", dragEnd);

fillll.addEventListener("dragstart", dragStart);
fillll.addEventListener("dragend", dragEnd);

for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

function dragStart(){
    this.className += " hold";
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = "fill";
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(){
    e.preventDefault();
    this.className += "hovered";
}
function dragLeave(){
    this.className = "empty";
}
function dragDrop(){
    this.className = "empty";
    this.append(fill);
}