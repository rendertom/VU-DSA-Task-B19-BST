/*
  Dvejetainis paieškos medis
  VU ISI Duomenų struktūros ir algoritmai, užduotis B19
  Darbą atliko Tomas Šinkūnas, VU ISI, pirmas kursas, antra grupė
  
  Programos aprašymas:
    - Medžio sukūrimas
    - Elemento paieška
      - Contains
      - Find
      - Find Max
      - Find Min
    - Elemento įterpimas
    - Elemento šalinimas
    - Medžio apėjimas
      - Breadth first search - level by level
      - Depth first search - in order
      - Depth first search - pre order
      - Depth first search - post order
*/

const BST = require("./BST.js");

// Medžio sukūrimas
const bst = new BST(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
bst.insert(7);
bst.insert(15);

// Elemento paieška
console.log("Contains 25:", bst.contains(25));
console.log("Contains 13:", bst.contains(13));

console.log("Find 5:", bst.find(5));
console.log("Find 20:", bst.find(20));

console.log("Find max:", bst.findMax());
console.log("Find min:", bst.findMin());

// Elemento įterpimas
console.log("Insert 6:", bst.insert(6));
console.log("Insert 8:", bst.insert(8));
console.log("Insert 11:", bst.insert(11));

// Elemento šalinimas
console.log("Remove 8:", bst.remove(8));
console.log("Remove 5:", bst.remove(5));

// Medžio apėjimas
console.log("bfs:", bst.bfs()); // 10, 6, 13, 2, 7, 11, 15
console.log("dfsInOrder:", bst.dfsInOrder()); // 2, 6, 7, 10, 11, 13, 15
console.log("dfsPreOrder:", bst.dfsPreOrder()); // 10, 6, 2, 7, 13, 11, 15
console.log("dfsPostOrder:", bst.dfsPostOrder()); // 2, 7, 6, 11, 15, 13, 10
