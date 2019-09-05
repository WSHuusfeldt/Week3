//#region 
function add(n1, n2) {
    return n1 + n2;
}

var sub = function (n1, n2) {
    return n1 - n2
}

var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

/*
//Opgave 2)
console.log( add(1,2) )     // Printer 3
console.log( add )          // Printer referencen, dermed vil funktionen blive printet
console.log( add(1,2,3) ) ; // Printer 3, JS ignorerer den sidste parametre
console.log( add(1) );	    // Printer NaN da funktionen ikke har alle parametre	
console.log( cb(3,3,add) ); // Printer 3 + 3 = 6
console.log( cb(4,3,sub) ); // Printer 4 + 3 = 1
console.log(cb(3,3,add())); // Printer 3 + 3 = NaN, fordi funktionen kaldes på ny uden at referere over til n1 og n2
console.log(cb(3,"hh",add));// Printer 3 + hh = 3hh
*/
// Opgave 3)
var cb = function (n1, n2, callback) {
    try {
        if (typeof n1 === 'number' && typeof n2 === 'number' && typeof callback === 'function')
            return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
        else {
            throw new Error('Whoops!');
        }

    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
}

//Opgave 4
var mul = (function (n1, n2) { return n1 * n2 })

// Opgave 5
console.log(cb(2, 3, (n1, n2) => n1 / n2));
//#endregion

//#region Callbacks //
// Getting comfortable with filter, map and forEach //
// Opgave 1
var names = ['William', 'Andreas', 'Martin', 'Asger', 'Bo'];
longNames = names.filter((item) => item.length >= 3);
//console.log(longNames);

// Opgave 2
upperNames = names.map((item) => item.toUpperCase());
//console.log(upperNames);

// Opgave 3
var arrayToHtml = function (x) {
    html = '<ul>'
    x.forEach(element => {
        html += '<li>' + element + '</li>'
    });
    return html + '</ul>'
}
//console.log(arrayToHtml(names))


// Opgave 4
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];  

var newerCars = cars.filter((item) => item.year > 1999)
var volvos = cars.filter((item) => item.make === 'Volvo')
var cheapCars = cars.filter((item) => item.price < 5000)


// Funktion for year (GUL)
var newCars = function(age) {
 	return cars.filter((item) => item.year < age)   
}

// Funktion for make (GUL)
var carMake = function(brand) {
 	return cars.filter((item) => item.make === brand)   
}

// Funktion for price (GUL)
var carPrice = function(cost) {
 	return cars.filter((item) => item.price < cost)   
}

// Switch (RØD)
var carWhatever = function(type, text) {
    switch(type) {
        case "year" : 
            return cars.filter((item) => item.year < text);
        case "make" :
            return cars.filter((item) => item.make === text);
        case "price" :
            return cars.filter((item) => item.price < text);
    }
}
//#endregion

//#region Asynchronous Callbacks //
// Opgave 1 + 2
// A, D, F, E, B

// var msgPrinter = function (msg, delay) {
//     setTimeout(function () {
//         console.log(msg);
//     }, delay);
// };
// console.log("aaaaaaaaaa");
// msgPrinter("bbbbbbbbbb", 2000);
// console.log("dddddddddd");
// msgPrinter("eeeeeeeeee", 1000);
// console.log("ffffffffff");

//#endregion

//#region JavaScript Objects //
// Opgave 1
var music = { name: 'Justice', members: 2, genre: 'Electronic', album: 'Cross' };

for (x in music) {
//     console.log(x, music[x]);
}

delete (music.name);
music.name = 'Daft Punk';
Object.assign(music, {country: 'France'});
// console.log(music)


// Opgave 2
function Person(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.details = function() {
        return this.fName + ' ' + this.lName + '. Age: ' + this.age;
    }
}

myFather = new Person('Bjarne', 'Sehested', 60);

// console.log(myFather.details());
//#endregion