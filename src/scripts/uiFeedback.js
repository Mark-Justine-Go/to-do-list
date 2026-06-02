import { Storage, Label } from "./dbFunctions.js";
import {format, startOfToday} from "date-fns";
import deleteIcon from "../images/delete.svg";

function removeID(identifier){
    const element = document.querySelector(`#${identifier}`);
    if(element === null) return
    element.removeAttribute("id");
}

function createLabel(label,hasRemove=true){
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
    if(hasRemove)div.appendChild(deleteButton);

    return div;
}

function createLabelCheckbox(label){
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const labelName = document.createElement("p");
    const indicator = document.createElement("div");

    labelName.textContent = `${label.name}`;

    indicator.style.backgroundColor = `${label.color}`;
    indicator.classList.add("indicator");

    checkbox.type = "checkbox";
    checkbox.setAttribute("id", label.name);
    checkbox.setAttribute("name", "label");
    checkbox.setAttribute("value", label.name);

    div.append(checkbox);
    div.append(indicator);
    div.append(labelName);

    return div
}

function createTask(task){
    const div = document.createElement("div");
    const name = document.createElement("p");
    const description = document.createElement("p");

    div.classList.add("task");

    name.textContent = task.name;

    div.appendChild(name);

    return div
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
    const labelSelectionContainer = document.querySelector("#labelSelectionContainer");

    const labels = Storage.get("labels");
    labels.forEach(label => {
        labelMenu.appendChild(createLabel(label));
        labelSelectionContainer.appendChild(createLabelCheckbox(label));
    });
}

function showTasks(){
    const tasksLists = document.querySelector("#tasksList");

    const tasks = Storage.get("tasks");
    tasks.forEach(task =>{
        tasksLists.appendChild(createTask(task));
    });
}

function selectionFeedback(e,attribute,identifier){
    removeID(identifier);
    e.currentTarget.setAttribute(attribute, identifier);
}

function updateDate(date){
    const dateContainer = document.querySelector("#currentDate");
    const formattedDate = format(startOfToday(), "LLLL dd  yyyy");
    dateContainer.textContent = formattedDate;
}

export {selectionFeedback, showModal, closeModal, showLabels, showTasks,updateDate}