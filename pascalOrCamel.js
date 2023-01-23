function pascalOrCamel() {
  const input = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join("");

  const toCamel = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  };

  if (convention === "Pascal Case") {
    resultElement.textContent = toPascal(input);
  } else if (convention === "Camel Case") {
    resultElement.textContent = toCamel(input);
  } else {
    resultElement.textContent = "Error!";
  }
}
