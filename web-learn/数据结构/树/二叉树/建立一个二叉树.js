//二叉排序树
function BinarySearchTree(keys){

	let Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}

	let root = null;

	//插入节点
	let insertNode = function(node,newNode){
		if(newNode.key < node.key){
			if(node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		}else {
			if(node.right === null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode);
			}
		}
	}

	this.insert = function(key){
		let newNode = new Node(key);
		if(root === null){
			root = newNode;
		}else{
			insertNode(root,newNode)
		}
	}

	keys.forEach(key=>{
		this.insert(key)
	})
	return root;
}

//中序遍历
let ZhongXu = function(node){
	if(node!==null){
		ZhongXu(node.left);
		console.log(node.key);
		ZhongXu(node.right);
	}
}
//先序遍历
let XianXu = function(node){
	if(node !== null){
		console.log(node.key);
		XianXu(node.left);
		XianXu(node.right);
	}
}
//后序遍历
let HouXu = function(node){
	if(node !== null){
		HouXu(node.left);
		HouXu(node.right);
		console.log(node.key);
	}
}

//查找最小值
let Min = function(node){
	if(node){
		while (node && node.left!==null) {
			node = node.left;
		}
	}
	return node.key;
}
//查找最大值
let Max = function(node){
	if(node){
		while (node && node.right !== null) {
			node = node.right;
		}
	}
	return node.key;
}
//查找某个值

let Find = function(node,key){
	if(node === null){
		return false;
	}

	if(key < node.key){
		return Find(node.left,key);
	}else if(key > node.key){
		return Find(node.right,key);
	}else{
		return true;
	}
}

//删除叶子某个节点

let removeYeZi = function(node,key){
	if(node === null){
		return null;
	}

	if(key <node.key){
		node.left = remove(node.left,key);
		return node;
	}else if(key > node.key){
		node.right = remove(node.right,key);
		return node;
	}else{
		if(node.left === null && node.right === null){
			node = null;
			return node;
		}
	}
}

//删除某个度为一的节点
let removeOne = function(node,key){
	if(node === null){
		return null;
	}

	if(key < node.key){
		node.left = removeOne(node.left,key);
		return ndoe;
	}else if(key > node.key){
		node.right = removeOne(node.right,key);
		return node;
	}else{
		if(node.left === null && node.right === null){
			node = null;
			return node;
		}
		if(node.left === null){
			node = node.right;
			return node;
		}else if(node.right === null){
			node = node.left;
			return node;
		}
	}
}
//删除某个度为二的节点
let removeTwo =  function(node,key){
	if(node === null){
		return null;
	}

	if(key < node.key){
		node.left = removeTwo(node.left,key);
		return node;
	}else if(key > node.right){
		node.right = removeTow(node.right,key);
		return node;
	}else{
		if(node.left === null && node.right === null){
			node = null;
			return node;
		}
		if(node.left === null){
			node = node.right;
			return node;
		}else if(node.right === null){
			node = node.left;
			return node;
		}
		let MinNode = Min(node.right);
		node.key = MinNode.key;
		node.right = removeTwo(node.right,MinNode.key);
		return node;
	}
}

//层次遍历

const keys = [8,3,10,1,6,14,4,7,13];
let node = BinarySearchTree(keys);
console.log(node)
console.log('中序遍历')
ZhongXu(node);
console.log('\n')
console.log('先序遍历')
XianXu(node);
console.log('\n')
console.log('后序遍历')
HouXu(node);
console.log('\n')
console.log('最小值:',Min(node))
console.log('\n')
console.log('最大值:',Max(node))
console.log('\n');
console.log(Find(node,8));
console.log(Find(node,2));
