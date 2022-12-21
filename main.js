// Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype 
const parent = 
{
    firstName : 'Abhishek',
    lastName : 'Sharma',
    fullname(){
        return (this.firstName + " " + this.lastName)
    }
}

const child = {
    __proto__:parent
}
console.log(child.fullname());



// 2. Write code to explain prototype chaining
function Person ( name,age) {
    this.name = name, 
    this.age = age
 }
 const person1 = new Person( "Abhi",22);
 // adding property to constructor function
 Person.prototype.gender = 'male';
 // prototype value of Person
 console.log(Person.prototype);
 

 console.log(person1);
 console.log(person1.gender);

// 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

arr1=[1,2,3,4,5,6,7,8];
arr2=[2,4,6,8,10];
arr3=[1,3,5,7,9];
 const  arraysum={
   plus:function(arr){
      let sum=0;
      for(let i=0;i < arr.length;i++){
         sum+=arr[i];
      }
      console.log(sum);
   }
 }
 Array.__proto__=arraysum;

 Array.plus(arr1);
 Array.plus(arr2);

 Array.plus(arr3);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
 
var myobj ={
    name : "Virat",
    course : "fullstack",
    location : "Delhi",
  }
  let result = Object.keys(myobj);
  console.log(result);
 