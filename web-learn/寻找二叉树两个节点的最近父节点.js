function treeNode(keys) {
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    this.insert = function (key) {
        let newNode = new Node(key);
        if (root == null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    keys.forEach(key => {
        this.insert(key);
    });

    return root;
}

var path = [];

//判断该节点是否存在于该二叉树中
function findNode(node, key) {
    if (node === null) {
        path = [];
        return false;
    }
    path.push(node.key);
    if (key < node.key) {
       findNode(node.left, key);
    } else if (key > node.key) {
       findNode(node.right,key);
    } else {
        return true;
    }
}

//比较两个路径
function compare(arr1,arr2){
    let i = 0;
    while(i<arr1.length && i<arr2.length && arr1[i] == arr2[i]){
        i++;
    }
    return arr1[i-1];
}

//找到最近节点
function getNode(node,key1,key2) {
   if(node == null || findNode(node,key1) == false || findNode(node,key2)==false){
       return null;
   }
   path = [];
   findNode(node, key1);
   var path1 = path;
   path = [];
   findNode(node, key2);
   var path2 = path;
   path = [];
   console.log(path1,path2)
   return compare(path1,path2);
   
}

let arr = [3, 1, 4, 2, 5, 0, 8, 10, 6];

let node = new treeNode(arr);
console.log(getNode(node,10,6));


