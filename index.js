function getFirstSelector(selector){
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