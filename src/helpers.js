
//return randomly selected item from catalgoue(array)
function choice(catalogue) {

    const c =  Math.floor(Math.random() * catalogue.length)
    return catalogue[c];
}

function remove(catalogue, article) {
    
    return catalogue.filter(it => (it !== article));    
}

export {choice, remove}
