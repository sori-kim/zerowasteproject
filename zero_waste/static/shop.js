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
           
          </div>
        </div>
    `;
        $("#products-area").append(main_html);
      }
    },
  });
}

function getProduct() {
  const currentCategory = $("#category_list").attr("current_category") || "all";
  $.ajax({
    url: `/api/product?page=${pageNo}&category=${currentCategory}`,
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }

      let localStorageWish = localStorage.getItem("wish");
      let wish = JSON.parse(localStorageWish) || [];

      response.forEach(function (item) {
        let title = item["title"];
        let image = item["img_src"].replace("50x50", "230x230");
        let price = item["price"];
        let img_url = item["img_url"];

        let hasWish = false;
        if (wish.filter((w) => w.includes(`title="${title}"`)).length > 0) {
          hasWish = true;
        }

        let html = `
            <div class="product" title="${title}">
              <a href ="#" class="like"><i class="far fa-heart ${
                hasWish ? "fas" : ""
              }"></i></a>
              <a class="link" href="${img_url}">
                <img class="image" src="${image}">
                <div class="after"><i class="fas fa-sign-in-alt"></i></div></a>
              <div class="description">
                <div class="title">${title}</div>
                <div class="price">${price}</div>
              
              </div>
            </div>
        `;

        $("#products-area").append(html);
      });
    },
  });
}

$(document).on("click", ".like", function wishclick() {
  const product = $(this).closest(".product");
  const html = product.html();
  const title = product.attr("title");

  if ($(this).find(".fa-heart").hasClass("fas")) {
    deleteWish(title);
    $(this).children().removeClass("fas");
    $(this).css("color", "#fff");
  } else {
    $(this).children().addClass("fas");
    $(this).css("color", "#f4dd53");

    if (html) {
      let wishItem = `
        <div class="product" title="${title}">
          ${html}
        </div>
      `;

      let localStorageWish = localStorage.getItem("wish");
      let wish = JSON.parse(localStorageWish) || [];

      if (
        wish &&
        wish.filter((w) => w.includes(`title="${title}"`)).length === 0
      ) {
        wish.push(wishItem);
        localStorage.setItem("wish", JSON.stringify(wish));
      }
    }
  }
});

function getWish() {
  let localStorageWish = localStorage.getItem("wish");
  let wish = JSON.parse(localStorageWish) || [];

  wish.forEach(function (item) {
    if (item.length > 0) {
      const newItem = item.replace(
        '<i class="far fa-heart "',
        '<i class="far fa-heart fas"'
      );
      $("#products-area").append(newItem);
    }
  });
}

function deleteWish(title) {
  let localStorageWish = localStorage.getItem("wish");
  let wish = JSON.parse(localStorageWish) || [];

  const isWish = $("#products-area").attr("isWish") === "true";

  let newWish = wish.filter((w) => !w.includes(`title="${title}"`));
  localStorage.setItem("wish", JSON.stringify(newWish));

  if (isWish) {
    $("#products-area").empty();
    newWish.forEach(function (item) {
      if (item.length > 0) {
        const newItem = item.replace(
          '<i class="far fa-heart "',
          '<i class="far fa-heart fas"'
        );
        $("#products-area").append(newItem);
      }
    });
  }
}
