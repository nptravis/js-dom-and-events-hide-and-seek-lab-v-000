function getFirstSelector(selector){
<<<<<<< HEAD
	return document.querySelector(selector);
}

function nestedTarget(){
	return document.querySelector('#nested .target');
	
}

function increaseRankBy(n){
	const nodeList = document.querySelectorAll('.ranked-list li');
	for (let i = 0; i < nodeList.length; i++){
		nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
		
	}
}

function deepestChild(){
	const el = document.querySelector('#grand-node div div div div');
	console.log(el);
	return el;
}
=======
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
>>>>>>> d87f9da26965cbd90e770132d20bde4b3681aef7
