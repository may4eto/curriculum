const skillProgressBars = document.querySelectorAll(
  ".progress-s .progress-bar"
);

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

function setAttributes(el, options) {
  Object.keys(options).forEach(function (attr) {
    el.setAttribute(attr, options[attr]);
  });
}

if (viewportWidth <= 768) {
  Array.from(skillProgressBars).forEach((progressBar) =>
    setAttributes(progressBar, {
      "data-aos": "fade-right",
      "data-aos-delay": "300",
      "data-aos-duration": "600",
    })
  );
}
