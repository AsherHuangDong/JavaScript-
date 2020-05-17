
//建立一颗二叉树
function Tree (keys) {

	function Node(key){
		this.key = key;
		this.left = null;
		this.right = null;
	}

	let root = null;

	function insertNode(node,newNode){
		if(newNode.key < node.key){
			if(node.left == null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode)
			}
		}else{
			if(node.right == null){
				node.right = newNode;
			}else{
				insertNode(node.right,newNode)
			}
		}
	}

	function insert(key){
		let newNode = new Node(key);
		if(root == null){
			root = newNode;
		}else {
			insertNode(root,newNode);
		}
	}

	keys.forEach(key =>{
		insert(key);
	})

	return root;

}

let arr = [8,4,18,2,5,1,3,10,24];
let tree = new Tree(arr);
console.log(tree);

//非递归先序遍历

function Xianxu(node){
	
}















