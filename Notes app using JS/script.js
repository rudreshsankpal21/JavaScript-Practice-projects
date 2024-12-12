const addBtn = document.querySelector("button");
const container = document.querySelector(".container");
const body = document.querySelector(".body");

addBtn.addEventListener("click", addNote);
function addNote() {
  const note = document.createElement("div");
  note.classList.add("main");
  note.innerHTML = ` <div class="upper-section">
    <i id="save" class="fa-regular fa-floppy-disk"></i>
    <i  id="delete" class="fa-solid fa-trash"></i>
    </div>
    <textarea></textarea>`;

  const save = note.querySelector("#save");
  const deleteNote = note.querySelector("#delete");
  const textArea = note.querySelector("textarea");

  save.addEventListener("click", () => {
    localStorage.setItem(body, note.innerHTML);
    alert("Your note is saved");
  });

  deleteNote.addEventListener("click", () => {
    body.removeChild(note);
  });
  body.appendChild(note);
}
