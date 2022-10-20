export default function Box(parameters) {
    const {element, children, classes} = parameters;
    const box = document.createElement(element || 'div');
    if (Array.isArray(children)){
        children.map( child => {
            box.append(child);
        })
    } else{box.innerHTML = children || '';}
    box.className = classes || '';
    return box;
}


