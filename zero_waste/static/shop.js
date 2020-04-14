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
    url: `/api/haircare?page=${pageNo}`,
    type: "GET",
    data: {},
    success: function (response) {
      // if (pageNo === 1) {
      //   $("#products-area").empty();
      // }

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
    url: `/api/home?page=${pageNo}`,
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

// function getAll() {
//   $.ajax({
//     url: "/api/all?page=${pageNo}",
//     type: "GET",
//     data: {},
//     success: function (response) {
//       if (pageNo === 1) {
//         $("#products-area").empty();
//       }
//       for (let i = 0; i < response.length; i++) {
//         let title = response[i]["title"];
//         let image = response[i]["img_src"].replace("50x50", "300x300");
//         let price = response[i]["price"];
//         let img_url = response[i]["img_url"];

//         let html = `
//         <a href="${img_url}"><div class="product">
//                 <img src="${image}">
//                 <div class="title">${title}</div>
//                 <div class="price">${price}</div>
//                 <div class="shop">seller: Zero waste store</div>
//             </div></a>
//           `;

//         $("#products-area").append(html);
//       }
//     },
//   });
// }
