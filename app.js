
let body ="";

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data=>{
  data.forEach(element => {

    
  
    body += `<div class="col">
        <div class="card shadow-sm">
          <img id="image" src="${element.image}" alt="">
          <div class="card-body">
          <h5 class="card-text">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-success">BUY</button>
                <button type="button" class="btn btn-warning">ADD TO CART</button>
              </div>
              <small class="text-body-secondary">${element.price}$</small>
             </div>
            </div>
          </div>
        </div> `;

      
});

document.getElementById("row").innerHTML = body;


})




