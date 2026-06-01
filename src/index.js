import "./index.css";
import { selectionFeedback, showModal, closeModal, showLabels} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";
import { Label } from "./scripts/dbFunctions.js";

function init(){
    //set listener for menu buttons
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    setListener("#addNewTaskButton", "click", (e)=>{showModal("#addTaskModal")});
    setListener("#addNewLabelButton", "click", (e)=>{showModal("#addLabelModal")});
    setListener("#addLabelConfirmButton", "click", (e)=>{Label.add(e)});

    showLabels();
}

init();