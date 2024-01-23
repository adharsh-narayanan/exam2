//[id, brand , model , type , pricePerDay, available]
carBooking =[
    [1,`Toyota`, `Corolla` , `Sedan` ,50 ,10],
    [2,`Honda`, `Civic` , `Sedan` ,55 ,8],
    [3,`Ford`, `Mustang` , `Sports Car` ,80 ,5],
    [4,`Jeep`, `Wrangler` , `SUV` ,70 ,7],
    [5,`Nissan`, `Altima` , `Sedan`,45,12]]

console.log(carBooking);

//1.print all car brands
console.log(` all car brands`);
carBooking.forEach(details => {
console.log(details[1])

});


console.log(`--------------------`);


//2.print total number of cars available

console.log(`print total number of cars available`);
total_cars=carBooking.map(cars=>cars[5]).reduce((a,b)=>a+b);
console.log(total_cars);
console.log(`--------------------`);

//3.print sedan details
console.log(`sedan details`);
sedan=carBooking.filter((cars)=>cars[3]=`sedan`)

console.log(sedan);
console.log(`--------------------`);


//4.print cars with price per day > 60
console.log(`cars with price per day > 60`);

price=carBooking.filter((cars)=>cars[4]>60)
console.log(price);

console.log(`--------------------`);

//5.details of jeep wrangler
console.log(`details of jeep wrangler`);
wrangler=carBooking.find(car=>car[2]==`Wrangler`)
console.log(wrangler);

console.log(`--------------------`);
//6. sort cars based on the descending order of the price per day

console.log(`sort cars based on the descending order of the price per day`);
carBooking.sort((a,b)=>b[4]-a[4]).forEach(car=>console.log(car[1]))
console.log(`--------------------`);

//7.sort cars based on ascending order of available cars

console.log(`sort cars based on ascending order of available cars`);
carBooking.sort((a,b)=>a[5]-b[5]).forEach(car=>console.log(car[1]))
console.log(`--------------------`);
//8.find the cars with most availability
console.log(`find the cars with most availability`);
most=carBooking.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(most[1]+` `+ most[2]);
console.log(`--------------------`);

//9.calculate the revenue if all the cars are rented for a day
console.log(`calculate the revenue if all the cars are rented for a day`);

//10.count the number of sedan cars

console.log(`count the number of sedan cars`);
count=0;
/* carBooking.forEach(cars=>{
if(cars[3]=`sedan`){
count++
}
})
console.log(count); */

/* sedan=carBooking.filter((cars)=>cars[3]=`sedan`)
console.log(sedan); */


//11.`car with highest availability`

console.log(`car with highest availability`);
highest=carBooking.reduce((a,b)=>a[5]>b[5]?a[1]:b[1])
console.log(highest);
console.log(`--------------------`);

//12.print all car brands

// 13. find the total number of available cars for all types
console.log(`find the total number of available cars for all types`);
total_cars=carBooking.map(cars=>cars[5]).reduce((a,b)=>a+b);
console.log(total_cars);
console.log(`--------------------`);


//14.car with least availability
console.log(`car with least availability`);
least=carBooking.reduce((a,b)=>b[5]>a[5]?a[1]:b[1])
console.log(least);

console.log(`--------------------`);

//15.check if there is any car with a price per day exactly 55

console.log(`check if there is any car with a price per day exactly 55`);
car=carBooking.some((price)=>price[4]==55 )
console.log(car?`yes`:`no`);