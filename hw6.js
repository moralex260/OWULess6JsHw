/* создать массив с 20 числами.
-- при помощи метода sort отсортировать массив.
-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
-- при помощи filter получить числа кратные 3
-- при помощи filter получить числа кратные 10
- перебрать (проитерировать) массив при помощи foreach()
-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше*/

let array=[];
while (array.length<20){
    array.push(Math.floor(Math.random()*100));
}
 console.log(array);
//  function sort(a,b){
//      return a-b;
//  }
let result=array.sort();// не правильно
console.log("неправильний сорт"+result);
//-------------------------------------

let sort=array.sort(function(a,b){return a-b});
console.log(sort);
let sortreverse=array.sort(function(a,b){return b-a});
console.log(sortreverse);
//------------------------------------------------
let filterMultipleOf3=array.filter(function (num) {return num % 3 === 0;});
console.log(filterMultipleOf3);

 let filterMultipleOf10=array.filter(function (num) {return num % 10 === 0;});
 console.log(filterMultipleOf10);

 //--------------------------------------------
array.forEach(function (num) {
console.log(num);
});

//-------------------------------------------------------

let newArray=array.map(function (num) {
return num*3;
});
console.log(array);
console.log(newArray);
//-----------------------------------------

/*- создать массив со словами на 15-20 элементов.
-- отсортировать его по алфавиту в восходящем порядке.
-- отсортировать его по алфавиту  в нисходящем порядке.
-- отфильтровать слова длиной менее 4х символов
-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце*/

