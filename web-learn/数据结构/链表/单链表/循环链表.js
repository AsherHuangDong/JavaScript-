function Node(element){
	this.element = element;
	this.next = null;
}

function listLink(){
	this.head = new Node('head');
	this.head.next = this.head;
}