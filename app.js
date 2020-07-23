// <!-- chap 38 to 42 -->

// -------Task 1--------

// var a,b,value;
// alert("enter the value of a and b: ");
// a=+prompt("enter integer")
// b=+prompt("enter power")
// function power(a,b){
//     var i,value;
//     value=a;
//     for(i=1;i<b;i++)
//     {
//     value=value*a;
//     }
//     return value;
//     }
    
// value=power(a,b);
// alert("the value of "+a+" raised to"+b+" =  is "+value);

// -------Task 2--------

// var year;
// alert( "Enter a year: ");
// year =+ prompt("enter year");

// if (year % 4 == 0)
// {
//     if (year % 100 == 0)
//     {
//         if (year % 400 == 0)
//             alert( " is a leap year.");
//         else
//             alert( " is not a leap year.");
//     }
//     else
//         alert( " is a leap year.");
// }
// else
//     alert( " is not a leap year.");

// -------Task 3--------


//     var a, b, c, s, area;
//     a=+prompt("Enter a")
//     b=+prompt("Enter b")
//     c=+prompt("Enter c")
 
// function s(){

//     s = (a+b+c)/2;
 
// }
//     function area(){  
//     area = s*(s-a)(s-b)(s-c);
// return area;    
// }
//   s();
// alert(s)
//   var ar=area();
//     alert("Area of Triangle:"+ar);
   

// -------Task 4--------

// function main(){
//     var  total=prompt("Enter the totsl marks received by the student in 3 subjects :");
//     function avg()
//     {
//      var avg =total / 3;
//      alert("average"+avg)
        
//     }

//     avg();


//     function per(){
// var perc = (total/300)*100;
//         alert("percentage"+perc)
//     }
//     per();
    
// }
// main();

// -------Task 5--------


// function index_Of(word,character) 
// {
//     for (var i = 0; i < word.length; i++) 
//     {
//       if (word[i] === character) 
//       {
//         return i;
//       }
//     }
//     return -1;
//   }

// alert(index_Of("hareem","m"));

//chap=43-48


//task4
// function changePic1() {
//   document.getElementById("myImg").src = "tulips.jpg";
//      }
//     function changePic22(){
//      document.getElementByID("myImg").src = "jellyfish.jpg";
//      }

//Task5
// var button = document.getElementById("clickme"),
//   count = 0;
// button.onclick = function() {
//   count += 1;
//   button.innerHTML = "Click me: " + count;
// };
