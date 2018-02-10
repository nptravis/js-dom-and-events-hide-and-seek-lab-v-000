function getFirstSelector(selector){
    return document.querySelector(`${selector}`)
}

function nestedTarget(){
    return document.querySelector(`#nested .target`)
}

function deepestChild(){
    let div = document.querySelector('#grand-node')
    let nextNode = div.children[0]

    while(nextNode){
        div = nextNode
        nextNode = div.children[0]
    }
    return div
}

function increaseRankBy(n){
    let rankedList = document.querySelectorAll(".ranked-list li")
    for(let i = 0; i < rankedList.length; ++i){
        debugger
        rankedList[i].innerText = parseInt(rankedList[i].innerText) + n
    }
}