let result = "";
// const cite = document.querySelector("cite");
// result += cite.nodeName;
// result += " > " + cite.parentElement.nodeName;
// result += " > " + cite.parentElement.parentElement.nodeName;
// result += " > " + cite.parentElement.parentElement.parentElement.nodeName;
// result +=
//   " > " + cite.parentElement.parentElement.parentElement.parentElement.nodeName;
// result +=
//   " > " +
//   cite.parentElement.parentElement.parentElement.parentElement.parentElement
//     .nodeName;
// result +=
//   " > " +
//   cite.parentElement.parentElement.parentElement.parentElement.parentElement
//     .parentElement.nodeName;
// // console.log(cite.nodeName);
// // console.log(cite.parentElement.nodeName);
// // console.log(cite.parentElement.parentElement.nodeName);
// console.log(result.toLowerCase().split(" ").reverse().join(" "));
///////////////////////////////
const arr = [];
let currentElement = document.querySelector("cite");
// console.log(currentElement.getRootNode());
while (currentElement) {
  //   console.log(currentElement);
  let currentElementName = currentElement.nodeName;
  //   console.log(currentElementName);
  arr.unshift(currentElementName.toLowerCase());
  //   console.log(arr);
  currentElement = currentElement.parentElement;
}
console.log(arr.join(" > "));