fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let parentEl = document.querySelector(".cards-cont");
    let newEl = document.createElement("div");
    newEl.innerHTML = `
<div class="card">
<div class="top">
  <div class="img">
    <img src=${data[1].image.desktop} alt="">
  </div>
  <div class="cart-btn btn"><i class="fa-solid   fa-cart-shopping"></i> Add to cart</div>
  <div class="amount-btn btn">
    <button class="add">-</button>
    <p>1</p>
    <button class="remove">+</button>
  </div>
</div>
<div class="bottom">
 
 
  <div class="category">Waffle</div>
  <div class="name"> Waffle with Berries</div>
  <div class="price">$6.50</div>
</div>


</div>`;

    parentEl.append(newEl);
   
  });


 