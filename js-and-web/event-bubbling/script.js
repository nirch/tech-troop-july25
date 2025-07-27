

document.getElementById("parent").addEventListener('click', ()=> {
  console.log('parent clicked');
})

document.getElementById("child").addEventListener('click', (e)=> {
  console.log('child clicked');
  e.stopPropagation();
})