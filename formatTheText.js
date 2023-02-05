function formatText() {
  let input = document.getElementById("input").value;
  let sentences = input.split(".").filter((sentence) => sentence.trim().length > 0);
  let output = document.getElementById("output");
  output.innerHTML = "";

  let i = 0;
  while (i < sentences.length) {
    let paragraph = `<p> ${sentences.slice(i, i + 3).join(". ")}. </p>`;
    output.innerHTML += paragraph;
    i += 3;
  }
}
