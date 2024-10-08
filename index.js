

function redundant(str) {
	return () => str;
}
function cubes(a) {
	return a*3
}
console.log (cubes(9))



function getFirstValue(arr) {
	return arr[0] ;
}
console.log(getFirstValue([1, 2, 3]))


function howManySeconds(hours) {
	let second = new Date();
	return second = hours*3600;
}
console.log(howManySeconds(2))

function triArea(base, height) {
	return (0.5*base)* height
}
console.log(triArea(3, 2))


function giveMeSomething(a) {
	return "something" + " " + a ;
}
console.log(giveMeSomething("is better than nothing"))