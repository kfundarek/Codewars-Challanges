//Linked Lists - Length & Count

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  if (head === null || undefined){
  	return 0;
  }
  var count = 1;
  while (head.next !== null){
  	count++;
  	head = head.next;
  }
  return count;
}

function count(head, data) {
  // Your code goes here.
  if (head === null || undefined){
  	return 0
  }
  var count = 0;
  do{
	  if (head.data === data){
	  		count++
	  	}
	  	head = head.next;
	} while (head !== null);

  return count;
}