/*
----------------------------
  ES6
----------------------------
*/



/*
Method shorthand
----------------------------
*/
class myClass{

    function myFunc(){
        console.log('blah');
    }

    //Can now be:
    myFunc(){
        console.log('blah');
    }

}



/*
Arrows
----------------------------
*/
blah.forEach(function(item){
    console.log(item);
});

//Can now be:
blah.forEach(item => { //No () when a single value
    console.log(item);
});

blah.forEach((item, index) => { //Maintain () for multiple values
    console.log(item);
});

// Or even:
blah.forEach(item => console.log(item));



/*
Default values
----------------------------
*/
function skyColour(colour = 'blue'){ //Allows you to set a default value (like in php)
    console.log(color);
}

function skyColour(colour = defaultColour()){ //Can also use a function for the value
    console.log(color);
}



/*
Template strings
----------------------------
*/
let template = `
    <html>
        <head></head>
    </html>
`;                      //You can set a multi line string with indentation

//Also:
let name = 'James';
let sentance = `My name is ${name}`;



/*
Oject shorthand
----------------------------
*/
let name = 'John';
let age = '25';

return {name, age};
// is the same as:
return {'name': name, 'age': age};



/*
Object destructing
----------------------------
*/
let data = {
    name: 'jim',
    age: 32,
    results: [1, 2]
    count: 65
};

let { results, count } = data; //Would set the vars 'results' and 'count' from the object 'data'. Useful for AJAX returns

//Event cooler
ajaxFunction({ results, count}){ //Ajax function will only pass those values we want, rather than the whole object
    console.log(results, count);
}



/*
Classes
----------------------------
*/
class User{

    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    changeEmail(newEmail){
        this.email = newEmail;
    }

}

let user = new User('jam3sn', 'j@mesnewman.co');
user.changeEmail('me@jmail.com');



/*
Module Bundling
----------------------------
In order to use modules we MUST use a module bundler, otherise import errors out.
 - Rollup
 - Webpack
 - Gulp
*/


/*
Modules
----------------------------
Allows you create module files, and then import them.
by using 'default' after 'export', it becomes the default import, therefore {} arent necessary.
Module file (MyClass.js):
*/
export class MyClass{

    constructor(stuff){
        this.stuff = stuff;
    }

    dump(){
        console.log(this.stuff);
    }

}

export let foo = 'bar';

//Main file:
import { MyClass, foo } from './MyClass';]

new MyClass('cake').dump(); //Would console log 'cake'
console.log(foo); //Would console log 'bar'



/*
Promises
----------------------------
Placeholder for a future action.
*/
var myAjaxFunc = new Promise(function(resolve, reject) {
        //All good, return
        resolve();

        //error
        reject();
});

var promise = this.myAjaxFunc('/path/to/somewhere');

//Note to run the promise, you need to run .then()
promise.then(function(data) {
    //Do something when myAjaxFunc returns
}, function(err) {
    //Catch error
});



/*
String additons
----------------------------
*/
//.includes is a goo alt for .indexOf
if (mySting.includes('Hello')){
    console.log('It includes Hello')
}
/*
Can also use:
.startsWith()
.endsWith()
.repeat(x)
*/
['foo', 'bar'].includes('bar');



/*
Arrays
----------------------------
*/
[2,4,6,8,10].find(function(item) {
    return item === 8; //Returns true
    return item > 5; //Returns 6 because it's the next val
});

/*
[].findIndex() returns the index key for the array item
[].fill()
[].keys()
[].values()
[].entries() //Returns key, val
*/



/*
Generators
----------------------------
Pauses between yields. So when you call .next() on it, it'll do 1, pause, call again will get 2 etc.
*/
function *numbers(){
    yield 1;

    yield 2;

    yield 3;
}

let iterator = numbers();

console.log(iterator.next()) //1
console.log(iterator.next()) //2
console.log(iterator.next()) //3

for (let i of iterator) console.log(i) //This would log 1,2,3

console.log(
        [...numbers()]
); //This would log an array with 1,2,3


/*
Sets
----------------------------
*/
var people = ['James', 'Jane', 'James'];

console.log(new Set(people)); //Would removw the duplicate James. Only returning an object with 2 unique values
