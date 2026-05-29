import "./index.css";
import { selectionFeedback } from "./scripts/uiFeedback.js";
import { setMultipleListeners } from "./scripts/handleListeners.js";

function init(){
    setMultipleListeners(".clickable", "click", selectionFeedback, "id", "selected");
}

init();