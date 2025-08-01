const terms = {
  "Atom": "The basic unit of a chemical element.",
  "Gravity": "A force that attracts two bodies toward each other.",
  "Photosynthesis": "Process by which green plants make food using sunlight.",
  "Molecule": "A group of atoms bonded together.",
  "Evaporation": "The process of turning from liquid into vapor.",
  "Neuron": "A specialized cell transmitting nerve impulses.",
  "Ecosystem": "A community of interacting organisms and their environment."
};

function searchTerm() {
  const input = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (input === "") {
    resultBox.innerHTML = "<p>Please enter a term.</p>";
    return;
  }

  const result = terms[input];

  if (result) {
    resultBox.innerHTML = `<p><strong>${input}:</strong> ${result}</p>`;
  } else {
    resultBox.innerHTML = "<p>Term not found. Please try another term.</p>";
  }
}
