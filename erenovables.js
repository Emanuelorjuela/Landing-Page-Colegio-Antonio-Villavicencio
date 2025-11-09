
const boton= document.querySelector(".boton")
const body= document.querySelector(".body")

boton.addEventListener("click",()=>{
	
	if(body.classList.contains("claro")){
		body.classList.add("oscuro")
		body.classList.remove("claro")
	}
	
	else if(body.classList.contains("oscuro")){
		body.classList.add("claro")
		body.classList.remove("oscuro")
	}
	
})


  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

