var User = function User(username, email){
    this.username = username;
    this.email = email;
};

User.prototype.changeEmail = function changeEmail (newEmail){
    this.email = newEmail;
};

var user = new User('jam3sn', 'j@mesnewman.co');
user.changeEmail('me@jmail.com');

console.log(user);
