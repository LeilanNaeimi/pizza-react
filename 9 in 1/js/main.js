// Elements

const modal = document.createElement("div");
const container = document.createElement("div");
const header = document.createElement("div");
const closeButton = document.createElement("button");
const body = document.createElement("div");
const background = document.createElement("div");
/////////////////////////////////////////////////
// Functions

function createModal(config) {
  //close modal with esc
  const hideModalOnEscpae = (e) => {
    if (e.key === "Escape") hideModal();
  };

  function hideModal() {
    modal.remove();
    document.removeEventListener("keyup", hideModalOnEscpae);
  }

  modal.classList.add("modal");

  // Modal container
  container.classList.add("modal-container");

  // Modal header
  header.classList.add("header");
  header.innerHTML = config.title;
  container.appendChild(header);

  //close button
  closeButton.innerHTML = "&times;";
  closeButton.onclick = hideModal;
  header.appendChild(closeButton);

  //modal body
  body.classList.add("body");
  body.innerHTML =
    config.body instanceof HTMLElement ? config.body.innerHTML : config.body;
  container.appendChild(body);

  // Modal background
  background.classList.add("background");
  modal.appendChild(background);
  background.onclick = hideModal;

  modal.appendChild(container);
  document.body.appendChild(modal);

  //close modal with esc
  document.addEventListener("keyup", hideModalOnEscpae);
}

//modal 1 call function
document.querySelector("#modal-1").onclick = () => {
  createModal({
    title: "Change Bakground Color",
    body: document.querySelector(".modal-content1"),
  });
};

//modal 2 call function
document.querySelector("#modal-2").onclick = function () {
  createModal({
    title: "BMI Project",
    body: document.querySelector(".modal-content2"),
  });
};

//modal 3 call function
document.querySelector("#modal-3").onclick = function () {
  createModal({
    title: "TODO List",
    body: document.querySelector(".modal-content3"),
  });
};

//modal 4
document.querySelector("#modal-4").onclick = function () {
  createModal({
    title: "Country List",
    body: document.querySelector(".modal-content4"),
  });
};

//modal 5
document.querySelector("#modal-5").onclick = function () {
  createModal({
    title: "Html Form Validation",
    body: document.querySelector(".modal-content5"),
  });
};

//modal 6
document.querySelector("#modal-6").onclick = function () {
  createModal({
    title: "Nested Comments",
    body: document.querySelector(".modal-content6"),
  });
};
