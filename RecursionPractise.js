// "use strict";

// function sumTo(n){

//     if(n==0){
//         return n
//     } else {
//     return n+sumTo(n-1);

// }
// }
// function factorial(n){
//     if(n==1){
//         return n;
//     }else {
//         return n*factorial(n-1);
//     }
// }
// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }else{
//         return n+fibonacci(n-1);
//     }
// }

// function outputList(arr){
//     let count=0;
//     if(arr==count){
//         return
//     }
//     else{
//         console.log(arr[count]);
//         count++
//         outputList(arr);
//     }
// }

// let node3 = {
//   name: "p",
//   value: "This is text in the a paragraph",
//   children: null,
// };

// let node4 = {
//   name: "label",
//   value: "Name",
//   children: null,
// };

// let node5 = {
//   name: "input",
//   value: "this was typed by a user",
//   children: null,
// };

// let node2 = {
//   name: "div",
//   value: null,
//   children: [node4, node5],
// };

// let node1 = {
//   name: "body",
//   children: [node2, node3],
//   value: null,
// };

// function printRecursive(obj) {
//   console.log(obj.name + ": " + obj.value);
//   if (obj.children === null) return;
//   obj.children.forEach((child) => {
//     printRecursive(child);
//   });
// }

// printRecursive(node1);

//Call your recursive function with each of these modifier functions.
//*/
{
  function treeModifier(treeNode, modFunc) {
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
      return undefined;
    } else {
      //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
        treeModifier(node, modFunc);
      }
    }
  }

  let a = [];
  let b = [];
  console.log(a === b);

  function starFunction(node) {
    node.value = "***" + node.value + "***";
    return undefined;
  }

  function caps(node) {
    node.value = node.value.toUpperCase();
  }

  class TreeNode {
    constructor(value) {
      this.value = value;
      this.descendents = [];
    }
  }

  // create nodes with values
  const abe = new TreeNode("Abe");
  const homer = new TreeNode("Homer");
  const bart = new TreeNode("Bart");
  const lisa = new TreeNode("Lisa");
  const maggie = new TreeNode("Maggie");
  // associate root with is descendents
  abe.descendents.push(homer);
  homer.descendents.push(bart, lisa, maggie);

  console.log(treeModifier(homer, starFunction));
  console.log("now tree has stars", abe);
}
