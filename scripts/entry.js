export const Entry = (entry) => {
  return `
  <section class="entry">
  <div class="entry__top-line">
    <div class="entry__top-line__stack">
      <p class="date"><span class="bold">Date: </span>${entry.date}</p>
      <p class="mood"><span class="bold">Mood: </span>${entry.mood}</p>
    </div>
    <p class="topics"><span class="bold">Topics covered: </span>${entry.concept}</p>
  </div>
  <div class="entry__content">
    <p class="content">${entry.entry}</p>
  </div>
  <div class="entry__bottom-line">
    <a href="#" class="btn btn--edit">Edit</a>
    <a href="#" class="btn btn--delete">Delete</a>
  </div>
</section>
  `
};