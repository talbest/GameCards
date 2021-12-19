function getCardUi(game) {
    const outerDiv = document.createElement("div");
    outerDiv.className = "col-6";
    outerDiv.id = game.id
    outerDiv.addEventListener("pointerleave", _hideDelete)
    outerDiv.addEventListener("pointerenter", _Showdelete)
    //anotherTest
    const innerDiv = document.createElement("div");
    innerDiv.className = "card bg-dark text-white";
    ///testing for git branch 

    const img = document.createElement("img");
    img.src = game.image;
    img.className = "card-img opacity-25";

    const delBtn = document.createElement("button")
    delBtn.type = "button"
    delBtn.innerText = "delate"
    delBtn.className = "btn btn-danger btn-lg"
    delBtn.classList.add("hidden")
    delBtn.style.zIndex = 2;
    delBtn.addEventListener("click", deleteBtn)



    const divText = document.createElement("div");
    divText.className = "card-img-overlay";

    const movieName = document.createElement("h5");
    movieName.className = "card-title";
    movieName.innerText = game.name

    const movieRank = document.createElement("h8");
    movieRank.className = "card-text";
    movieRank.innerText = `the rank of this Game is ${game.rank}`;


    divText.append(movieName, movieRank)
    innerDiv.append(img, divText, delBtn);
    outerDiv.append(innerDiv);



    return outerDiv;

    function _hideDelete() {
        delBtn.classList.add("hidden")
    }

    function _Showdelete() {
        delBtn.classList.remove("hidden")
    }
}