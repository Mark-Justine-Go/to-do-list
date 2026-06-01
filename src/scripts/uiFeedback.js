import { Storage } from "./dbFunctions.js";
function removeID(identifier){
    const element = document.querySelector(`#${identifier}`);
    if(element === null) return
    element.removeAttribute("id");
}

function createLabel(label){
    const div = document.createElement("div");
    const indicator = document.createElement("div");
    const labelName = document.createElement("p");

    labelName.textContent = `${label.name}`;

    indicator.style.backgroundColor = `${label.color}`;
    indicator.classList.add("indicator");

    div.appendChild(indicator);
    div.appendChild(labelName);

    return div;
}

function showModal(identifier){
    const modal = document.querySelector(identifier);
    modal.classList.toggle("hidden");
}

function closeModal(e){
    const modal = document.getElementById(e.currentTarget.dataset.modalId);
    modal.classList.toggle("hidden");
}

function showLabels(){
    const labelMenu = document.querySelector("#labels");

    const labels = Storage.get("labels");
    labels.forEach(label => {
        labelMenu.appendChild(createLabel(label));
    });
}

function selectionFeedback(e,attribute,identifier){
    removeID(identifier);
    e.currentTarget.setAttribute(attribute, identifier);
}

export {selectionFeedback, showModal, closeModal, showLabels}