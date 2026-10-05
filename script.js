const cards = [...document.querySelectorAll(".screen-card")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const noResults = document.querySelector(".no-results");
const dialog = document.querySelector(".screen-dialog");
const dialogImage = document.querySelector(".dialog-image");
const dialogStage = document.querySelector(".dialog-stage");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector(".dialog-description");
const prototypeLink = document.querySelector(".prototype-link");
let previouslyFocusedElement;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    cards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.stage === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    noResults.hidden = visibleCount > 0;
  });
});

document.querySelectorAll(".screen-open").forEach((button) => {
  button.addEventListener("click", () => {
    previouslyFocusedElement = button;
    dialogTitle.textContent = button.dataset.title;
    dialogStage.textContent = button.dataset.stageLabel;
    dialogDescription.textContent = button.dataset.description;
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.querySelector("img").alt;
    prototypeLink.href = button.dataset.prototype;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    dialog.querySelector(".dialog-close-image").focus();
  });
});

function closeDialog() {
  if (!dialog.open) return;
  dialog.close();
}

dialog.querySelectorAll(".dialog-close").forEach((button) => {
  button.addEventListener("click", closeDialog);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

dialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeDialog();
  }
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  previouslyFocusedElement?.focus();
});
