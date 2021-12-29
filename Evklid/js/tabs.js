document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.work__swipe').forEach((e) => {
    e.addEventListener('click', (e) => {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-item').forEach((e) => {
        e.classList.remove('tabs-item--active');
        document.querySelector(`[data-target='${tab}']`).classList.add('tabs-item--active');
      })
    })

    e.addEventListener('click', (e) => {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__swipe').forEach((btn) => {
        btn.classList.remove('tabs-nab__btn--active');
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('tabs-nab__btn--active');
      })
    })
  });
});
