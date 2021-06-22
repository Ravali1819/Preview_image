var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

//Creating Elements
var page = document.createElement("div");
document.body.appendChild(page);
page.classList = "page";

var section = document.createElement("div");
page.appendChild(section);
section.classList = "section";

var left_section = document.createElement("div");
section.appendChild(left_section);
left_section.classList = "left_section";

var right_section = document.createElement("div");
section.appendChild(right_section);
right_section.classList = "right_section";

var left_section_img = document.createElement("img");
left_section.appendChild(left_section_img);
left_section_img.classList = "left_section_img";

var right_section_full_desc = document.createElement("div");
right_section.appendChild(right_section_full_desc);
right_section_full_desc.classList = "right_section_full_desc";

var right_section_h1 = document.createElement("h1");
right_section_full_desc.appendChild(right_section_h1);
right_section_h1.classList = "right_section_h1";

var right_section_h3 = document.createElement("h3");
right_section_full_desc.appendChild(right_section_h3);
right_section_h3.classList = "right_section_h3";

var right_section_h4 = document.createElement("h4");
right_section_full_desc.appendChild(right_section_h4);
right_section_h4.classList = "right_section_h4";
right_section_h4.innerHTML = "Price: Rs ";

var right_section_h4_span = document.createElement("span");
right_section_h4.appendChild(right_section_h4_span);
right_section_h4_span.classList = "right_section_h4_span";
right_section_h4_span.innerHTML = "2599";

var right_section_desc_h5 = document.createElement("h5");
right_section_full_desc.appendChild(right_section_desc_h5);
right_section_desc_h5.classList = "right_section_desc_h5";

var right_desc_para = document.createElement("p");
right_section_full_desc.appendChild(right_desc_para);
right_desc_para.classList = "right_desc_para";

var right_product_preview = document.createElement("h3");
right_section_full_desc.appendChild(right_product_preview);
right_product_preview.classList = "right_product_preview";

var right_preview_images = document.createElement("div");
right_section_full_desc.appendChild(right_preview_images);
right_preview_images.classList = "right_preview_images";

//creating images and adding functionality

function removeClass(image, images) {
  for (x of images) {
    console.log(x);
    x.classList.remove("active");
  }
  image.classList.add("active");
}

var img1 = document.createElement("img");
right_preview_images.appendChild(img1);
img1.src = productData.photos[0];
img1.classList = `preview_images preview_img`;
img1.classList.add("active");

img1.addEventListener("click", function () {
  left_section_img.src = img1.src;
  img1.classList.add("active");
  removeClass(img1, images);
});

var img2 = document.createElement("img");
right_preview_images.appendChild(img2);
img2.src = productData.photos[1];
img2.classList = `preview_images preview_img`;

img2.addEventListener("click", function () {
  left_section_img.src = img2.src;
  removeClass(img2, images);
});

var img3 = document.createElement("img");
right_preview_images.appendChild(img3);
img3.src = productData.photos[2];
img3.classList = `preview_images preview_img`;

img3.addEventListener("click", function () {
  left_section_img.src = img3.src;
  removeClass(img3, images);
});

var img4 = document.createElement("img");
right_preview_images.appendChild(img4);
img4.src = productData.photos[3];
img4.classList = `preview_images preview_img`;

img4.addEventListener("click", function () {
  left_section_img.src = img4.src;
  removeClass(img4, images);
});

var img5 = document.createElement("img");
right_preview_images.appendChild(img5);
img5.src = productData.photos[4];
img5.classList = `preview_images preview_img`;

img5.addEventListener("click", function () {
  left_section_img.src = img5.src;
  removeClass(img5, images);
});

var img6 = document.createElement("img");
right_preview_images.appendChild(img6);
img6.src = undefined;
img6.classList = `preview_images preview_img`;

img6.addEventListener("click", function () {
  left_section_img.src = img6.src;
  removeClass(img6, images);
});

left_section_img.src = productData.preview;

right_section_h1.innerHTML = "Men Navy Blue Solid Sweatshirt";
right_section_h3.innerHTML = "United Colors of Benetton";
right_section_desc_h5.innerHTML = "Description";
right_desc_para.innerHTML =
  "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
right_product_preview.innerHTML = "Product Preview";

var images = [img1, img2, img3, img4, img5, img6];
