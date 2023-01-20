function edit(element, match, replacer) {
  element.innerHTML = element.innerHTML.replace(new RegExp(match, "g"), replacer);
}
