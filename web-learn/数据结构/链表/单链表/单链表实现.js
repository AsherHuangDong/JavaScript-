//我们设计链表包含两个类，
//一个是 Node 类用来表示节点，另一个事 LinkedList 类提供插入节点、删除节点等一些操作。

function Node(element){
	this.element = element;//当前节点元素
	this.next = null;//下一个节点链接
}

//LinkedList类：包括插入，删除，查找等方法

function LinkedList(){
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findPrev = findPrev;
	this.display = display;
	this.Reverse = Reverse;
}
//find：查找给定节点

function find(item){
	var currNode = this.head;
	while (currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

//insert:插入节点
function insert(newElement,item){
	var newNode = new Node(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

//findPev:找到指定节点的前驱结点

function findPrev(item){
	var currNode = this.head;
	while (currNode.next!=null && currNode.next.element!=item) {
		currNode = currNode.next;
		// statement
	}
	return currNode;
}

//remove:删除指定节点

function remove(item){
	var currNode = this.findPrev(item);
	if (currNode.next!=null) {
		currNode.next = currNode.next.next;
	}
}

//display:输出单链表

function display(){
	var currNode = this.head;
	while (currNode.next!=null) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

//Reverse:翻转单链表
function Reverse(){
	var pre = null;
	var cur = this.head;
	var tmp = null
	while (cur!=null) {
		tmp = cur.next;//保存一下该节点的下一个节点
		cur.next = pre;//将该节点的指针指向上一个节点
		pre = cur;//为下一个节点的指向调转做准备
		cur = tmp;//移动到下一个节点
	}
	this.head = pre;
	return this.head;
}


var linkList = new LinkedList()
linkList.insert('1','head')
linkList.insert('2','head')
linkList.insert('3','head');
linkList.display();
linkList.Reverse();
linkList.display();
