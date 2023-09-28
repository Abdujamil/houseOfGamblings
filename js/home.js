// Change language script
document.getElementById('language-button').addEventListener('click', function () {
    var currentLanguage = this.innerHTML;
    this.innerHTML = currentLanguage === 'RU' ? 'ENG' : 'RU';
});


document.getElementById('login-button').addEventListener('click', function () {
    alert('Log In clicked');
});

document.getElementById('signup-button').addEventListener('click', function () {
    alert('Sign Up clicked');
});

// Mobile menu script
const menuButton = document.querySelector('.menu-btn');
const mobMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');

let isMenuVisible = false;

menuButton.addEventListener('click', () => {
    mobMenu.style.display = isMenuVisible ? 'none' : 'block';
    menuButton.style.display = isMenuVisible ? 'block' : 'none';
    closeMenu.style.display = isMenuVisible ? 'none' : 'block';
    isMenuVisible = !isMenuVisible;
});

closeMenu.addEventListener('click', () => {
    mobMenu.style.display = isMenuVisible ? 'none' : 'block';
    menuButton.style.display = isMenuVisible ? 'block' : 'none';
    closeMenu.style.display = isMenuVisible ? 'none' : 'block';
    isMenuVisible = !isMenuVisible;
});



const blogContainer = document.querySelector('.blog-content');

// Function for adding blog-element
function addBlogItem(content, date) {
  const blogItem = document.createElement('div');
  blogItem.classList.add('blog-item');

  const contentParagraph = document.createElement('p');
  contentParagraph.textContent = content;

  const dateParagraph = document.createElement('p');
  dateParagraph.classList.add('data');
  dateParagraph.textContent = date;

  blogItem.appendChild(contentParagraph);
  blogItem.appendChild(dateParagraph);

  blogContainer.appendChild(blogItem);
}

for (let i = 0; i < 8; i++) {
  addBlogItem('Payment methods: Skrill, Neteller, webmoney, Bank transfer', '10.02.2023');
}



// Scrollbar script
const blogContent = document.querySelector('.blog-content');
const scrollThumb = document.querySelector('.scroll-thumb');

scrollThumb.addEventListener('mousedown', (e) => {
  e.preventDefault();

  const startY = e.clientY;
  const startScrollTop = blogContent.scrollTop;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {
    const deltaY = e.clientY - startY;
    const maxScroll = blogContent.scrollHeight - blogContent.clientHeight;
    const scrollValue = (deltaY / scrollThumb.clientHeight) * maxScroll;

    blogContent.scrollTop = startScrollTop + scrollValue;
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});


blogContent.addEventListener('scroll', updateThumbHeight);

function updateThumbHeight() {
  const maxScroll = blogContent.scrollHeight - blogContent.clientHeight;
  const scrollRatio = (blogContent.scrollTop / maxScroll) * 100;
  scrollThumb.style.height = `${scrollRatio}%`;
}


updateThumbHeight();



// Blog script
let lastScreenWidth = window.innerWidth;
const threshold = 50; // Порог для изменения размера

// Функция для обработки изменения размера окна
function handleResize() {
  const screenWidth = window.innerWidth;

  // Проверяем, превышает ли изменение размера порог
  if (Math.abs(screenWidth - lastScreenWidth) > threshold) {
    createIconsByScreenSize();
    lastScreenWidth = screenWidth; // Обновляем последний известный размер
  }
}

// Функция для создания иконки и добавления её в указанный контейнер
function createIcon(container, src, alt) {
  const icon = document.createElement("img");
  icon.className = "icon";
  icon.src = src;
  icon.alt = alt;
  container.appendChild(icon);
}

// Функция для очистки контейнера
function clearContainer(container) {
  container.innerHTML = "";
}

function createIconsByScreenSize() {
  const l1Container = document.querySelector('.icons-l1');
  const l2Container = document.querySelector('.icons-l2');
  const l3Container = document.querySelector('.icons-l3');
  const screenWidth = window.innerWidth;

  // Определяем пути к изображениям для мобильной и десктопной версий
  let worldImagePath = "/img/World.svg";
  if (screenWidth < 920) {
    worldImagePath = "/img/world-mob2.svg";
  }

  // Очищаем контейнеры перед добавлением новых иконок
  clearContainer(l1Container);
  clearContainer(l2Container);
  clearContainer(l3Container);

  // Создаем иконки с учетом пути к изображению
  createIcon(l1Container, "/img/M.svg", "m");
  createIcon(l1Container, "/img/Timer.svg", "timer");
  createIcon(l1Container, "/img/Crown.svg", "crown");
  createIcon(l1Container, worldImagePath, "world");
  createIcon(l1Container, "/img/Shield.svg", "shield");
  createIcon(l1Container, "/img/Timer.svg", "timer");
  createIcon(l1Container, "/img/Soccer.svg", "soccer");
  createIcon(l1Container, "/img/Timer.svg", "timer");
  createIcon(l1Container, "/img/Shield.svg", "shield");

  createIcon(l2Container, "/img/Shield.svg", "shield");
  createIcon(l2Container, "/img/M.svg", "m");
  createIcon(l2Container, "/img/Timer.svg", "timer");
  createIcon(l2Container, worldImagePath, "world");
  createIcon(l2Container, "/img/Crown.svg", "crown");
  createIcon(l2Container, "/img/Soccer.svg", "soccer");
  createIcon(l2Container, "/img/Shield.svg", "shield");
  createIcon(l2Container, "/img/Soccer.svg", "soccer");
  createIcon(l2Container, "/img/Timer.svg", "timer");

  createIcon(l3Container, "/img/Crown.svg", "crown");
  createIcon(l3Container, "/img/Soccer.svg", "soccer");
  createIcon(l3Container, "/img/Timer.svg", "timer");
  createIcon(l3Container, "/img/Shield.svg", "shield");
  createIcon(l3Container, "/img/M.svg", "m");
  createIcon(l3Container, "/img/Shield.svg", "shield");
  createIcon(l3Container, worldImagePath, "world");
  createIcon(l3Container, "/img/Timer.svg", "timer");
  createIcon(l3Container, "/img/Soccer.svg", "soccer");
}

window.addEventListener('load', createIconsByScreenSize);
window.addEventListener('resize', handleResize); // Обновляем изображение при изменении размера окна
