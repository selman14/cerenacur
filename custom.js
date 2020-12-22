var yukari = document.getElementsByClassName("yukari_cik")[0];
// console.log(yukari);

// console.log(window);

window.addEventListener("scroll", function () {
  const mesafe = window.scrollY; //Yukarıdan olan uzaklığı verir.
  //   console.log(mesafe);
  if (mesafe >4) {
    yukari.classList.add("goster");
  } else {
    yukari.classList.remove("goster");
  }
});

yukari.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

yukari.addEventListener("mousemove", function () {
  yukari.innerHTML = "&uArr;";
});
yukari.addEventListener("mouseout", function () {
  yukari.innerHTML = "Yukarı";
});
