const Storage = {
    isDuplicate(existingData, data){
        return (existingData.some(obj => obj.name === data.name)) ? true : false
    },

    get(key){
        return JSON.parse(localStorage.getItem(key) || "[]")
    },

    set(key, data, clear=false){
        if(!clear){
            const existingData = Storage.get(key);
            if(!this.isDuplicate(existingData,data)) {
                existingData.push(data);
            }

            localStorage.setItem(key, JSON.stringify(existingData));
        }else{
            localStorage.setItem(key, JSON.stringify(data));
        }
    }
}

const Task = (function(){
    const add = function(e){
        const taskName = document.querySelector("#taskName").value;
        const taskDescription = document.querySelector("#taskDescription").value;
        const taskDate = document.querySelector("#currentDate").textContent;
        const taskLabels = Array.from(
            document.querySelectorAll("input[name='label']:checked")
        ).map(checkbox => checkbox.value);

        const data = {name: taskName, description: taskDescription, labels: taskLabels, date: taskDate};
        Storage.set("tasks", data);
    }   

    return {add}
})()

const Label = (function(){
    const add = function(){
        const labelName = document.querySelector("#labelName").value;
        const labelColor = document.querySelector("#labelColor").value;
        const data = {name: labelName, color: labelColor};

        Storage.set("labels", data);
        location.reload();
    }

    const remove = function(identifier){
        const currData = Storage.get("labels");
        const updatedData = currData.filter(label => label.name !== identifier);
        Storage.set("labels",updatedData,true);
        location.reload();
    }

    return {add, remove}
})()

export {Label,Task,Storage}