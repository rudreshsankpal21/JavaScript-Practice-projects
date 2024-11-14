var button = document.querySelector("#add");
var stat = document.querySelector("h5");
var c = 0;
button.addEventListener("click",()=>{
    if (c == 0) {
        stat.innerHTML = "Friends";
        stat.style.color = "green";
        button.innerHTML = "Remove friend";
        c++;    
    }else{
        stat.innerHTML = "Strangers";
        stat.style.color = "red";
        button.innerHTML = "Add friend";

        c--;
    }

})

