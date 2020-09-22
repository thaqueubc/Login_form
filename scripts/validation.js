const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (name.value.length < 2) {
    messages.push('Name must be longer than 2 characters');
  }

  if (password.value === '' || password.value == null) {
    messages.push('Password is required')
  }

  if (password.value.length <= 4) {
    messages.push('Password must be longer than 4 characters');
  }

  // if (password.value.length >= 20) {
  //   messages.push('Password must be less than 20 characters');
  // }

  if (password.value === 'password') {
    messages.push('Password cannot be password');
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('\n ')
  }
})

function printName(n){
  console.log(n);
}