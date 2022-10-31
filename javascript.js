
// let prices = [13, 15, 28, 17]
// let names = ["Californiashake", "Salamon salade", "Filadephia", "Shake make"]
// let images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg']

// total = 0

// let buttons = document.querySelectorAll('.order');


// for(let i = 0; i < buttons.length ; i++){

//     buttons[i].addEventListener('click', function(){

//         let id = buttons[i].getAttribute('id')
//         total += prices[id]
//         // console.log(prices[id]²+ " " + images[id] + " total = " + total)

//         let image = document.createElement('img')
//         image.setAttribute('src', images[id])

//         let p = document.createElement('p')
//         p.textContent = prices[id]

//         let totalElement = document.querySelector('.total')
//         totalElement.textContent = total

//         let div = document.createElement('div')
//         div.classList.add('productCard')

//         div.append(image, p)

//         let wrapper = document.querySelector('.wrapper')
//         wrapper.append(div)


//     })

// }



const ordrBtn = document.querySelectorAll(".order")

ordrBtn.forEach(Element =>{
    Element.addEventListener("click",function(){
        let hrcarte= document.querySelector(".hrCarte")

        let parentElement =  Element.parentElement
        let productName =(parentElement.querySelector("#sushi_name").innerHTML)
        let productPrice =(parentElement.querySelector("#sushi_price").innerHTML)
        let producyImg =(parentElement.querySelector("img").src)
      

        let html =  `<div class="mycatreStyle">
        <img src=${producyImg} >
        <p id="price">${productPrice}</p>
        <input input id="qntt" type="number" value="1">
       
    </div>`
    hrcarte.insertAdjacentHTML("beforeend",html)
    })
})


const totalbtn = document.querySelector(".clc")
totalbtn.addEventListener("click",function(){
    const panier = document.querySelector(".hrCarte")
    const orderdiv = panier.querySelectorAll(".mycatreStyle")
    let totalaArray = []


    orderdiv.forEach(Element => {
        let productPrice =Element.querySelector("#price").innerHTML.replace("$","")
        let quantity = Element.querySelector("#qntt")
        console.log(productPrice ,quantity.value)
        totalaArray.push(quantity.value* Number(productPrice))
        
    })
    console.log(totalaArray)
    let total = totalaArray.reduce((previousValue, currentValue) => previousValue + currentValue)
    console.log("$" + total)
    alert("$" + total)
})

function toggel1() {
    var menu = document.getElementById("toggel");
    menu.style.display = "flex";
}
function toggel() {
    var menu = document.getElementById("toggel");
    menu.style.display = "none";
}