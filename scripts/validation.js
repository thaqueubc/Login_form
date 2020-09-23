const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('login-form');
const errorElement = document.getElementById('error');
//const welcomeMessage = document.getElementById('welcome');

function validation(){
  form.addEventListener('click', (e) => {
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
  
    if (password.value === 'password') {
      messages.push('Password cannot be password');
    }
  
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join('\n ')
    }
    if(messages.length == 0){
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
            //welcomeMessage.innerText = "Welcome" + name.value;
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
function printName(n){
  console.log(n);
}

// function signIn(){
//    const url = 'http://dummy.restapiexample.com/api/v1/employees';
    
//   fetch(url, {
//   method: 'GET'
//   })
//   .then(response => response.json())
//   .then((result) => {
//     console.log('Success:', result);
    
//     const users = result.data;
//     users.forEach(data => {
//       // console.log(data.employee_name);
//        if(data.employee_name == name.value){
//          console.log("Found");
//         welcomeMessage.innerText = "Welcome" + name.value;
//          location.href = "welcome.html";
//        }
//     });

//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }