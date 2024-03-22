// *********************** Chapter 21-25 PDF ***************************
document.write("<h1>Chapter 21-25 PDF</h1>")

// Q-1
var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName +" "+ lastName ;
document.write("Hello "+ fullName +"<br><br>");

// Q-2
var favMobile = prompt("Enter Your Fav Mobile");
document.write("My Fav Phone is: "+favMobile +"<br> Length of String: "+ favMobile.length+"<br><br>")

// Q-3
var string = "Pakistani";
var index = string.indexOf('n');
document.write("String: "+ string+"<br> Index of 'n': "+ index+"<br><br>");

// Q-4
var string = "Hello World";
var index = string.lastIndexOf('l');
document.write("String: "+ string+"<br> Last Index of 'l': "+ index+"<br><br>");

// Q-5
var string = "Pakistani";
var char = string.charAt(3);
document.write("String: "+ string+"<br> Character at index 3: "+ char+"<br><br>");

// Q-6
var txt = "Have a Nice Day..."
var result = firstName.concat(" ", lastName," ",txt);
document.write("Hello "+ result +"! <br><br>");

// Q-7
var text = "Hyderabad";
document.write("City: "+text+"<br> After replacement: " +text.replace("Hyder","Islam")+"<br><br>");

// Q-8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Message:" + message +"<br> After replacement: "+message.replaceAll("and","&")+"<br><br>");

// Q-9
var str = "472";
var num = parseInt(str);
document.write("String: "+str+"<br> Type: "+ typeof(str)+"<br> Value: "+ num +"<br> Type: "+typeof(num)+"<br><br>");

// Q-10
var userInput= prompt("Enter Your Value in lower case");
var userUpdate= userInput.toUpperCase();
document.write("User Input: "+ userInput+"<br> Upper Case: "+ userUpdate+"<br><br>");

// Q-11
var userInput= prompt("Enter Your Input");
var firstChar= userInput.slice(0,1).toUpperCase();
var secChar= userInput.slice(1).toLowerCase();
var userUpdate= (firstChar + secChar);
document.write("User Input: "+ userInput+"<br> Title Case: "+ userUpdate+"<br><br>");

// Q-12
var num= 35.36;
document.write("Number: "+ num +"<br> Result: "+ num.toString().replace(".","")+"<br><br>");

// Q-13
var userInput=prompt("Enter your UserName");
var specialSymbol=["@", ".", ",", "!"]
var string= userInput;
flag = false
for(var i=0 ; i < string.length; i++){
    if(specialSymbol.includes(string[i])){
        flag = true     
    }
}
if(flag){
    document.write("User Name: "+userInput+"<br> Please Enter Valid User Name with out "+ specialSymbol+"<br><br>")
}
else(
    document.write("User Name: "+userInput+"<br> Valid User Name <br><br>")
);

// Q-14
var arr= ["cake","apple pie","cookie","chips","patties"];
var userInput= prompt("What your Want from our Bakery");
var userUpdate= userInput.toLowerCase();
flag= false
for(var i=0 ; i < userUpdate.length; i++){
    if(userUpdate === arr[i]){
        flag = true 
    }
}
if(flag){
    document.write(userUpdate+" Is available in our bakery <br><br>")
}
else{
    document.write(userUpdate+" out of stock <br><br>")
};

// Q-15
var pass = prompt("Enter Your Password");
flag= false
for(var i = 0 ; i < pass.length; i++){
    if(pass.length < 6 || !isNaN(pass[0])){
        flag=true
    }
}
if(flag){
    document.write("Password: "+pass+"<br> Password can't begin with number and should be atleast 6 character long <br><br>")
}
else{
    document.write("Password: "+pass +"<br> Valid Password <br><br>")
}

// Q-16
var university = "University of Karachi";
var uniArr = university.split(" ");
for (var i = 0; i < uniArr.length; i++) {
    document.write(uniArr[i] + "<br><br>");
}

// Q-17
var userInput= prompt("Enter your Value");
var str= userInput.charAt(userInput.length-1);
document.write("User Input: "+ userInput+"<br> Last Character of Input: " +str+"<br><br>")

// Q-18
var string= "The quick brown fox jumps over the lazy dog.";
word="the";
var stringArr= string.toLowerCase();
var str= stringArr.split(" ");
var count = 0
for(var i=0 ; i < str.length ; i++){
    if(str[i] === word){
        count++;
    }
}
document.write("the occurrences of word the is:" + count+"<br><br>")

// ********************************************************************************

document.write("<h1>Chapter 21-25 PDF.docx</h1>")

// Chapter 21 (Changing Case)

// Q-1. 
var userInput= prompt("Enter Upper Case")
var allLower = userInput.toLowerCase();
document.write(allLower+"<br><br>")

// Q-2.
var x ="Hello World!"  
x = x.toLowerCase();
document.write(x+"<br><br>");

// Q-3. 
var y ="Hello World!"  
y = y.toUpperCase();
document.write(y+"<br><br>");

// Q-4.
var originalString = prompt("Enter Capital Value")
var lowerCaseString = originalString.toLowerCase();
alert(lowerCaseString);

// Q-5. 
var arrElement= prompt("Enter Upper Case")
var lowerCaseElement = arrElement.toLowerCase();
document.write(lowerCaseElement +"<br><br>")

// Q-6. 
var cityName= prompt("Enter Your City")
alert(cityName.toUpperCase());
document.write(cityName+"<br><br>")

// Q-7. 
var cityName = "kaRacHi";
cityName = cityName.slice(0,1).toUpperCase() + cityName.slice(1).toLowerCase();
document.write(cityName+"<br><br>")


// Chapter 22 - 25 (Strings)

// Q-1. 
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);
alert(slicedWord);

// Q-2. 
var x ="Hello World!"
var xLength = x.length;
console.log(xLength);

// Q-3. 
var animal = "elephant";
var seg = animal.slice(2, 6);
console.log(seg)

// Q-4. 
var str = "some string";
var strLength = str.length;
console.log(strLength);

// Q-5. 
var str = "some other string";
var length = str.length;
var slicedPart = str.slice(1,-3);
console.log(slicedPart)

// Q-6. 
var text = "To be or not to be.";
var indx = text.indexOf("be"); 

// Q-7. 
var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); 
console.log(indx)

// Q-8. 
var indx = text.lastIndexOf("go");
console.log(indx)

// Q-9. 
if (str.charAt(indexNum) !== "") {
}

// Q-10. 
var str = "abcde";
var characterAtIndex2 = str.charAt(3);

// Q-11. 
var cha = text.charAt(10);

// Q-12. 
var x = str.charAt(str.length - 1);

// Q-13. 
var cha = input.charAt(5);