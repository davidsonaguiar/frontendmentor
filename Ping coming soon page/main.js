const form = document.getElementById('form');

function handleSubmit(event) {
  event.preventDefault();
  console.log('form submitted');
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email) || email !== '') { 
    form.classList.remove('error');
  } else {
    form.classList.add('error');
  }
}

form.addEventListener('submit', handleSubmit);