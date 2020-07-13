class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer.addEventListener("click", event => {
      if (event.target.closest(".tab")) {
        const index = event.target.closest(".tab").dataset.value;
        this.openTab(index);
      }
    });
  }

  openTab(index) {
    this.buttonsContainer.querySelector(".tab_active").classList.remove("tab_active");
    this.buttonsContainer.querySelector(`.tab--${index}`).classList.add("tab_active");
    this.tabs.querySelector(".tabContent_active").classList.remove("tabContent_active");
    this.tabs.querySelector(`.tabContent--${index}`).classList.add("tabContent_active");
  }
}

function playVideo() {
  const myVideo = document.querySelector(".banner__videoBg");

  myVideo.play();
}

document.addEventListener("DOMContentLoaded", () => {
  console.log('domLoaded');
  const preloader = document.querySelector(".preloader1");
  console.log('preloader', preloader);
  if (
    navigator.userAgent.indexOf("Safari") !== -1 &&
    navigator.userAgent.indexOf("Chrome") === -1
  ) {
    // preloader.classList.add("preloader_hidden");

    preloader.style.display = "none";
    playVideo();
    AOS.init();
  } else {
    console.log('animations');
    const animation = bodymovin.loadAnimation({
      container: document.getElementById("bm"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "../data.json",
      rendererSettings: {
        context: 'canvasContext', // the canvas context
        preserveAspectRatio: 'test', // Supports the same options as the svg element's preserveAspectRatio property
        clearCanvas: false,
        progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        hideOnTransparent: true, //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
        className: 'some-css-class-name',
        id: 'some-id'
      }
    });

    animation.addEventListener("complete", () => {
      preloader.classList.add("preloader_hidden");
      animation.destroy();
      preloader.style.display = "none";
      playVideo();
      AOS.init();
    });
  }

  let header = document.querySelector(".header");
  let sticky = header.offsetTop;
  const servicesTabsContainer = document.querySelector(".services__tabs");
  const servicesTabs = document.querySelector(".services__tabsContentWrap");
  const casesTabsContainer = document.querySelector(".cases__tabs");
  const casesTabs = document.querySelector(".cases__tabsContentWrap");
  let inputs = document.querySelectorAll(".contact__fileInput");
  const fileInput = document.querySelector(".contact__fileInput");
  const deleteFileButton = document.querySelector(".contact__deleteFileBtn");
  const menuButton = document.querySelector(".header__burgerBtn");
  const closeButton = document.querySelector(".mobileMenu__closeBtn");
  const mobileMenu = document.querySelector(".mobileMenu");
  const form = document.getElementById("contactUs");
  const successCloseButton = document.querySelector(".successSend__closeBtn");
  const successSendMessage = document.querySelector(".successSend");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value || "";
    const email = document.querySelector("#email").value || "";
    const comment = document.querySelector("#comment").value || "";

    // const formData = new FormData()
    const formData = JSON.stringify({
      comment,
      email,
      name
    });

    try {
      const res = await fetch("https://remarkable.technology/api/mail/send", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log({ res });

      if (res.ok) {
        successSendMessage.classList.add("successSend_show");
        form.reset();
      }
    } catch (error) {
      console.log({ error });
    }
  });

  successCloseButton.addEventListener("click", function(e) {
    successSendMessage.classList.remove("successSend_show");
  });

  menuButton.addEventListener("click", function(e) {
    if (mobileMenu.classList.contains("mobileMenu_active")) {
      mobileMenu.classList.remove("mobileMenu_active");
    } else {
      mobileMenu.classList.add("mobileMenu_active");
    }
  });

  closeButton.addEventListener("click", function(e) {
    mobileMenu.classList.remove("mobileMenu_active");
  });

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header_sticky");
    } else {
      header.classList.remove("header_sticky");
    }
  }

  window.onscroll = function() {
    myFunction();
  };

  const clientsSlider = new Glide(document.querySelector(".clients__carousel"), {
    type: "carousel",
    perView: 4,
    breakpoints: {
      1440: {
        perView: 3
      },
      // 1024: {
      //   perView: 2
      // },
      767: {
        perView: 1
      }
    }
  });

  const clientsSliderLeftBtn = document.querySelector(".clients__navBtn_left");
  const clientsSliderRightBtn = document.querySelector(".clients__navBtn_right");

  clientsSlider.mount();

  clientsSliderLeftBtn.addEventListener("click", function(e) {
    clientsSlider.go("<");
  });

  clientsSliderRightBtn.addEventListener("click", function(e) {
    clientsSlider.go(">");
  });

  const carousels = document.querySelectorAll(".cases__carousel");

  Object.values(carousels).map(carousel => {
    const slider = new Glide(carousel, {
      type: "carousel"
    });
    slider.mount();

    const sliderRef = carousel.nextElementSibling;

    const webDevSliderLeft = sliderRef.querySelector(".cases__navBtn_left");
    const webDevSliderRight = sliderRef.querySelector(".cases__navBtn_right");
    const webDevSliderNav = sliderRef.querySelector(".cases__navItems");
    const webDevSliderNavItems = sliderRef.querySelectorAll(".cases__navItem");

    webDevSliderNav.addEventListener("click", function(e) {
      let index;

      if (e.target.closest(".cases__navItem")) {
        index = Number(e.target.closest(".cases__navItem").dataset.navIndex);
        webDevSliderNav
          .querySelector(".cases__navItem_active")
          .classList.remove("cases__navItem_active");
        e.target.closest(".cases__navItem").classList.add("cases__navItem_active");
        slider.go(`=${index}`);
      }
    });

    webDevSliderLeft.addEventListener("click", function(e) {
      slider.go("<");
      webDevSliderNav
        .querySelector(".cases__navItem_active")
        .classList.remove("cases__navItem_active");
      webDevSliderNavItems[slider.index].classList.add("cases__navItem_active");
    });

    webDevSliderRight.addEventListener("click", function(e) {
      slider.go(">");
      webDevSliderNav
        .querySelector(".cases__navItem_active")
        .classList.remove("cases__navItem_active");
      webDevSliderNavItems[slider.index].classList.add("cases__navItem_active");
    });

    slider.on("swipe.end", () => {
      webDevSliderNav
        .querySelector(".cases__navItem_active")
        .classList.remove("cases__navItem_active");
      webDevSliderNavItems[slider.index].classList.add("cases__navItem_active");
    });

    window.addEventListener("resize", () => {
      // console.log("resize");
      slider.update();
    });
  });

  new TabList(servicesTabsContainer, servicesTabs);
  new TabList(casesTabsContainer, casesTabs);

  const setActive = (el, active) => {
    const formField = el.parentNode;
    if (active) {
      formField.classList.add(`${formField.classList[0]}_active`);
    } else {
      formField.classList.remove(`${formField.classList[0]}_active`);
      el.value === ""
        ? formField.classList.remove(`${formField.classList[0]}_isFilled`)
        : formField.classList.add(`${formField.classList[0]}_isFilled`);
    }
  };

  [].forEach.call(
    document.querySelectorAll(".contact__input, .contact__textarea"),
    el => {
      el.onblur = () => {
        setActive(el, false);
      };
      el.onfocus = () => {
        setActive(el, true);
      };
    }
  );

  Array.prototype.forEach.call(inputs, function(input) {
    let label = input.nextElementSibling,
      fileNameLabel = input.nextElementSibling.nextElementSibling,
      labelVal = fileNameLabel.innerHTML;
    inputWrap = input.parentNode;

    input.addEventListener("change", function(e) {
      let fileName = "";

      fileName = e.target.value.split("\\").pop();

      if (fileName) {
        inputWrap.classList.add("contact__inputZone_hasFile");
        fileNameLabel.innerHTML = fileName;
      }
    });

    deleteFileButton.addEventListener("click", function(e) {
      input.value = "";
      inputWrap.classList.remove("contact__inputZone_hasFile");
      fileNameLabel.innerHTML = "";
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });

      if (mobileMenu.classList.contains("mobileMenu_active")) {
        mobileMenu.classList.remove("mobileMenu_active");
      }
    });
  });
});
