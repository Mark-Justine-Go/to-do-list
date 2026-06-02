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

const Label = (function(){
    const add = function(e){
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

export {Label, Storage}