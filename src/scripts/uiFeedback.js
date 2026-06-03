import { Storage, Label, Task } from "./dbFunctions.js";
import {format, startOfToday} from "date-fns";
import deleteIcon from "../images/delete.svg";
import inspectIcon from "../images/inspect.svg";

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
    const icon = document.createElement("img");
    const isDone = document.createElement("input");
    const isChecked = (Storage.get("tasks").find(currTask => currTask.name === task.name)).status === "done" ? true : false;

    isDone.type = "checkbox";
    isDone.classList.add("status");
    isDone.setAttribute("id", task.name)
    isDone.setAttribute("value", task.name);
    isDone.checked = isChecked;

    name.textContent = task.name;

    icon.src = inspectIcon;
    icon.classList.add("icon");
    icon.style.marginLeft = "auto";
    icon.onclick = () => {
        inspectTask(task);
    };

    div.classList.add("task");
    div.appendChild(isDone);
    div.appendChild(name);
    div.appendChild(icon);

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

function inspectTask(task){
    const name = document.querySelector("#insTaskName");
    const description = document.createElement("p");
    const descriptionField = document.querySelector("#insTaskDescription");
    const labelsContainer = document.querySelector("#insTaskLabels");

    name.textContent = task.name;
    description.textContent = task.description;

    descriptionField.appendChild(description);

    task.labels.forEach(label => {
        const div = document.createElement("div");
        const labelName = document.createElement("p");
        const bgColor = Storage.get("labels").find(currLabel => currLabel.name === label).color;
        const indicator = document.createElement("div");
        indicator.style.backgroundColor = `${bgColor}`;
        indicator.classList.add("indicator");
        
        labelName.textContent = label;

        div.appendChild(indicator);
        div.appendChild(labelName);
        labelsContainer.appendChild(div);
    });

    showModal("#inspectTaskModal");

}

export {selectionFeedback, showModal, closeModal, showLabels, showTasks,updateDate}