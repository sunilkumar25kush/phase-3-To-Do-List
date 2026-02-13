
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");



inp.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});


btn.addEventListener("click", function(){
    // console.log(inp.value)


    let li = document.createElement("li");
    list.append(li);
    li.textContent = inp.value;
    inp.value =""

li.addEventListener("click", function (){
    li.classList.toggle("done")

})


let deletbtn = document.createElement("button");
deletbtn.textContent = "❌";

deletbtn.addEventListener("click", function(){
li.remove()

})

li.append(deletbtn)


})























