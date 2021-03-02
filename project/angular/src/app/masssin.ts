class Employee {
	
	num1: string;
	num2: number;
	constructor() {}
	
	setData(name , age) {
		this.num1 = name;
		this.num2 = age;
	}
	
	getData() {
		return this.num1+this.num2;
	}
	
}


let obj = new Employee();
obj.setData(7,8);
let sum = obj.getData();