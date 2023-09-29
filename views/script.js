gsap.registerPlugin(ScrollTrigger, Observer, CustomEase);

var init = () => {
  //navbar button animation (book a demo) :=================
  var nav_txt = document.querySelector("#nav>.nav_but>.but1>div");
  var nav_butt = document.querySelector("#nav>.nav_but>.but1");

  nav_butt.addEventListener("mouseenter", function (e) {
    gsap.to(nav_txt, {
      y: 20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(nav_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(nav_txt, {
      y: -30,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(nav_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "rgb(7, 64, 219)",
      ease: Expo.easeInOut,
    });
  });

  nav_butt.addEventListener("mouseleave", function (e) {
    gsap.to(nav_txt, {
      y: -20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(nav_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(nav_txt, {
      y: 20,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(nav_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "white",
      ease: Expo.easeInOut,
    });
  });

  //sidebar cross section :===================================
  var iii = 0;
  var page1_but = document.querySelector("#nav>.nav_but>.but2");
  var sidebar = document.querySelector("#sidebar");
  var main = document.querySelector("#main");

  var page = document.querySelector("#main");

  function disable() {
    var TopScroll = document.documentElement.scrollTop;
    var LeftScroll = document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    };
  }
  function enable() {
    window.onscroll = function () {};
  }

  page.addEventListener("click", function (e) {
    if (iii % 2 == 1) {
      page1_but.style.setProperty("--page1_but_before", "rotateZ(0deg)");
      page1_but.style.setProperty("--page1_but_after", "rotateZ(0deg)");
      gsap.to(sidebar, {
        x: "0%",
        duration: 0.5,
      });
      gsap.to(sidebar, {
        display: "none",
        duration: 0,
        delay: 0.5,
      });
      gsap.to(main, {
        filter: "none",
        duration: 0.5,
        height: "100%",
        //onUpdate: enable(),
        overflow: "visible",
      });
      gsap.to(["#nav>.nav_but>.but2", "#nav>.nav_but>button"], {
        backgroundColor: "transparent",
        duration: 0.5,
      });
      iii++;
    }
  });
  page1_but.addEventListener("click", function (e) {
    if (iii % 2 == 0) {
      page1_but.style.setProperty("--page1_but_before", "rotateZ(27deg)");
      page1_but.style.setProperty("--page1_but_after", "rotateZ(-27deg)");
      gsap.to(sidebar, {
        display: "initial",
        duration: 0,
      });
      gsap.to(sidebar, {
        x: "-94%",
        duration: 0.5,
      });
      gsap.to(main, {
        filter: "blur(5px)",
        duration: 0.5,
        height: "106vh",
        //onUpdate: disable(),
        overflow: "hidden",
      });
      gsap.to(["#nav>.nav_but>.but2", "#nav>.nav_but>button"], {
        backgroundColor: "#0a3cce",
        duration: 0.5,
      });
      iii++;
    } else {
      page1_but.style.setProperty("--page1_but_before", "rotateZ(0deg)");
      page1_but.style.setProperty("--page1_but_after", "rotateZ(0deg)");
      gsap.to(sidebar, {
        x: "0%",
        duration: 0.5,
      });
      gsap.to(sidebar, {
        display: "none",
        duration: 0,
        delay: 0.5,
      });
      gsap.to(main, {
        filter: "none",
        duration: 0.5,
        height: "100%",
        //onUpdate: enable(),
        overflow: "visible",
      });
      gsap.to(["#nav>.nav_but>.but2", "#nav>.nav_but>button"], {
        backgroundColor: "transparent",
        duration: 0.5,
      });
      iii++;
    }
  });

  //sidebar content hover animation:=======================================
  document
    .querySelector(".sidebar_link1>a")
    .addEventListener("mouseenter", (e) => {
      gsap.to(".sidebar_link1>a", {
        color: "rgb(8, 69, 230)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link1>a")
    .addEventListener("mouseleave", (e) => {
      gsap.to(".sidebar_link1>a", {
        color: "rgb(0,0,0)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link5>a")
    .addEventListener("mouseenter", (e) => {
      gsap.to(".sidebar_link5>a", {
        color: "rgb(8, 69, 230)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link5>a")
    .addEventListener("mouseleave", (e) => {
      gsap.to(".sidebar_link5>a", {
        color: "rgb(0,0,0)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link2>a")
    .addEventListener("mouseenter", (e) => {
      gsap.to(".sidebar_link2>a", {
        color: "rgb(8, 69, 230)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link2>a")
    .addEventListener("mouseleave", (e) => {
      gsap.to(".sidebar_link2>a", {
        color: "rgb(0,0,0)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link3>a")
    .addEventListener("mouseenter", (e) => {
      gsap.to(".sidebar_link3>a", {
        color: "rgb(8, 69, 230)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link3>a")
    .addEventListener("mouseleave", (e) => {
      gsap.to(".sidebar_link3>a", {
        color: "rgb(0,0,0)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link4>a")
    .addEventListener("mouseenter", (e) => {
      gsap.to(".sidebar_link4>a", {
        color: "rgb(8, 69, 230)",
        duration: 0.3,
      });
    });
  document
    .querySelector(".sidebar_link4>a")
    .addEventListener("mouseleave", (e) => {
      gsap.to(".sidebar_link4>a", {
        color: "rgb(0,0,0)",
        duration: 0.3,
      });
    });

  //page1 button animation ===================================

  var page1_txt = document.querySelector("#page1>div>div>div>button>div");
  var page1_butt = document.querySelector("#page1>div>div>div>button");
  page1_butt.addEventListener("mouseenter", function (e) {
    gsap.to(page1_txt, {
      y: 20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(page1_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page1_txt, {
      y: -30,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page1_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "white",
      ease: Expo.easeInOut,
    });
  });

  page1_butt.addEventListener("mouseleave", function (e) {
    gsap.to(page1_txt, {
      y: -20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(page1_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page1_txt, {
      y: 20,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page1_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "rgb(9, 67, 227)",
      ease: Expo.easeInOut,
    });
  });

  // page2 animation(textSplit): ==========================================
  var clutter = "";
  document
    .querySelector("#page2>h1")
    .textContent.split(" ")
    .forEach(function (text) {
      clutter += `<span> ${text} </span>`;
      document.querySelector("#page2>h1").innerHTML = clutter;
    });

  gsap.to("#page2>h1>span", {
    scrollTrigger: {
      trigger: "#page2>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.5,
      //markers: true,
    },
    stagger: 0.2,
    opacity: 1,
  });

  //page3 canvas animation:===========================================
  function canvas_3rd_page() {
    const canvas = document.querySelector("#page3>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `
 ./pics/frames00007.png
 ./pics/frames00010.png
 ./pics/frames00013.png
 ./pics/frames00016.png
 ./pics/frames00019.png
 ./pics/frames00022.png
 ./pics/frames00025.png
 ./pics/frames00028.png
 ./pics/frames00031.png
 ./pics/frames00034.png
 ./pics/frames00037.png
 ./pics/frames00040.png
 ./pics/frames00043.png
 ./pics/frames00046.png
 ./pics/frames00049.png
 ./pics/frames00052.png
 ./pics/frames00055.png
 ./pics/frames00058.png
 ./pics/frames00061.png
 ./pics/frames00064.png
 ./pics/frames00067.png
 ./pics/frames00070.png
 ./pics/frames00073.png
 ./pics/frames00076.png
 ./pics/frames00079.png
 ./pics/frames00082.png
 ./pics/frames00085.png
 ./pics/frames00088.png
 ./pics/frames00091.png
 ./pics/frames00094.png
 ./pics/frames00097.png
 ./pics/frames00100.png
 ./pics/frames00103.png
 ./pics/frames00106.png
 ./pics/frames00109.png
 ./pics/frames00112.png
 ./pics/frames00115.png
 ./pics/frames00118.png
 ./pics/frames00121.png
 ./pics/frames00124.png
 ./pics/frames00127.png
 ./pics/frames00130.png
 ./pics/frames00133.png
 ./pics/frames00136.png
 ./pics/frames00139.png
 ./pics/frames00142.png
 ./pics/frames00145.png
 ./pics/frames00148.png
 ./pics/frames00151.png
 ./pics/frames00154.png
 ./pics/frames00157.png
 ./pics/frames00160.png
 ./pics/frames00163.png
 ./pics/frames00166.png
 ./pics/frames00169.png
 ./pics/frames00172.png
 ./pics/frames00175.png
 ./pics/frames00178.png
 ./pics/frames00181.png
 ./pics/frames00184.png
 ./pics/frames00187.png
 ./pics/frames00190.png
 ./pics/frames00193.png
 ./pics/frames00196.png
 ./pics/frames00199.png
 ./pics/frames00202.png
 `;
      return data.split("\n")[index];
    }

    const frameCount = 67;

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.5,
        trigger: `#page3`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page3",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
    });
  }
  canvas_3rd_page();

  //page4 animation: ==========================================
  var clutter = "";
  document
    .querySelector("#page4>h1")
    .textContent.split(" ")
    .forEach(function (text) {
      clutter += `<span> ${text} </span>`;
      document.querySelector("#page4>h1").innerHTML = clutter;
    });

  gsap.to("#page4>h1>span", {
    scrollTrigger: {
      trigger: "#page4>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.5,
      //  markers: true,
    },
    stagger: 0.2,
    opacity: 1,
  });

  //page5 animation: ================================================
  function canvas_5th_page() {
    const canvas = document.querySelector("#page5>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `
         ./pics/bridges00004.png 
         ./pics/bridges00007.png 
         ./pics/bridges00010.png 
         ./pics/bridges00013.png 
         ./pics/bridges00016.png 
         ./pics/bridges00019.png 
         ./pics/bridges00022.png 
         ./pics/bridges00025.png 
         ./pics/bridges00028.png 
         ./pics/bridges00031.png 
         ./pics/bridges00034.png 
         ./pics/bridges00037.png 
         ./pics/bridges00040.png 
         ./pics/bridges00043.png 
         ./pics/bridges00046.png 
         ./pics/bridges00049.png 
         ./pics/bridges00052.png 
         ./pics/bridges00055.png 
         ./pics/bridges00058.png 
         ./pics/bridges00061.png 
         ./pics/bridges00064.png 
         ./pics/bridges00067.png 
         ./pics/bridges00070.png 
         ./pics/bridges00073.png 
         ./pics/bridges00076.png 
         ./pics/bridges00079.png 
         ./pics/bridges00082.png 
         ./pics/bridges00085.png 
         ./pics/bridges00088.png 
         ./pics/bridges00091.png 
         ./pics/bridges00094.png 
         ./pics/bridges00097.png 
         ./pics/bridges00100.png 
         ./pics/bridges00103.png 
         ./pics/bridges00106.png 
         ./pics/bridges00109.png 
         ./pics/bridges00112.png 
         ./pics/bridges00115.png 
         ./pics/bridges00118.png 
         ./pics/bridges00121.png 
         ./pics/bridges00124.png 
         ./pics/bridges00127.png 
         ./pics/bridges00130.png 
         ./pics/bridges00133.png 
         ./pics/bridges00136.png 
         ./pics/bridges00139.png 
         ./pics/bridges00142.png 
         ./pics/bridges00145.png 
         ./pics/bridges00148.png 
         ./pics/bridges00151.png 
         ./pics/bridges00154.png 
         ./pics/bridges00157.png 
         ./pics/bridges00160.png 
         ./pics/bridges00163.png  
         `;
      return data.split("\n")[index];
    }

    const frameCount = 55; //enter the number of pics passed inside "files func"

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.5,
        trigger: `#page5`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page5",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
    });
  }
  canvas_5th_page();

  //start page 6===================================
  var clutter2 = "";
  document
    .querySelector("#page6>h1")
    .textContent.split(" ")
    .forEach(function (text) {
      clutter2 += `<span> ${text} </span>`;
    });
  document.querySelector("#page6>h1").innerHTML = clutter2;

  gsap.to("#page6>h1>span", {
    scrollTrigger: {
      trigger: "#page6>h1>span",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.5,
      // markers: true,
    },
    stagger: 0.2,
    opacity: 1,
  });
  //end page 6 ==================================

  // page7 circle ===============================
  gsap.to(".page7_cir", {
    scrollTrigger: {
      trigger: ".page7_cir",
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      //pin: true,
      scrub: true,
      scroller: "#main",
    },
    scale: 2.6,
  });
  gsap.to(".page7_cir_inner", {
    scrollTrigger: {
      trigger: ".page7_cir_inner",
      start: "top bottom",
      end: "bottom top",
      // markers: true,
      //pin: true,
      scrub: true,
      scroller: "#main",
    },
    backgroundColor: "#0a3bce91",
  });

  //page7 background animation: =-=============================================
  function canvas_7th_page() {
    const canvas = document.querySelector("#page7>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `
         ./pics/links_p/0001.png
         ./pics/links_p/1.webp
         ./pics/links_p/2.webp
         ./pics/links_p/3.webp
         ./pics/links_p/4.webp
         ./pics/links_p/5.webp
         ./pics/links_p/6.webp
         ./pics/links_p/7.webp
         ./pics/links_p/8.webp
         ./pics/links_p/9.webp
         ./pics/links_p/10.webp
         ./pics/links_p/11.webp
         ./pics/links_p/12.webp
         ./pics/links_p/13.webp
         ./pics/links_p/14.webp
         ./pics/links_p/15.webp
         ./pics/links_p/16.webp
         ./pics/links_p/17.webp
         ./pics/links_p/18.webp
         ./pics/links_p/19.webp
         ./pics/links_p/20.webp
         ./pics/links_p/21.webp
         ./pics/links_p/22.webp
         ./pics/links_p/23.webp
         ./pics/links_p/24.webp
         ./pics/links_p/25.webp
         ./pics/links_p/26.webp
         ./pics/links_p/27.webp
         ./pics/links_p/28.webp
         ./pics/links_p/29.webp
         ./pics/links_p/30.webp
         ./pics/links_p/31.webp
         ./pics/links_p/32.webp
         ./pics/links_p/33.webp
         ./pics/links_p/34.webp
         ./pics/links_p/35.webp
         ./pics/links_p/36.webp
         ./pics/links_p/37.webp
         ./pics/links_p/38.webp
         ./pics/links_p/39.webp
         ./pics/links_p/40.webp
         ./pics/links_p/41.webp
         ./pics/links_p/42.webp
         ./pics/links_p/43.webp
         ./pics/links_p/44.webp
         ./pics/links_p/45.webp
         ./pics/links_p/46.webp
         ./pics/links_p/47.webp
         ./pics/links_p/48.webp
         ./pics/links_p/49.webp
         ./pics/links_p/50.webp
         ./pics/links_p/51.webp
         ./pics/links_p/52.webp
         ./pics/links_p/53.webp
         ./pics/links_p/54.webp
         ./pics/links_p/55.webp
         ./pics/links_p/56.webp
         ./pics/links_p/57.webp
         ./pics/links_p/58.webp
         ./pics/links_p/59.webp
         ./pics/links_p/60.webp
         ./pics/links_p/61.webp
         ./pics/links_p/62.webp
         ./pics/links_p/63.webp
         ./pics/links_p/64.webp
         ./pics/links_p/65.webp
         ./pics/links_p/66.webp
         ./pics/links_p/67.webp
         ./pics/links_p/68.webp
         ./pics/links_p/69.webp
         ./pics/links_p/70.webp
         ./pics/links_p/71.webp
         ./pics/links_p/72.webp
         ./pics/links_p/73.webp
         ./pics/links_p/74.webp
         ./pics/links_p/75.webp
         ./pics/links_p/76.webp
         ./pics/links_p/77.webp
         ./pics/links_p/78.webp
         ./pics/links_p/79.webp
         ./pics/links_p/80.webp
         ./pics/links_p/81.webp
         ./pics/links_p/82.webp
         ./pics/links_p/83.webp
         ./pics/links_p/84.webp
         ./pics/links_p/85.webp
         ./pics/links_p/86.webp
         ./pics/links_p/87.webp
         ./pics/links_p/88.webp
         ./pics/links_p/89.webp
         ./pics/links_p/90.webp
         ./pics/links_p/91.webp
         ./pics/links_p/92.webp
         ./pics/links_p/93.webp
         ./pics/links_p/94.webp
         ./pics/links_p/95.webp
         ./pics/links_p/96.webp
         ./pics/links_p/97.webp
         ./pics/links_p/98.webp
         ./pics/links_p/99.webp
         ./pics/links_p/100.webp
         ./pics/links_p/101.webp
         ./pics/links_p/102.webp
         ./pics/links_p/103.webp
         ./pics/links_p/104.webp
         ./pics/links_p/105.webp
         ./pics/links_p/106.webp
         ./pics/links_p/107.webp
         ./pics/links_p/108.webp
         ./pics/links_p/109.webp
         ./pics/links_p/110.webp
         ./pics/links_p/111.webp
         ./pics/links_p/112.webp
         ./pics/links_p/113.webp
         ./pics/links_p/114.webp
         ./pics/links_p/115.webp
         ./pics/links_p/116.webp
         ./pics/links_p/117.webp
         ./pics/links_p/118.webp
         ./pics/links_p/119.webp
         ./pics/links_p/120.webp
         ./pics/links_p/121.webp
         ./pics/links_p/122.webp
         ./pics/links_p/123.webp
         ./pics/links_p/124.webp
         ./pics/links_p/125.webp
         ./pics/links_p/126.webp
         ./pics/links_p/127.webp
         ./pics/links_p/128.webp
         ./pics/links_p/129.webp
         ./pics/links_p/130.webp
         ./pics/links_p/131.webp
         ./pics/links_p/132.webp
         ./pics/links_p/133.webp
         ./pics/links_p/134.webp
         ./pics/links_p/135.webp
         ./pics/links_p/136.webp
         `;
      return data.split("\n")[index];
    }

    const frameCount = 137; //enter the number of pics passed inside "files func"

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }
    var page7_center_fingerprint = () => {
      gsap.to("#page7>.page7_cir>.page7_cir_inner>img", {
        scrollTrigger: {
          scrub: 0.5,
          trigger: `#page7`,
          start: `top top`,
          end: `150% top`,
          scroller: `#main`,
        },
        opacity: 1,
      });
    };

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.5,
        trigger: `#page7`,
        start: `top top`,
        end: `250% top`,
        scroller: `#main`,
        onEnter: () => {
          page7_center_fingerprint();
        },
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page7",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `250% top`,
    });
  }
  canvas_7th_page();

  //page8 button animation: ============
  var page8_txt = document.querySelector("#page8>div>button>div");
  var page8_butt = document.querySelector("#page8>div>button");
  page8_butt.addEventListener("mouseenter", function (e) {
    gsap.to(page8_txt, {
      y: 20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(page8_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page8_txt, {
      y: -30,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page8_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "white",
      ease: Expo.easeInOut,
    });
  });

  page8_butt.addEventListener("mouseleave", function (e) {
    gsap.to(page8_txt, {
      y: -20,
      duration: 0.4,
      ease: Expo.easeInOut,
    });
    gsap.to(page8_txt, {
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page8_txt, {
      y: 20,
      opacity: 0,
      duration: 0,
      delay: 0.4,
    });
    gsap.to(page8_txt, {
      y: 0,
      opacity: 1,
      duration: 0.2,
      delay: 0.4,
      color: "rgb(9, 67, 227)",
      ease: Expo.easeInOut,
    });
  });
  //page8 text reveal animation:===============
  gsap.to("#page8>.page8_bottom>.page8_txt_anim>h1", {
    scrollTrigger: {
      trigger: "#page8",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      pin: false, // "pin:false" cause "page8 button reveal animation" a "pin:true"
      markers: false,
      scroller: "#main",
    },
    transform: "rotateZ(0deg)",
  });
  //page8 button reveal animation:==============
  gsap.to(".page8_bottom>button", {
    scrollTrigger: {
      trigger: "#page8",
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      pin: true,
      markers: false,
      scroller: "#main",
    },
    transform: "translateY(0px)",
    opacity: 1,
  });

  //page9 animation: =======================================================
  gsap.to("#page9", {
    scrollTrigger: {
      trigger: "#page9",
      start: "top top",
      end: "bottom 70%",
      scrub: 0.5,
      scroller: "#main",
      // markers:true,
    },
    backgroundColor: "rgba(3, 38, 142,1)",
  });

  //page10 animation: =======================================================
  function canvas_10th_page() {
    const canvas = document.querySelector(
      "#page10>.page10>.page10_bottom>.page10_right>canvas"
    );
    const canvas1 = document.querySelector(
      "#page10>.page10>.page10_bottom>.page10_right"
    );
    const context = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    window.addEventListener("resize", function () {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      render();
    });

    function files(index) {
      var data = `
               ./pics/1_1.webp 
               ./pics/2.webp 
               ./pics/3.webp 
               ./pics/4.webp 
               ./pics/5.webp 
               ./pics/6.webp 
               ./pics/7.webp 
               ./pics/8.webp 
               ./pics/9.webp 
               ./pics/10.webp 
               ./pics/11.webp 
               ./pics/12.webp 
               ./pics/13.webp 
               ./pics/14.webp 
               ./pics/15.webp 
               ./pics/16.webp 
               ./pics/17.webp 
               ./pics/18.webp 
               ./pics/19.webp 
               ./pics/20.webp 
               ./pics/21.webp 
               ./pics/22.webp 
               ./pics/23.webp 
               ./pics/24.webp 
               ./pics/25.webp 
               ./pics/26.webp 
               ./pics/27.webp 
               ./pics/28.webp 
               ./pics/29.webp 
               ./pics/30.webp 
               ./pics/31.webp 
               ./pics/32.webp 
               ./pics/33.webp 
               ./pics/34.webp 
               ./pics/35.webp 
               ./pics/36.webp 
               ./pics/37.webp 
               ./pics/38.webp 
               ./pics/39.webp 
               `;
      return data.split("\n")[index];
    }

    const frameCount = 38; //enter the number of pics passed inside "files func"

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.5,
        trigger: `#page10>.page10>.page10_bottom>.page10_right`,
        start: `top 20%`,
        end: `100% bottom`,
        scroller: `#main`,
        // markers:true,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page10>.page10>.page10_bottom>.page10_right",
      pin: true,
      scroller: `#main`,
      start: `top 20%`,
      end: `100% bottom`,
    });
  }
  canvas_10th_page();

  //gsap on page10 txt====>>>================>>====
  gsap.to(".page10_01", {
    color: "rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: ".page10_01",
      start: "top 70%",
      end: "top 40%",
      scroller: "#main",
      scrub: true,
      // markers: true,
      onLeave: () => {
        gsap.to(".page10_01", {
          color: "rgba(255,255,255,0.3)",
          scrollTrigger: {
            trigger: ".page10_01",
            start: "top 15%",
            end: "top 5%",
            scroller: "#main",
            scrub: true,
            // markers: true,
          },
        });
      },
    },
  });
  gsap.to(".page10_02", {
    color: "rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: ".page10_02",
      start: "top 70%",
      end: "top 40%",
      scroller: "#main",
      scrub: true,
      // markers: true,
      onLeave: () => {
        gsap.to(".page10_02", {
          color: "rgba(255,255,255,0.3)",
          scrollTrigger: {
            trigger: ".page10_02",
            start: "top 15%", //that line determine where your canvas stops and start animation
            end: "top 5%", //that line determine where your canvas stops and start animation
            scroller: "#main",
            scrub: true,
            // markers: true,
          },
        });
      },
    },
  });
  gsap.to(".page10_03", {
    color: "rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: ".page10_03",
      start: "top 70%",
      end: "top 40%",
      scroller: "#main",
      scrub: true,
      // markers: true,
      onLeave: () => {
        gsap.to(".page10_03", {
          color: "rgba(255,255,255,0.3)",
          scrollTrigger: {
            trigger: ".page10_03",
            start: "top 15%",
            end: "top 5%",
            scroller: "#main",
            scrub: true,
            // markers: true,
          },
        });
      },
    },
  });
  gsap.to(".page10_04", {
    color: "rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: ".page10_04",
      start: "top 70%",
      end: "top 40%",
      scroller: "#main",
      scrub: true,
      // markers: true,
      onLeave: () => {
        gsap.to(".page10_04", {
          color: "rgba(255,255,255,0.3)",
          scrollTrigger: {
            trigger: ".page10_04",
            start: "top 15%", //that line determine where your canvas stops and start animation
            end: "top 5%", //that line determine where your canvas stops and start animation
            scroller: "#main",
            scrub: true,
            // markers: true,
          },
        });
      },
    },
  });

  //page11 animation ===============>>>==============>>>===========
  //grab and slide ====
  const slider = document.querySelector(".page11_inline");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.computedStyleMap.cursor = "grabbing";
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.computedStyleMap.cursor = "grab";
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.computedStyleMap.cursor = "grab";
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //controls scroll-fast

    gsap.to(slider, {
      duration: 0.3,
      //ease:Power1.easeInOut,
      scrollLeft: scrollLeft - walk,
    });
    //   console.log(walk);
  });

  //page12 company logo animation =================================
  gsap.to("#page12>.page12_bottom", {
    left: 0,
    duration: 30,
    delay: 0,
    repeat: -1,
    ease: Power0.easeNone,
  });

  //page 13 button animation ======================================
  var page13_but = document.querySelector("#page13>button");
  var page13_but_div = document.querySelector("#page13>button>div");

  page13_but.addEventListener("mouseenter", (e) => {
    gsap.to("#page13>button>.t2", {
      top: 0,
      ease: Power4.easeOut,
      duration: 0.6,
    });

    gsap.to(page13_but_div, {
      y: 30,
      ease: Power3.easeInOut,
      duration: 0.3,
    });
    gsap.to(page13_but_div, {
      y: -30,
      duration: 0,
      color: "black",
      delay: 0.3,
    });
    gsap.to(page13_but_div, {
      y: 0,
      duration: 0.3,
      delay: 0.3,
    });
  });
  page13_but.addEventListener("mouseleave", (e) => {
    gsap.to("#page13>button>.t2", {
      top: "100%",
      ease: Power4.easeOut,
      duration: 0.6,
    });

    gsap.to(page13_but_div, {
      y: -30,
      ease: Power3.easeInOut,
      duration: 0.3,
    });
    gsap.to(page13_but_div, {
      y: 30,
      duration: 0,
      color: "white",
      delay: 0.3,
    });
    gsap.to(page13_but_div, {
      y: 0,
      duration: 0.3,
      delay: 0.3,
    });
  });

  //page14 hover animation ===============================
  var twitter = document.querySelector("#page14>.page14_top>.page14_twitter");
  var linkedin = document.querySelector("#page14>.page14_top>.page14_linkedin");
  var instagram = document.querySelector(
    "#page14>.page14_top>.page14_instagram"
  );

  twitter.addEventListener("mouseenter", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_twitter>a>.page14_cont>.page14_effect",
      {
        height: "100%",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
  twitter.addEventListener("mouseleave", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_twitter>a>.page14_cont>.page14_effect",
      {
        height: "0vh",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
  linkedin.addEventListener("mouseenter", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_linkedin>a>.page14_cont>.page14_effect",
      {
        height: "100%",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
  linkedin.addEventListener("mouseleave", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_linkedin>a>.page14_cont>.page14_effect",
      {
        height: "0vh",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
  instagram.addEventListener("mouseenter", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_instagram>a>.page14_cont>.page14_effect",
      {
        height: "100%",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
  instagram.addEventListener("mouseleave", (e) => {
    gsap.to(
      "#page14>.page14_top>.page14_instagram>a>.page14_cont>.page14_effect",
      {
        height: "0vh",
        duration: 0.3,
        //ease: Power4.easeInOut,
      }
    );
  });
};

window.addEventListener("load", () => {
  init();
});
