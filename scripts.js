var lastScrollTop = 0;
let vheight = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

let above = document.querySelector(".above");
let below = document.querySelector(".below");
let aboveHeading = document.querySelector(".above__heading");
let aboveProduct = document.querySelectorAll(".above__product");
let aboveProductUnderlay = document.querySelector(".above__product--underlay");
let aboveProductOverlay = document.querySelector(".above__product--overlay");

let secondInner = document.querySelector(".second__inner");
let thirdInner = document.querySelector(".third__inner");
let fourthInner = document.querySelector(".fourth__inner");
let fifthInner = document.querySelector(".fifth__inner");
let sixthInner = document.querySelector(".sixth__inner");
let seventhInner = document.querySelector(".seventh__inner");

let eventAllowed = true;
let currentPage = 1;
let maxPage = 7;
let direction = "";

function scrollPage(event) {
  direction = event.deltaY < 0 ? "up" : "down";
  if(currentPage >= 1 && currentPage <= 7) {
    if(direction == "up") {
      currentPage -= 1;
      if(currentPage == 0) {
        currentPage = 1;
      }
    } else { 
      currentPage += 1;
      if(currentPage == 8) {
        currentPage = 7;
      }
    }

    let allPages = document.querySelectorAll("section");
    allPages.forEach(function(page) {
      page.classList.remove("active");
    });
    let activePage = document.getElementById(currentPage);
    activePage.classList.add("active");

    if(currentPage >= 5) {
      aboveProduct.forEach(function(product) {
        product.classList.add("rotate");
      })
    } else {
      aboveProduct.forEach(function(product) {
        product.classList.remove("rotate");
      })
    }

    if(currentPage === 5) {
      aboveProductOverlay.classList.add("product--active");
      aboveProductUnderlay.classList.add("product--active");
    } else {
      aboveProductOverlay.classList.remove("product--active");
      aboveProductUnderlay.classList.remove("product--active");
    }

    window.removeEventListener("wheel", scrollPage);
    setTimeout(function() {
      window.addEventListener("wheel", scrollPage);
    }, 1000);
  }
}

window.addEventListener("wheel", scrollPage);