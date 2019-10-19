
window.addEventListener('load', () => {

	// document.querySelector('#background').classList.add('is-half')

	setTimeout(() =>{
		document.querySelector('.logo').classList.add('is-animated')
		
		setTimeout(() => {
			document.querySelector('.logo').classList.add('is-scaled')
			
			setTimeout(() => {
				document.querySelector('.logo').classList.add('is-left')
				document.querySelector('#background').classList.add('is-half')

				setTimeout(() => {
					document.querySelector('#menu__toggle').classList.add('is-visible')
				}, 500)

			}, 250)
		}, 500)
	}, 500)


	const toggleMenu = document.querySelector('#menu__toggle div')
	
	toggleMenu.addEventListener('click', () => {
		toggleMenu.parentNode.classList.toggle('is-active')

		document.querySelector('#menu__list').classList.toggle('is-active')
	})

})