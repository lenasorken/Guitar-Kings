const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productContainer = document.querySelector(".product-spesific");

const product = products.find(({ id }) => id == productId);

productContainer.innerHTML = `<section>
<img src="${product.image}" alt="${product.name}" class"product-image" />
<div class="product-image_thumbnails">
  <div>
    <img src="../images/product-specific.jpg" alt="Playing the Adirondack Red" class="product-image" />
  </div>
  <div>
    <img src="../images/product-specific.jpg" alt="Playing the Adirondack Red" class="product-image" />
  </div>
  <div>
    <img src="../images/product-specific.jpg" alt="Playing the Adirondack Red" class="product-image" />
  </div>
  <div>
    <img src="../images/product-specific.jpg" alt="Playing the Adirondack Red" class="product-image" />
  </div>
</div>
</section>
<section class="product-specific_details">
<h1>${product.name}</h1>
${product.description}
<p class="product-specific_price">${product.price}</p>
<a href="../product/contact.html" class="cta cta-large">Contact Us</a>
</section>`