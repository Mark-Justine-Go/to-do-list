import "./index.css";
import { selectionFeedback, showModal, closeModal, showLabels, showTasks,updateDate, showCalendar, changeDate} from "./scripts/uiFeedback.js";
import {setListener, setMultipleListeners} from "./scripts/handleListeners.js";
import { Label, Task } from "./scripts/dbFunctions.js";

function init(){
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
    setMultipleListeners(".closeButton", "click", closeModal);
    showLabels();
    setListener("#addNewLabelButton", "click", (e)=>{showModal("#addLabelModal")});
    setListener("#addLabelConfirmButton", "click", Label.add);
    setMultipleListeners(".status", "change", Task.changeStatus);
    setListener("#addNewTaskButton", "click", (e)=>{showModal("#addTaskModal")});
    setListener("#addTaskConfirmButton", "click", Task.add);
    setListener("#calendarButton", "click", showCalendar);
    setListener("#calendar", "change", changeDate);
    updateDate();
    showTasks();
}

init();