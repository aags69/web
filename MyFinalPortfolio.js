// var typed = new typed('#element', {
//     strings: ['Graphics Designer ,', '&', 'Web Developer.'],
//     typeSpeed: 70,
// });

// SCROLL FUNCTION
// $(window).scroll(function(){
//   if($(window).scrollTop()){
//     $("nav").addClass("black");
//   }
//   else{
//     $("nav").removeClass("black");
//   }
// });

// TIME

// SUBMIT BUTTON FUNCTION  

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6N7pkiTm4dq3DW1Q7IU3wvYH7wLJfzFBbhJcY6cQfuBSL41EE9TLfYASRvmnN9bKD/exec'
const form = document.forms['submit-to-google-sheet']
let messageSubmit = document.getElementById("success");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log(response)
      messageSubmit.innerHTML = "Thank you for contacting us. We will get back to you shortly." 
      setTimeout(()=>{
          messageSubmit.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
