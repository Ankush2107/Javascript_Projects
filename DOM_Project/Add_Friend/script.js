const isFriend = document.querySelector("h5");
const btn = document.querySelector("button");
let check = 0;


btn.addEventListener("click", () => {
    if(check === 0) {
        isFriend.innerHTML = "Friend";
        isFriend.style.color = "green";
        btn.innerHTML = "Remove";
        check = 1;
    } else {
        isFriend.innerHTML = "Stranger";
        isFriend.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }
})