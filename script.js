function startChat() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("chat").style.display = "flex";
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value;

  if (userText.trim() !== "") {
    chatBox.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
    chatBox.innerHTML += `<div><strong>ZaibBrain:</strong> Sorry, this is a demo response.</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
