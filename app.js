let img = document.getElementById("image");
let form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const meme = document.createElement("div");
    meme.classList.add("meme");

    const textTop= document.createElement("div");
    textTop.innerHTML = document.getElementById("top").value;
    textTop.classList.add("top-text");

    const img = document.createElement("img");
    img.classList.add("meme-img");
    img.src = document.getElementById("image").value;

    const textBottom = document.createElement("div");
    textBottom.classList.add("bottom-text");
    textBottom.innerHTML = document.getElementById("bottom").value;
    
    const remove = document.createElement("button");
    remove.innerHTML = "X";
    remove.classList.add("remove");
    remove.addEventListener("click", function(e){
        e.target.parentElement.remove();
    });

    meme.classList.add("meme");
    meme.appendChild(textTop);
    meme.appendChild(img);
    meme.appendChild(textBottom);
    meme.appendChild(remove);
    document.body.append(meme);

form.reset()
   
});



  

