function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','Enter','=','Backspace','Escape'];

  if (!validKeys.includes(key)) return; // ❌ Ignore invalid keys

  // 🧠 Get all buttons and find matching one
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    if (
      btn.innerText === key ||
      (key === 'Enter' && btn.innerText === '=') ||
      (key === 'Escape' && btn.innerText === 'C') ||
      (key === 'Backspace' && btn.innerHTML.includes('⌫'))
    ) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 150); // remove after highlight
    }
  });

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

