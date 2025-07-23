addEventListener("DOMContentLoaded", () => {
  console.log("hello browser!");

  const bla = "Hello";
  // debugger;

  console.log(document.getElementById("myDiv"));

  // css like selector -> returns the first element
  console.log(document.querySelector("body > .pick-me"));

  // returns an array of all selected elements
  console.log(document.querySelectorAll("body > .pick-me"));

  const myP = document.querySelector("#myP");
  console.log(myP.innerHTML);

  // Updating Element Content
  setTimeout(() => {
    myP.innerHTML = "<span>Hello from JavaScript</span>";
    // myP.textContent = "<span>Hello from JavaScript</span>";
  }, 2000);

  // Updating Element Attribute
  setTimeout(() => {
    const myA = document.querySelector("#myA");
    myA.href = "https://www.walla.co.il";
    myA.setAttribute("href", "https://www.walla.co.il");
    myA.innerHTML = "Go to Walla";
  }, 2000);

  // Updating inline style
  setTimeout(() => {
    myP.style.color = "yellow";
    // myP.style["font-size"] = "20px";
    myP.style.fontSize = "20px";
    // myP.style.cssText = "color: yellow; font-size: 20px";
  }, 2000);

  // Updating style using classes
  // setTimeout(() => {
  //   document.querySelector("#myDiv").classList.add("hide");
  // }, 2000)

  setTimeout(() => {
    document.querySelector("#myDiv").classList.remove("hide");
  }, 4000);

  // setInterval(() => {
  //   document.querySelector("#myDiv").classList.toggle("hide");
  // }, 1000);

  function showAlert() {
    alert("Hello from Function");
  }

  function changePContent() {
    document.querySelector("#myP2").innerHTML = "Changed with Event";
  }

  // Attaching an event handler to an Element
  // Step 1 - Select the element that I want to attach the handler to (button)
  // Step 2 - Attached the handler (function) to the element event

  // Event for page loaded
  document.getElementById("btnHandler").addEventListener("click", (event) => {
    document.querySelector("#pHandler").innerHTML = "Changed with Event";
    console.log(bla);
  });
});
