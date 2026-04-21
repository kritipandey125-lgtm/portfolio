const texts = [
  "a Frontend Developer",
  "a B.Tech CSE Student",
  "learning Web Development",
  "building modern websites"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const el = document.getElementById("typing");
  let current = texts[i];

  if (isDeleting) {
    el.textContent = current.substring(0, j--);
  } else {
    el.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

