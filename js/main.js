window.onload = () => {
    let header = document.querySelector(".header");
    let searchOpen = header.querySelector(".search__btn-open");
    let searchClose = header.querySelector(".search__btn-close");
    let searchBox = header.querySelector(".search__box");
  
    //헤더 스크롤
    window.addEventListener("scroll", () => {
      let scrollBar = window.scrollY;
      if (scrollBar > 0) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }); //scroll
}