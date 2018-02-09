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

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')
  
    for (let i = 0, l = rankedLists.length; i < l; i++) {
      let children = rankedLists[i].children
  
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n
      }
    }
  }