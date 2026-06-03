import "./index.css";
import { selectionFeedback, showModal, closeModal, showLabels, showTasks,updateDate} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";
import { Label, Task } from "./scripts/dbFunctions.js";

function init(){
    //set listener for menu buttons
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    showLabels();
    setListener("#addNewLabelButton", "click", (e)=>{showModal("#addLabelModal")});
    setListener("#addLabelConfirmButton", "click", Label.add);
    showTasks();
    setMultipleListeners(".status", "change", Task.changeStatus);
    setListener("#addNewTaskButton", "click", (e)=>{showModal("#addTaskModal")});
    setListener("#addTaskConfirmButton", "click", Task.add);
    updateDate();
}

init();