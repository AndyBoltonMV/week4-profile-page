const main = document.querySelector("main");

const arr = ["Steve", "Gary", "Clive", "Susan", "Toby"];

main.innerHTML += `
  <section class="image-name-container">
    <p>Clive Clive</p>
  </section>
`;

function nodeCreation(name) {
  const section = document.createElement("section");
  section.className = "image-name-container";
  const p = document.createElement("p");
  const textNode = document.createTextNode(name);

  p.appendChild(textNode);
  section.appendChild(p);
  main.appendChild(section);
}

for (let i = 0; i < arr.length; i++) {
  nodeCreation(arr[i]);
}

console.log(main.childNodes);
