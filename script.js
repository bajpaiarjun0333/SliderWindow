const designer=document.querySelector('#designer');
const container=document.querySelector('.container-fluid');
const programmer=document.querySelector('#programmer');
designer.addEventListener('mouseenter',()=>{
  designer.classList.add('col-md-8');
designer.classList.remove('col-md-6');  
programmer.classList.remove('col-md-6');
programmer.classList.add('col-md-4');
console.log('working');
});

designer.addEventListener('mouseleave',()=>{
  designer.classList.add('col-md-6');
  designer.classList.remove('col-md-8');
  programmer.classList.remove('col-md-4');
  programmer.classList.add('col-md-6');
});

programmer.addEventListener('mouseenter',()=>{
  programmer.classList.add('col-md-8');
  designer.classList.remove('col-md-6');
  designer.classList.add('col-md-4');
  console.log('working');
  });

  programmer.addEventListener('mouseleave',()=>{
    
    programmer.classList.add('col-md-6');
    programmer.classList.remove('col-md-8');
    designer.classList.remove('col-md-4');
    designer.classList.add('col-md-6');
  });
  