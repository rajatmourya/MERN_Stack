const couninUL = document.getElementById("counting");

const ulChildren = couninUL.children;
// const ulChildren = couninUL.childNodes;

const ulParent = couninUL.parentElement;
// const ulParent = couninUL.parentNode;

console.log(ulChildren);
console.log(ulParent);

const oneLi = document.getElementById("one");
const twoLi = document.getElementById("two");
const threeLi = document.getElementById("three");
const fourLi = document.getElementById("four");

const siblingsOneLi = oneLi.parentElement.children;

console.log(siblingsOneLi);
