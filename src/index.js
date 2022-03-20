/**
 * const , let の変数宣言
 *
 */
/** 
var val1 = "var";
console.log(val1);
// var 変数の上書き

val1 = "上書き";
console.log(val1);

val1 = "宣言";
console.log(val1);

const name1 = "tete";

const age = 28;

console.log("私の名前は" + name1 + age);

console.log(`私の名前は${name1} ${age}`);


const myProfile=["name",28];
const message3=`名前は${myProfile[0]};`
console.log(message3);
const [name,age]=myProfile;
const message4=`名前3は${name}`;
console.log(message4)


const sayHello=(name="Guest")=> console.log(`Hello ${name}`)
sayHello("tete")


const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1)


const arr2=[1,2,3,4,5];
const [num1,num2,...arr3]=arr2;
console.log(...arr3);


const arr4=[10,20];
const arr5=[30,40];
const arr6=[...arr4];
console.log(arr6)
const arr7 = [...arr4 ,...arr5];
console.log(arr7)


const arr4 = [10, 20];
const arr5 = [30, 40];
const arr8 = arr4;
arr8[0] = 100;
console.log(arr4);


const nameArr = ["田中", "山田", "木村"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

const nameArr2=nameArr.map((name)=>{
  return name;
})
console.log(nameArr2)

const nameArr = ["田中", "山田", "木村"];
nameArr.map((name)=>console.log(name))



const numArr=[1,2,3,4,4,55];
const newNumArr=numArr.filter((num)=>{
  return num%2===1;
})
console.log(newNumArr)

const nameArr = ["田中", "山田", "木村"];
const nameArr3=nameArr.map((name,index)=>{
  console.log(`${index},${name}`);
})
console.log(nameArr3)

const nameArr4=nameArr.map((name)=>{
  if (name!=="山田"){
    return `${name}さん`;}
  else {
    return name;
  }
})
console.log(nameArr4)

const val1 = 1 < 0 ? `trueです` : `False`;
console.log(val1);

const num="1300";
console.log(num.toLocaleString())

const val2= typeof num==="number" ? num.toLocaleString():`数字を入力`;
console.log(val2)
*/

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "True" : "False";
};
console.log(checkSum(100, 10));
