let print_service  = function (links, paragraphs) {
  const ul = document.querySelector(".section-service-list");
  ul.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    ul.innerHTML += `
          <li class="section-service-item">
            <a href="#" class="section-service-item-link">${links[i]}</a>
            <p class="section-service-item-paragraph">${paragraphs[i]}</p>
          </li>
        `
  }
}

let links = ["Эксклюзивное обслуживание",
  "Аренда банкетных залов",
  "Сауны, бассейны, бани, фитнес-залы",
  "Охраняемые автомобильные стоянки"];

let paragraphs = ["Равным образом постоянный количественный рост и сфера нашей активности",
  "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм.",
  "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
  "Не следует, однако забывать, что начало повседневной работы по формированию позиции"];

print_service(links, paragraphs)


