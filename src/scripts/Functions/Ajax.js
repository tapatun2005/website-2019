 export function ajax(url, callback) {
	fetch(url)
		.then((resp) => resp.json())
		.then((resp) => {
			callback(resp)
		})
		.catch((err) => console.log(err))
}