const product =[
    {
    id: 0,
    image: 'download-3.png',
    title: 'Z Flip Foldable Mobile',
    price: 120,
},

{
    id: 1,
    image: 'download-2.png',
    title: 'Air Pods Pro',
    price: 60,
},

{
    id: 2,
    image: 'download-1.png',
    title: '250D DSLR Camera',
    price: 230,
},

{
    id: 3,
    image: 'download-4.png',
    title: 'Head Phone',
    price: 100,
}

];

const categories = [...new Set(product.map((item)=>
{return item}))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class= 'box'>
        <div class = 'img-box'>
        <img class ='images' src=${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick = 'addtocart ("+(i++)+")'>Add to cart</button> "+
        `</div>
        </div>`

    )
}).join('')

var cart =[];
function displaycart(a){
    let j = 0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
            {
                var {image, title, price}= items;
                return(
                    `<div class='cart-item'>
                    <div class ='rowimg' src=${image}>
                    </div>
                    <p style ='font-size:12px;'>${title}</p> 
                    <h2 style = 'font-size:15px;'>$ ${price}.00</h2>`+
                    "<i class = 'fas fa-trash' onclinc='delElement ("+(j++)+") "
                )

        })
        
    }
}