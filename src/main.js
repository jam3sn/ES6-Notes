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

console.log(user);
