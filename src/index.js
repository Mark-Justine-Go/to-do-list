import "./index.css";
import { selectionFeedback, showAddNewTaskModal, closeModal} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";

function init(){
    //set listener for menu buttons
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    setListener("#addNewTaskButton", "click", showAddNewTaskModal);
}

init();