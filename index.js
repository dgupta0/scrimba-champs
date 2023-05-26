console.log("start...");
const parentEl = document.getElementById("sec3");
const publishBtn = document.getElementById("publishBtn");
const inputEl = document.getElementById("textarea");
const postList = document.getElementsByClassName("postList");

publishBtn.addEventListener("click", function () {
    let message = ""
    let childEl = document.createElement("p")
    childEl.classList.add("postList")
    message = inputEl.value
    childEl.innerText = message
    parentEl.appendChild(childEl)
    inputEl.value = "";
})

parentEl.addEventListener("dblclick", function (e) {
    for (let i = 0; i < postList.length; i++) {
        if (e.target.innerText === postList[i].innerText) {
            parentEl.removeChild(postList[i])
        }
    }
})











//console.log(inputEl.value)

