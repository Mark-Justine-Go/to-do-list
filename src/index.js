import "./index.css";
import { selectionFeedback, showModal, closeModal} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";

function init(){
    //set listener for menu buttons
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    setListener("#addNewTaskButton", "click", (e)=>{showModal("#addTaskModal")});
    setListener("#addNewLabelButton", "click", (e)=>{showModal("#addLabelModal")});
}

init();