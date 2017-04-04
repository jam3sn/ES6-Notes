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