function randomword() {
    let text = "";
    let possible = "ABCoDEFaGHIJeKLMNOePQaRSTeUVWXaYZabcadefguhijkolmnaopqrastuviwxiyz";

    for (let i = 0; i < Math.floor(Math.random()*(7-3)+3); i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
//---------------
 let array1=[];
 let i=0;
while (array1.length<18){
    array1.push(randomword());
    i++;
 }
console.log(array1);
//------------------
let sortarr=array1.sort();
console.log(sortarr);
let reverseSortArr=array1.reverse();

console.log(reverseSortArr);
//--------------------------------

let smallWord=array1.filter(function (num) {
if (num.length<4){ return true}
});
console.log(smallWord);
//--------------------------------------
let newArray1=array1.map(function (num) {
return num+"!"
});
console.log(newArray1);



/*все робити через функції масивів (foreach, map ...тд)
Дан масив :*/
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
/*- відсортувати його за  віком (зростання , а потім окремо спадання)
- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати -
ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
- відсортувати його за індентифікатором*/


console.log(users);
let userSort=users.sort(function (a,b) {
return a.age-b.age;
});
let sortAgeReverse=users.sort(function (a,b) {
return b.age-a.age;
});
console.log(userSort);
console.log(sortAgeReverse);


let usersortname=users.sort(function (a,b) {
if(a.name.length>b.name.length){return 1}
else if(a.name.length<b.name.length){return -1}
else return 0;
});
console.log("сортіровка по кількості знаків в імені",usersortname);

let usersortnamereverse=users.sort(function (a,b) {
    if(a.name.length>b.name.length){return -1}
    else if(a.name.length<b.name.length){return 1}
    else return 0;
});

console.log("сортіровка по кількості знаків в імені в зворотньому порядку",usersortnamereverse);

newusers=JSON.stringify(users);
newusers=JSON.parse(newusers);
newusers.forEach(function (num,ind) {
 return num.id=ind
});
console.log("кожному елементу присвоєна id",newusers);

let use=newusers.sort(function (a,b) {
if(a.id>b.id) return 1;
else if (a.id<b.id) return -1;
else return 0;
});
console.log("сортування по id",use);


//-------------------------------------------------

let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

/*Відфільтрувати масив за наступними крітеріями :
    - двигун більше 3х літрів
- двигун = 2л
- виробник мерс
- двигун більше 3х літрів + виробник мерседес
- двигун більше 3х літрів + виробник субару
- сили більше ніж 300
- сили більше ніж 300 + виробник субару
- мотор серіі ej
- сили більше ніж 300 + виробник субару + мотор серіі ej
- двигун меньше 3х літрів + виробник мерседес
- двигун більше 2л + сили більше 250
- сили більше 250  + виробник бмв */
let filterCar=cars.filter(function (num) {
if(num.volume>3){return true}
});
console.log("volume>3",filterCar);

let filterCar1=cars.filter(function (num) {
    if(num.volume>3&&num.producer==="mercedes"){return true}
    if(num.volume===2){return console.log("volume===2",true)}
});
console.log("num.volume>3&&num.producer",filterCar1);

let filterCar2=cars.filter(function (num) {
    if(num.volume===2){return true}
});
console.log("volume===2",filterCar2);

let filterCar3=cars.filter(function (num) {
    if(num.power>300&&num.producer==="subaru"){return true}
});
console.log("power300&&num.producer===\"subaru\"",filterCar3);

let filterCar4=cars.filter(function (num) {
    let temp=num.engine.slice(0,2);
    if(temp==="ej"){return true}
});
console.log("temp===\"ej\"",filterCar4);

//- взять слдующий массив

let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
/*-- отсортировать его по id пользователей
-- отсортировать его по id пользователей в обратном опрядке
-- отсортировать его по возрасту пользователей
-- отсортировать его по возрасту пользователей в обратном порядке
-- отсортировать его по имени пользователей
-- отсортировать его по имени пользователей в обратном порядке
-- отсортировать его по названию улицы  в алфавитном порядке
-- отсортировать его по номеру дома по возрастанию
-- отфильтровать (оставить) тех кто младше 30
-- отфильтровать (оставить) тех у кого отрицательный статус
-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
-- отфильтровать (оставить) тех у кого номер дома четный*/

usersWithAddress.sort(function (a,b) {
return a.id-b.id;
});
let rev=usersWithAddress.sort((a,b)=>b.id-a.id);
console.log(rev);
let sortAge=usersWithAddress.sort((a,b)=>a.age-b.age);
console.log("sortAge",sortAge);
let sortstreet=usersWithAddress.sort((a,b)=>a.address.street-b.address.street);
console.log("sortstreet",sortstreet);
let filterage=usersWithAddress.filter((num)=>num.age<30);
console.log(filterage);
let filterStatus=usersWithAddress.filter((num)=>!num.status);
console.log("filterStatus",filterStatus);

let filterStatusAge=usersWithAddress.filter((num)=>!num.status&&num.age<30);
console.log("filterStatus and age",filterStatusAge);

let filterhouse=usersWithAddress.filter(function (num) {
return num.address.number % 2 === 0;
});
console.log(filterhouse);

/*Створити обєкт автомобіля з полями:
Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
Власник автомобіля теж має бути обєкт, у якого є поля
Імя, вік, стаж водіння.
Створити не менше 7 та не більше 20 машинок.
Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
Для початку вкладіть всі наші створені автомобілі в масив cars.
Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
 то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/
class Owner{
    constructor(name,age,experience) {
        this.name=name;
        this.age=age;
        this.experience=experience;
    }
}
let owner1=new Owner("vasya",35,10);
let owner2=new Owner("petro",40,15);
let owner3=new Owner("ivan",25,5);
let owner4=new Owner("dmytro",18,0);
let owner5=new Owner("sasha",29,4);
let owner6=new Owner("taras",29,7);
let owner7=new Owner("vadik",20,2);
let owner8=new Owner("edik",33,8);
let owner9=new Owner("homa",50,25);
class Car   {
    constructor(model, power, price, year,owner) {

        this.model = model;
        this.power = power;
        this.price = price;
        this.year = year;
        this.owner= owner;

    }
}
let opel=new Car("astra",160,10000,2017,owner1);
let opel1=new Car("omega",200,5000,2003,owner2);
let shcoda=new Car("fabia",200,10000,2017,owner3);
let ford=new Car("scorpio",220,3000,1996,owner4);
let ford1=new Car("mustang",400,15000,1969,owner4);
let tayota=new Car("camry",250,12000,2010,owner5);
let zaz=new Car("969",40,100,1980,owner6);
let lada=new Car("niva",170,3000,2010,owner1);
let newDrivers=[owner7,owner8,owner9];
let tempArray=[];
let carsArray=[opel,opel1,shcoda,ford,ford1,tayota,zaz,lada];
let  fix=carsArray.map(function (num) {
if(num.power<200){
tempArray.push(num.owner.name);
    return num.power*=1.1;
}
});
let newOwner=carsArray.map(function (num) {
    for (let j = 0; j <tempArray.length ; j++) {
        if (tempArray[j] === num.owner.name) {
            return num.owner =newDrivers[Math.floor(Math.random()*(3))]
        }else return num.owner
    }

});
console.log(carsArray);
let newCarsArray=JSON.stringify(carsArray);
newCarsArray=JSON.parse(newCarsArray);
console.log(newCarsArray);
newCarsArray.forEach(function (num) {
if(num+1){
   num.power=parseInt(num.power*1.1);
   num.price=parseInt(num.price*1.05);
}
});
console.log(newCarsArray);

let ownExp=newCarsArray.filter(function (num) {
if(num.owner.experience<5&&num.owner.age>25)
{console.log(`${num.owner.name} , ви відправляєтесь на підвищення кваліфікації`);
 return num.owner.experience+=1;
}
});
//----------------------------------------------------
let sum=(numpr,numnex) =>numpr.price+numnex.price;//    не зробив
console.log(newCarsArray.reduce(sum));
//----------------------------------------------


/*Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.

Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.

Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
Пример:
Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
1. Key = 1
Answer: MinIndex = 0, MaxIndex = 0.
2. Key = 4
Answer: MinIndex = 3, MaxIndex = 6.*/
arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
for (let j = 0; j <arr.length ; j++) {
    if(Math.abs(arr[j])>10){arr.splice(j)}
}
console.log(arr);
function maxminIndex(arr,number) {
    let arr1=[];
    for (let j = 0; j <arr.length ; j++) {
        if(number===arr[j]){arr1.push(j)}
    }
   if(arr1.length===0){
       console.log("-1");}
      else {console.log(`min index of ${number}= ${arr1[0]} max index ${number} = ${arr1[arr1.length-1]}`)
   }
}
maxminIndex(arr,1);