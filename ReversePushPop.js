//Reverse the array using push and pop
let array = ['a','b','c','d']
const al=array.length
let newArray = []
console.log(array)

	for(let i=0; i< al; i++)
	{
		newArray.push(array.pop())
	}
	
	console.log(newArray)