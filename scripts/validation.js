const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');
//const welcomeMessage = document.getElementById('welcome');
let click = 0;

function printName(n){
  console.log(n);
}

function validation(){
  form.addEventListener('click', (e) => {
    click++;
    
    let messages = []
    if (name.value === '' || name.value == null) {
       messages=[...messages, 'Name is required'];
    }
  
    if (name.value.length < 2) {
      messages=[...messages, 'Name must be longer than 2 characters'];
    }
  
    if (password.value === '' || password.value == null) {
      messages=[...messages, 'Password is required'];
    }
  
    if (password.value.length <= 4) {
      messages=[...messages, 'Password must be longer than 4 characters'];
    }
  
    if (password.value === 'password') {
      messages=[...messages, 'Password cannot be password'];
    }


    // If any error is found then prevent the form submission and show the error
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join('\n ')
    }

    // If no error is found and the submit button is clicked then fetch data from 
    // the rest api 
    if(messages.length == 0 && click == 1){
      const url = 'http://dummy.restapiexample.com/api/v1/employees';
    
      fetch(url, {
      method: 'GET'
      })
      .then(response => response.json())
      .then((result) => {
        console.log('Success:', result);
        
        const users = result.data;
        users.forEach(data => {
          // console.log(data.employee_name);
           if(data.employee_name == name.value){
             console.log("Found");
             //welcomeMessage.innerText = "Welcome" + data.employee_name;
             location.href = "welcome.html";
           }
        });
    
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  })
  
}

