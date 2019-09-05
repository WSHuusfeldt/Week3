var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b
var all = boys.concat(girls);

//c
comma = all.join(', ')
hyphen = all.join(' - ')

//d
all.push('Lone', 'Gitte')

//e
all.unshift('Hans', 'Kurt');

//f
all.shift()

//g
all.pop()

//h
all.splice((all.length-1)/2, 2)

//i
all.reverse()

//j
all.sort()

//k


//l
upper = all.map(function(item){return item.toUpperCase()});

//m
onlyL = all.filter(function(item) {return item.startsWith('l') || item.startsWith('L')});

console.log(all)
console.log(upper)
console.log(onlyL)