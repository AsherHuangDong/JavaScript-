
function BinaryTree(keys) {

    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    let root = null;

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    this.insert = function (key) {
        let newNode = new Node(key)
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

function zhongxu(node) {
    if (node !== null) {
        zhongxu(node.left);
        console.log(node.key);
        zhongxu(node.right);
    }
}


let averageOfLevels = function (root) {
    let queue = []
    let result = []
    if (root) {
        queue.push(root)
    }
    while (queue.length) {
        let level = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            level.push(node.key)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result
}

let arr = [3,9,20,15,7];
let node = new BinaryTree(arr);
console.log(node);
//zhongxu(node);
console.log(averageOfLevels(node))

