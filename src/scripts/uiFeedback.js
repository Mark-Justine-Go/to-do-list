function removeID(identifier){
    const element = document.querySelector(`#${identifier}`);
    if(element === null) return
    element.removeAttribute("id");
}

function showAddNewTaskModal(){
    const addNewTaskModal = document.querySelector("#addTaskModal");
    addNewTaskModal.classList.toggle("hidden");
}

function closeModal(e){
    const modal = document.getElementById(e.currentTarget.dataset.modalId);
    modal.classList.toggle("hidden");
}

function selectionFeedback(e,attribute,identifier){
    removeID(identifier);
    e.currentTarget.setAttribute(attribute, identifier);
}

export {selectionFeedback, showAddNewTaskModal, closeModal}