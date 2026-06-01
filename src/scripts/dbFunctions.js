const Storage = {
    get(key){
        return JSON.parse(localStorage.getItem(key) || "[]")
    },

    set(key, data){
        const existingData = Storage.get(key);
        existingData.push(data)
        localStorage.setItem(key, JSON.stringify(existingData));
    }
}

const Label = (function(){
    const add = function(e){
        const labelName = document.querySelector("#labelName").value;
        const labelColor = document.querySelector("#labelColor").value;
        const data = {name: labelName, color: labelColor};

        Storage.set("labels", data);
    }

    return {add}
})()

export {Label, Storage}