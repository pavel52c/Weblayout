window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active');
  })

  document.querySelectorAll('text').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.target.classList.toggle('alert');
    })
  })
})
