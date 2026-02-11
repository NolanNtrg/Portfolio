export function Description() {
  const text = "Étudiant en informatique à l'IUT2 de Grenoble";

  let index = 0;
  const descEl = document.getElementById("description");

  function typeWriter() {
    if (descEl && index < text.length) {
      descEl.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  return <p id="description">{text}</p>;
}
