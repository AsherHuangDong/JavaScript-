function listNode(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}

function linkList(){
	this.head = new listNode('head');
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrev = findPrev;
	this.find = find;
	this.displayReverse = displayReverse;
}

function find(item){
	var currNode = this.head;
	while (currNode.next!=null && currNode.next.element!=item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement,item){
	var newNode = new listNode(newElement);
	var currNode = this.find(item);
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
}

function findPrev(item){
	var currNode = this.head;
	while (currNode.next!=null && currNode.next.element!=item) {
		currNode = currNode.next;
		// statement
	}
	return currNode;
}

function remove(item){
	var currNode = this.find(item);
	if(! currNode.next == null){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

function findLast(){
	var currNode = this.head;
	while(currNode.next!=null ){
		currNode = currNode.next;
	}
	return currNode;
}
//正向显示链表
function display(){
	var currNode = this.head;
	while (currNode != null) {
		console.log(currNode.next.element)
		currNode = currNode.next;
	}
}
//反向显示链表
function displayReverse(){
	var currNode = this.findLast();
	while (currNode.previous!=null) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

var list = new linkList();
list.insert(1,'head');
list.insert(2,'head');
list.insert(3,'head');
list.display()