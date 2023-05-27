import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://scrimba-firebase-ca86b-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const postsInDB = ref(database, "posts")

const parentEl = document.getElementById("sec3");
const publishBtn = document.getElementById("publishBtn");
const inputEl = document.getElementById("textarea");
const postList = document.getElementsByClassName("postList");

publishBtn.addEventListener("click", function () {
    if (inputEl.value) {
        push(postsInDB, inputEl.value)
    }
    inputEl.value = "";
})

onValue(postsInDB, function (snapshot) {
    parentEl.innerHTML = ""
    let postsArr = snapshot.val()
    for (let props in postsArr) {
        createPostList(postsArr[props], props)
    }
})

function createPostList(input, id) {
    let childEl = document.createElement("p")
    childEl.setAttribute("id", id)
    childEl.classList.add("postList")
    childEl.innerText = input
    parentEl.appendChild(childEl)
}

// Remove element from firebase and UI
parentEl.addEventListener("dblclick", function (e) {
    for (let post of postList) {
        if (e.target.id === post.id) {
            let itemToRemove = ref(database, `posts/${post.id}`)
            remove(itemToRemove)
            // parentEl.removeChild(post)
        }
    }
})













