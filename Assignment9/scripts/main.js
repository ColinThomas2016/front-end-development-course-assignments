<script>var myName="colin";


var elm=document.getElementById("partOne");
console.log(elm.innerHTML);

        elm.innerHTML = "colin";

        console.log(elm.innerHTML);
</script>

<script>
var foo= "This is not an integer";
var elm=document.getElementById("partTwo");
console.log(elm.innerHTML);

        elm.innerHTML = foo;

        console.log(elm.innerHTML);

</script>
<script>
var partThree="5";
partThree += 10;
partThree *= 14;
partThree -= 25;
var elm=document.getElementById("partThree");
console.log(elm.innerHTML);
        elm.innerHTML = "partThree";
        console.log(elm.innerHTML);

</script>
<script>
var fullName= "fName"" ""lName";
fullName= "fName"+""+"lName";
var elm=document.getElementById("partFour");
console.log(elm.innerHTML);
elm.innerHTML= "fullName";
console.log(elm.innerHTML);
</script>

<script>
var myHTML= "";
myHTML+= "<h2>Title</h2>";
myHTML+= "<p>Lorem ipsum dolor</p>";
myHTML+= "<h3>Pellentesque habitant morbi</h3>";
myHTML+= "<p>Morbi in sem quis dui placerat ornare. </p>";
document.write(myHTML);
var myHTML=document.getElementById("partFive");
console.log(elm.innerHTML);
</script>

<script>
var part6Number= "getRandomNumber";
var part6Result= " ";
if (part6Number > 50) {
part6Result= 'Above 50';
else {
  part6Result='Below or equal to 50';
}
document.getElementById("part6Number").innerHTML= "part6Number";
document.getElementById("part6Result").innerHTML= "part6Result";

}
</script>
<script>
var part7Number= "getRandomNumber";
var part7Result= " ";
if (part7Number < 25) {
  part7Result= 'below 25';
else if (part7Number >= 25 && part7Number < 50) {
  part7Result= 'Between 25 and 50';
else if (part7Number >= 50 && part7Number < 75) {
  part7Result= 'Between 50 and 75';
else {
  part7Result= 'Greater than 75';
}
document.getElementById("part7Number").innerHTML="part7Number";
document.getElementById("part7Result").innerHTML="part7Result";

}
}
}
}
</script>













var part6Number =getRandomNumber();

/**
 *      Part 7
 */
var part7Number = getRandomNumber();




////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
