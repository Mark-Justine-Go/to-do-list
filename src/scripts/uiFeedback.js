import { Storage, Label } from "./dbFunctions.js";
import deleteIcon from "../images/delete.svg";

function removeID(identifier){
    const element = document.querySelector(`#${identifier}`);
    if(element === null) return
    element.removeAttribute("id");
}

function createLabel(label){
    const div = document.createElement("div");
    const indicator = document.createElement("div");
    const labelName = document.createElement("p");
    const deleteButton = document.createElement("img");

    labelName.textContent = `${label.name}`;

    indicator.style.backgroundColor = `${label.color}`;
    indicator.classList.add("indicator");

    deleteButton.classList.add("icon");
    deleteButton.classList.add("deleteLabel");
    deleteButton.src = deleteIcon;
    deleteButton.onclick = () => {Label.remove(label.name)};

    div.appendChild(indicator);
    div.appendChild(labelName);
    div.appendChild(deleteButton);

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