
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

//For image slider
const slides = document.querySelector('.slides');
  const slide = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    index = (i + slide.length) % slide.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prev.addEventListener('click', () => {
    showSlide(index - 1);
  });

  next.addEventListener('click', () => {
    showSlide(index + 1);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);

  // Initial call
  showSlide(index);
