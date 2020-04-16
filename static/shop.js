let pageNo = 1;

function arrival() {
  $.ajax({
    url: "/api/new",
    type: "GET",
    data: {},
    success: function (response) {
      for (let i = 0; i < response.length; i++) {
        let main_title = response[i]["main_title"];
        let main_image = response[i]["main_img_src"].replace(
          "50x50",
          "230x230"
        );
        let main_price = response[i]["main_price"];
        let main_img_url = response[i]["main_img_url"];

        let main_html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${main_img_url}">
           <img class="image" src="${main_image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${main_title}</div>
            <div class="price">${main_price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(main_html);
      }
    },
  });
}

function getCleaning() {
  $.ajax({
    url: `/api/cleaning?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];
        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getHaircare() {
  $.ajax({
    url: `/api/haircare?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getHome() {
  $.ajax({
    url: `/api/home?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getKitchen() {
  $.ajax({
    url: `/api/kitchen?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getMakeup() {
  $.ajax({
    url: `/api/makeup?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getKids() {
  $.ajax({
    url: `/api/kids?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getOral() {
  $.ajax({
    url: `/api/oral?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getPersonal() {
  $.ajax({
    url: `/api/personal?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getTravel() {
  $.ajax({
    url: `/api/travel?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getSkincare() {
  $.ajax({
    url: `/api/skincare?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function getOthers() {
  $.ajax({
    url: `/api/others?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "230x230");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <div class="product">
          <a href ="#" class="like"><i class="far fa-heart"></i></a>
         <a class="link" href="${img_url}">
           <img class="image" src="${image}">
           <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
         <div class="description">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
           <div class="shop">Seller: Zero waste store</div>
          </div>
        </div>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

$(document).on("click", ".like", function wishclick() {
  $(this).children().addClass("fas");
  $(this).css("color", "#f4dd53");
  let image_url = $(this).siblings("a").attr("href");
  let image_src = $(this).siblings("a").children("img").attr("src");
  let title = $(this).siblings("div").children(".title").text();
  let price = $(this).siblings("div").children(".price").text();
  let wishList = [];
  let wishItem = $(this).parent().clone().wrapAll("<div/>").parent().html();
  //클릭한 .product html태그

  localStorage.setItem("wishList", wishItem);
  localStorage.setItem("wishList", wishItem);
  localStorage.setItem("wishList", wishItem);

  // $.ajax({
  //   url: "/api/like",
  //   type: "POST",
  //   data: {
  //     title_give: title,
  //     price_give: price,
  //     image_url_give: image_url,
  //     image_src_give: image_src,
  //   },
  //   success: function () {
  //     addLocalStorage(), getLocalStorage();
  //   },
  // });
});

function getWish() {
  $.ajax({
    url: `/api/wish?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let price = response[i]["price"];
        let img_url = response[i]["image_url"];
        let img_src = response[i]["image_src"];

        let html = `
      <div class="product">
        <a href ="#" class="like"><i class="far fa-heart"></i></a>
       <a class="link" href="${img_url}">
         <img class="image" src="${img_src}">
         <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
       <div class="description">
          <div class="title">${title}</div>
          <div class="price">${price}</div>
         <div class="shop">Seller: Zero waste store</div>
        </div>
      </div>
  `;
        $("#products-area").append(html);
      }
    },
  });
}
