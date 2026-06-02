import "./index.css";
import { selectionFeedback, showModal, closeModal, showLabels, showTasks,updateDate} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";
import { Label, Task } from "./scripts/dbFunctions.js";

function init(){
    //set listener for menu buttons
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    setListener("#addNewTaskButton", "click", (e)=>{showModal("#addTaskModal")});
    setListener("#addNewLabelButton", "click", (e)=>{showModal("#addLabelModal")});
    setListener("#addLabelConfirmButton", "click", Label.add);
    setListener("#addTaskConfirmButton", "click", (e)=>{Task.add(e)});

    showLabels();
    showTasks();
    updateDate();
}

init();