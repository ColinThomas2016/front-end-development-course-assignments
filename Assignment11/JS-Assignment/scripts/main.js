var messages= [ "A","B","C"];
messages.shift("First Name is Required");
messages.push("Last Name is Required");
messages.shift.firsName("First Name is Required");
messages.push.lastName("Last Name is Required");
messages.push.emailAddress("Email is Required");

for ( firstName; lastName; emailAddress;) {
  document.getElementById("errorList").innerHTML=messages
}

var user = {
  firstName: "firstName";
  lastName: "lastName";
  emailAddress: "emailAddress";
  fullName: function(){
    return this.firstName + " " + this.lastName;
  };
};
  var user=true;
  if (user === true){ alert("Submitted")}
