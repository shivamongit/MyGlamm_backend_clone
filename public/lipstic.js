import {
    header,
    footer
} from './components/heading.js';
// console.log(header)
let headerDiv = document.getElementById("headerDiv");
headerDiv.innerHTML = header();

let footerDiv = document.getElementById("footerDiv");
footerDiv.innerHTML = footer();


async function showF() {
    try {
        let url = `http://127.0.0.1:5000/products`;
        let response = await fetch(url);
        let res = await response.json();
        console.log(res);
        console.log(res[0].lipstic_id);
         data(res[0].lipstic_id);
    } catch (err) {
        console.log(err);
    }
}
showF();


// console.log(data);

let mainDiv = document.getElementById("container");

function data(item) {
item.forEach(function (product) {
    // console.log(product);

    let div = document.createElement("div");
    div.style.border = "1px solid gainsboro";

    let imgDiv = document.createElement("div");
    imgDiv.style.height = "255px";
    imgDiv.style.width = "255px";
    imgDiv.style.margin = "auto";
    imgDiv.style.marginTop = "20px";

    let img = document.createElement("img");
    img.src = product.images;
    img.setAttribute("height", "255px");
    img.setAttribute("width", "255px");

    imgDiv.append(img);

    let name = document.createElement("p");
    name.innerText = product.name;
    name.setAttribute("id", "name");

    let des = document.createElement("p");
    des.innerText = product.description;
    des.setAttribute("id", "des");

    let rating = document.createElement("p");
    rating.innerText = product.rating;
    rating.setAttribute("id","rating");

    let price = document.createElement("p");
    price.innerText = `${product.price}`;
    price.setAttribute("id", "price");

    let icon = document.createElement("img");
    icon.src = "https://www.myglamm.com/images/plus-icon.png";
    icon.setAttribute("id", "icon");

    img.addEventListener("click", function () {
        let detail = [];
        let obj = {
            img: product.images,
            name: product.name,
            des: product.description,
            price: product.price,
        };
        detail.push(obj);
        localStorage.setItem("Lipdetail", JSON.stringify(detail));
        window.location.href = "lipsticProduct.html";
    });

    let clear;
    div.addEventListener("mouseenter", function () {
        clear = setTimeout(function () {
            div.style.boxShadow =
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
        }, 350);

        img.setAttribute("height", "270px");
        img.setAttribute("width", "270px");
    });

    div.addEventListener("mouseleave", function () {

        clearTimeout(clear);
        div.style.boxShadow = "none";

        img.setAttribute("height", "255px");
        img.setAttribute("width", "255px");
    });

    div.append(imgDiv, name, des, price);

    mainDiv.appendChild(div);


})
}
