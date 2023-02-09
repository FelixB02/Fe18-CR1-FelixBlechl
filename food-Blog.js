class Pictures {
    picture;
    text;

    constructor(picture, text) {
        this.picture = picture;
        this.text = text;
    }
}

let array = [
    new Pictures("https://cdn.pixabay.com/photo/2017/08/05/12/32/flat-lay-2583212_1280.jpg", "Eggs Salad"),
    new Pictures("https://cdn.pixabay.com/photo/2016/03/05/19/02/abstract-1238247_1280.jpg", "Cheeseburger"),
    new Pictures("https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg", "Pizza"),
    new Pictures("https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg", "Pancakes"),
    new Pictures("https://cdn.pixabay.com/photo/2021/05/18/15/15/pasta-6263653_1280.jpg", "Pasta"),
    new Pictures("https://cdn.pixabay.com/photo/2015/08/20/20/07/cereal-898073_1280.jpg", "Cereal"),
    new Pictures("https://cdn.pixabay.com/photo/2016/03/26/13/25/sacher-cake-1280575_1280.jpg", "Sachertorte"),
    new Pictures("https://cdn.pixabay.com/photo/2021/02/06/11/51/food-5987888_1280.jpg", "Lasagne"),
    new Pictures("https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg", "Steak")
]

for (let count of array) {
    document.getElementById("container").innerHTML += `<div class="element"> <img src="${count.picture}"> <div id="second"> <p id="para"> ${count.text} <input type="button" value="Click to delete" class="btn"> </p> </div> </div>`
}

let array2 = document.getElementsByClassName("btn");
console.log(array2)
for (let i = 0; i < array2.length; i++) {
    array2[i].addEventListener("click", function() {
        document.getElementsByClassName("element")[i].style.display = "none";
    })
}

let text2 = "";
let link = "";

function saveValues() {
    text2 = document.getElementById("text").value;
    link = document.getElementById("link").value;
    array.push(new Pictures(link, text2))
    document.getElementById("container").innerHTML += `<div class="element"> <img src="${link}"> <div id="second"> <p id="para"> ${text2} <input type="button" value="Click to delete" class="btn"> </p> </div> </div>`
    let array3 = document.getElementsByClassName("btn");
    console.log(array3)
    for (let i = 0; i < array3.length; i++) {
        array3[i].addEventListener("click", function() {
            document.getElementsByClassName("element")[i].style.display = "none";
        })
    }
}

document.getElementById("btn2").addEventListener("click", saveValues)