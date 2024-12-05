class User {

constructor(firstName,lastName,user,pass){

    this.firstName = firstName;
    this.lastName = lastName;
    this.user = user ;
    this.pass = pass;

};

}

let user1 = new User("Jose","Perez","josePerez","abc123");
let user2 = new User("Maria","Lopez","mariaLopez","def456");
let user3 = new User("Ricardo","Garcia","ricardoGarcia","ghi789");

let collection_users = new Array();
collection_users.push(user1);
collection_users.push(user2);
collection_users.push(user3);

function validateUser(username, password) {

    const user = collection_users.find(user => user.user === username);

    if (user && user.pass === password) {
        return true;
    } else {
        return false;
    }
}