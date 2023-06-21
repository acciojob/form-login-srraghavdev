function getFormvalue() {
    //Write your code here
	const texter = document.querySelectorAll("input[type=text]")
	window.alert(`${texter[0].value} ${texter[1].value}`)
}
