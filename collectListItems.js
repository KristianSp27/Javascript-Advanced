function gatherListItems() {
  let list = document.getElementById("myList");
  let textarea = document.getElementById("outputText");

  let listItems = list.getElementsByTagName("li");

  let listText = "";

  for (let i = 0; i < listItems.length; i++) {
    listText += listItems[i].textContent + "\n";
  }

  textarea.value = listText;
}
