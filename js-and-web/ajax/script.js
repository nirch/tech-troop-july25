

document.getElementById('btnDog').addEventListener('click', ()=> {
  // Call API - get the image URL
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error in fetching random dog');
      }
      return response.json()
    })
    .then(data => {
      // Update image URL in DOM
      console.log(data);
      document.getElementById('imgDog').src = data.message;
    })
    .catch(err => console.log(err));
  console.log('hello');
})