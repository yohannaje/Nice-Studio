const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('color');
	btnSwitch.classList.toggle('active');
	
	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('color')){
		localStorage.setItem('color-mode', 'true');
		document.getElementById("switch").src="https://ik.imagekit.io/nicecreativestudio/IMGs_finales_Webp/moon-switch-dark_white-website-mode.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649368696792";
	} else {
		localStorage.setItem('color-mode', 'false');
		document.getElementById("switch").src="https://ik.imagekit.io/nicecreativestudio/IMGs_finales_Webp/rainbow-switch-dark_white-website-mode.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649368706757";
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('color-mode') === 'true'){
	document.body.classList.add('color');
	btnSwitch.classList.add('active');
	document.getElementById("switch").src="https://ik.imagekit.io/nicecreativestudio/IMGs_finales_Webp/moon-switch-dark_white-website-mode.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649368696792";
} else {
	document.body.classList.remove('color');
	btnSwitch.classList.remove('active');
	document.getElementById("switch").src="https://ik.imagekit.io/nicecreativestudio/IMGs_finales_Webp/rainbow-switch-dark_white-website-mode.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1649368706757";
}
