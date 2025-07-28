

document.getElementById('btnDog').addEventListener('click', ()=> {
  // Call API - get the image URL
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      document.getElementById('imgDog').src = response.data.message;
    }).catch(err => console.log(err));
  console.log('hello');
})