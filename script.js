function pamaskoGame() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name first 😊");
    return;
  }

  // Get saved users from localStorage
  let usedNames = JSON.parse(localStorage.getItem("usedPamasko")) || [];

  // Check if name already used
  if (usedNames.includes(name.toLowerCase())) {
    alert("Wag Mandaya Neng!");
    return;
  }

  const pamasko = [
    "20 pesos",
    "Chocolate na Expired",
    "Sorry, Wala pa 13th Month Pay e",
    "Bawi Next Pasko",
    "ano ka sinuswerte?",
    "Bolpen",
    "Facemask",
    "Lollipop",
    "Mahigpit na yakap, sa leeg.",
    "Candy na Max",
    "Pencil Monggol 2",
    "Borger pero walang patty",
  ];

  const random = Math.floor(Math.random() * pamasko.length);
  alert(`🎄 Hi ${name}! Your Pamasko is: ${pamasko[random]}`);

  usedNames.push(name.toLowerCase());
  localStorage.setItem("usedPamasko", JSON.stringify(usedNames));

  // Optional: clear input
  nameInput.value = "";
}
