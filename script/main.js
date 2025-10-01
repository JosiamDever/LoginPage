const loginForm = document.querySelector('#formConteiner')

loginForm.addEventListener('submit', (e) => {
  
  e.preventDefault(); 
  
});

const resetBtn = document.querySelector('#tryAgainBtn');

resetBtn.addEventListener('click', () => {
  
  loginForm.reset(); 
  
});

//why DOM local listenrs,like onclick,don't keep working well if you set the script js file as module? 

//reset form data content by button click on
function resetForm(){
  
  loginForm.reset(); 
  
};
