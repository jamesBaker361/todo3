//https://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393
function Node(data,junk) {
    this.data = data;
    this.junk=junk;
    this.parent = null;
    this.children = [];
    this.id="";
    this.model="";
    this.layer=-1;
    this.done=false;
    this.tomorrow=true;
    this.numID=1;
    /*
    new tree property numID
    000 000 000 000
    like every layer is a new sequence of 000s, and like the branch id will be 000, 001, 002, etc.
    wait that wouldn't work b/c the computer can't distinguuish 001 and 1
    but if tree._root.numID=1
    and then we add parent ID*1000^layer
    numID would have to start at 1, not 0 :(
    >:)
    */
}

Node.prototype.addChild=function(data,junk){
    node=new Node(data,junk);
    this.children.push(node);
    node.parent=this;
    node.id=this.id+"children"+(this.children.length-1).toString()+"";
    node.model=this.model+".children["+(this.children.length-1)+"]";
    node.layer=this.layer+1;
    node.index=this.children.length-1;
    node.numID=(this.numID*100)+node.index+1;
    return(node);
}

 
function Tree(data,junk) {
    var node = new Node(data,junk);
    this._root = node;
}
 
Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
 
        // step 1
    })(this._root);
 
};
 
Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
 
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};
 
Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};
 
Tree.prototype.add = function(data, toData, traversal,junk) {
    var child = new Node(data,junk),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };
 
    this.contains(callback, traversal);
 
    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};
 
Tree.prototype.remove = function(data, fromData, traversal) {
    var tree = this,
        parent = null,
        childToRemove = null,
        index;
 
    var callback = function(node) {
        if (node.data === fromData) {
            parent = node;
        }
    };
 
    this.contains(callback, traversal);
 
    if (parent) {
        index = findIndex(parent.children, data);
 
        if (index === undefined) {
            throw new Error('Node to remove does not exist.');
        } else {
            childToRemove = parent.children.splice(index, 1);
        }
    } else {
        throw new Error('Parent does not exist.');
    }
 
    return childToRemove;
};
 
function findIndex(arr, data) {
    var index;
 
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].data === data) {
            index = i;
        }
    }
 
    return index;
}