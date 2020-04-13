let pageNo = 1;

$(document).ready(function () {
  arrival(), getAll(), getCleaning(), getHaircare();
});

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
          "300x300"
        );
        let main_price = response[i]["main_price"];
        let main_img_url = response[i]["main_img_url"];

        let main_html = `
        <div class="product">
        <a href="${main_img_url}">
        <img src="${main_image}"></a>
        <div class="title">${main_title}</div>
        <div class="price">${main_price}</div>
        <div class="shop">Seller: Zero waste store</div>
        </div>
          `;
        $("#products-area").append(main_html);
        $(document)
          .on("mouseover", "img", function (e) {
            $(this).css("opacity", "0.3");
          })
          .on("mouseleave", "img", function (e) {
            $(this).css("opacity", "1");
          });
        $(".title").css("font-weight", "700");
      }
    },
  });
}

function getAll() {
  $.ajax({
    url: "/api/all?page=${pageNo}",
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }
      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "300x300");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <a href="${img_url}"><div class="product">
                <img src="${image}">
                <div class="title">${title}</div>
                <div class="price">${price}</div>
                <div class="shop">seller: Zero waste store</div>
            </div></a>
          `;

        $("#products-area").append(html);
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
        let image = response[i]["img_src"].replace("50x50", "300x300");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <a href="${img_url}"><div class="product">
                <img src="${image}">
                <div class="title">${title}</div>
                <div class="price">${price}</div>
                <div class="shop">seller: Zero waste store</div>
            </div></a>
          `;

        $("#products-area").append(html);
      }
    },
  });
}

function getHaircare() {
  $.ajax({
    url: "/api/haircare",
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }

      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "300x300");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
        <a href="${img_url}"><div class="product">
            <img src="${image}">
            <div class="title">${title}</div>
            <div class="price">${price}</div>
            <div class="shop">seller: Zero waste store</div>
        </div></a>
  `;
        $("#products-area").append(html);
      }
    },
  });
}

function getHome() {
  $.ajax({
    url: "/api/home",
    type: "GET",
    data: {},
    success: function (response) {
      if (pageNo === 1) {
        $("#products-area").empty();
      }

      for (let i = 0; i < response.length; i++) {
        let title = response[i]["title"];
        let image = response[i]["img_src"].replace("50x50", "300x300");
        let price = response[i]["price"];
        let img_url = response[i]["img_url"];

        let html = `
          <a href="${img_url}"><div class="product">
              <img src="${image}">
              <div class="title">${title}</div>
              <div class="price">${price}</div>
              <div class="shop">seller: Zero waste store</div>
          </div></a>
    `;
        $("#products-area").append(html);
      }
    },
  });
}

function loadMore() {
  pageNo += 1;
  getCleaning(), getHaircare(), getHome();
}
