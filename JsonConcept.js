//JSON
//{key:value}

let student = {regno:'2021/ICT/26', name:'Ranuja', age:23, course:'IT'}
	console.log(student) //Output : {regno:'2021/ICT/26', name:'Ranuja', age:23, course:'IT'}
	console.log(student.name) //Output : Ranuja
	
//More than one
let students = [
{regno:'2021/ICT/26', name:'Ranuja', age:23, course:'IT'},
{regno:'2021/ICT/66', name:'Wihansi', age:23, course:'IT'},
{regno:'2021/ICT/67', name:'Nadun', age:22, course:'IT'}
]

	console.log(students) 
		/*Output : [
					  { regno: '2021/ICT/26', name: 'Ranuja', age: 23, course: 'IT' },
					  { regno: '2021/ICT/66', name: 'Wihansi', age: 23, course: 'IT' },
					  { regno: '2021/ICT/67', name: 'Nadun', age: 22, course: 'IT' }
					]
		*/
	console.log(students.name) //Output: undefined