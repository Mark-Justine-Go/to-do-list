function setMultipleListeners(selector,event,fn, ...args){
    const nodes = document.querySelectorAll(selector);
    nodes.forEach(node => {
        node.addEventListener(event, (e) => {fn(e, ...args)});
    })
}

function setListener(selector, event, fn, ...args){
    const node = document.querySelector(selector);
    node.addEventListener(event, (e) => {fn(e, ...args)});
}

export {setMultipleListeners, setListener}