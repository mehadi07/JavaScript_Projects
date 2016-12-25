var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
function search(lastName) {
var contactsLength = contacts.length;
for (var i = 0; i < contactsLength; i++) {
if(contacts[i].lastName === lastName) {
printPerson(contacts[i]);
};

};
};
search("Jones");

function add (firstName, lastName, email, phoneNumber){
    var newContact = new Object();
newContact.firstName = firstName;
newContact.lastName = lastName;
newContact.email = email;
newContact.phoneNumber = telephone;
contacts[contacts.length] = newContact;
};
var firstName = prompt("First Name:");
var lastName = prompt("Last Name:");
var email = prompt("Email:");
var phoneNumber = prompt("Telephone:");
add(firstName, lastName, email, phoneNumber);
list();