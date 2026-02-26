const output = document.getElementById('output');

window.addEventListener('keydown', (event) => {
  const char = event.key;

  if (/[0-9]/.test(char)) 
  {
    return;
  }

  if (char.length === 1) 
  {
    output.textContent += char.toUpperCase();
  }
});
