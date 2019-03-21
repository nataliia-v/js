/*
  Создайте компонент галлереи изображений следующего вида.

    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>

    // 🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2


    Реализуйте функционал:

      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.

      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.

      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются
        динамически, при загрузке страницы.

      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.

      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.

      - Изображений может быть произвольное количество.

      - Используйте делегирование для элементов preview.

      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.

      - CSS-оформление и имена классов на свой вкус.


    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/


const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];

const container = document.querySelector('.js-image-gallery');

let createFullview = () => {
  let fullviewEl = document.createElement('div');
  fullviewEl.classList.add('fullviewEl');
  let fullviewImg = document.createElement('img');
  fullviewImg.classList.add('fullviewImg');

  fullviewImg.src = galleryItems[0].fullview;

  fullviewEl.appendChild(fullviewImg);
  container.appendChild(fullviewEl);
};

createFullview();

let createPreview = () => {

  let ul = document.createElement('ul');
  ul.classList.add('previewElements');
  container.appendChild(ul);

  galleryItems.forEach(el => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.setAttribute("data-fullview", el.fullview);
    img.setAttribute("alt", el.alt);
    img.src = el.preview;
    li.appendChild(img);
    ul.appendChild(li);
  });

};
createPreview();

const preview = document.querySelector('.previewElements');

const fullview = document.querySelector('.fullviewImg');

preview.addEventListener('click', event => {
  const nodeName = event.target.nodeName;
  if (nodeName !== 'IMG') return;
  const fullviewSrc = event.target.getAttribute('data-fullview');
  fullview.src = fullviewSrc;
});


