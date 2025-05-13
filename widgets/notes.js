export function initNotes() {
  const el = document.getElementById("notes");
  const saved = localStorage.getItem("notes") || "";
  el.innerHTML = `
    <h2>Notizen</h2>
    <textarea id="noteArea" rows="6">${saved}</textarea>
  `;
  el.querySelector("#noteArea").addEventListener("input", e => {
    localStorage.setItem("notes", e.target.value);
  });
}
