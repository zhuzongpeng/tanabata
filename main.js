/*
 * @Author: cola
 * @Date: 2022-08-03 23:48:58
 * @LastEditors: cola
 * @Description:
 */
const love = document.querySelector(".rectangle-love");
const wrapper = document.querySelector(".rectangle-wrapper");
const close = document.querySelector(".close");
function parseQueryString(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
  return (false)
}
const nameDom = document.querySelector('#name')
const name = parseQueryString('name') || 'Su'
nameDom.innerHTML = name
love.addEventListener("click", () => {
  if (wrapper.classList.contains("animation")) {
    wrapper.classList.remove("animation");
  } else {
    wrapper.classList.add("animation");
  }
});
close.addEventListener("click", () => {
  wrapper.classList.remove("animation");
});
