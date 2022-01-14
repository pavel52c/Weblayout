let print_accommodation = function (costs, titles, count_stars) {
  const ul = document.querySelector(".section-accommodation-list");

  function stars(count_stars) {
    let stars = `<img src="img/accomodations/star.svg" alt="Рейтинг отеля ${count_stars} из 5">`;
    for (let i = 0; i < count_stars - 1; i++)
      stars += `<img src="img/accomodations/star.svg" alt="">`;
    for (let i = 0; i < 5 - count_stars; i++)
      stars += `<img src="img/accomodations/empty_star.svg" alt="">`;
    return stars;
  }

  for (let i = 0; i < 8; i++) {
    ul.innerHTML += `
           <li class="section-accommodation-item">
            <img src="img/accomodations/${i + 1}.png" alt="Отель">
            <div class="section-accommodation-item-list">
              <div class="section-accomodation-item-text">
                <span class="section-accommodation-price"> <span class="place">от</span> <strong class="price">${costs[i]}</strong> / ночь</span>
                ${stars(count_stars[i])}
                <p class="section-accomodation-item-text">${titles[i]}</p>
                <p class="section-accomodation-item-text place">Барселона, Испания</p>
                <button class="btn">Номера</button>
              </div>
            </div>
          </li>
        `
  }

  ul.innerHTML += `<li class="section-accommodation-item">
                     <a href="#" class="section-accommodation-item-link">Посмотреть варианты</a>
                   </li>`
}
let costs = ["4 698 р", "5 148 р", "6 254 р", "6 320 р", "6 457 р", "6 320 р", "6 505 р", "6 824 р"];
let titles = ["Lagoona española",
              "Lagoona son típicas",
              "Lagoona de la guerra",
              "Lagoona mentira piadosa",
              "Lagoona empujar la creatividad",
              "Lagoona el retorno",
              "Lagoona mentira piadosa",
              "Lagoona suerte siguió siempre"]
let count_stars = [4, 4, 5, 5, 4, 4, 5, 5]

print_accommodation(costs, titles, count_stars)
