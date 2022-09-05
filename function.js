//=============================================
//============CODEWARS=TASKS===================
//=============================================

//=============================================
// function bmi(weight, height) {
    
//     let x = weight/height ** 2;
//     console.log(x)
//     if (x <= 18.5){ 
//       return "Underweight";
//     }
//     if (x <= 25.0){ 
//       return "Normal";
//     }
//     if (x <= 30.0){ 
//       return "Overweight";}
//     else{ 
//       return "Obese";
//     }
    
//   }

//  console.log(bmi(51, 164));

//=============================================

// function countBy(n, x) {
//   var arr=[];
//   for (var i=1; i<=x; ++i)
//     arr.push(n*i);
//   console.log(arr)
//   return arr;
// }

// countBy(1,10)

//=============================================

// function past(h, m, s){
//   let now = new Date();
//   h = now.getHours();
//   m = now.getMinutes();
//   s = now.getSeconds();
//   let z = (h * 60 + m) * 60 + s;
//   console.log(z)
//   return z;
 
//  }

//  past()

//=============================================

//  function Counter (num) {
//   let count = 0;
//  for (let i = 1;  i <= num;i++){
//    count += i;
   
//  }
//   return count;
  
// // }



// Counter(4)


//=============================================


// function getSum( a,b )
// {
//   let res = 0;
  
//    if (a===b)
//    {
//     let des = a = b;
//     console.log(des)
//     return des;
//    }
//   else 
//    {
// let min ;
// let max ;

     
//   if(a>b)
//      {
//       min = b;
//       max = a;
//      }
//      else{
//       max = b;
//       min = a;
//      }

     
     
//      for (let i=min;i<=max;i++)
//      {
//        res+=i;  
//      }
//    console.log(res)
//   return res
//   }
// }

//=============================================

// function findOdd(A) {
//   let count = 0;
//   let arr = A.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (count % 2 !== 0) {
//       return arr[i];
//     }
//   }
// }

//     XO("ooxMx")

//=============================================


// function find_average(array) {
//   var avg = array.reduce(function(sum,val){
//   return sum+=val;
//   },0);
//   if (array.length == 0){
//   return console.log(array.length)
//   }
//   return console.log(avg/array.length);
// }

// find_average([])


// ==============================
// function digitize(n) {
//   var str = String(n);
//   return str.split('').map(Number).reverse()
// }

// digitize(348597)



//=============================================


// function check(a, x) {
//   let ket
//   if (a.length == 0){
//   return false}
//   else {
//    a.map(function(x){
//     x.reduce(function(value,abc){
//       for (let i = 0; i < a.length; i++){

//       }
//     }) 
//    }
//    )

//   //  ket = a.fill(x , 0 , a.length)
//    console.log(a)
//    return true
//   }

// }
// check([2,3],[2,5,5])


//=============================================

// function anagrams(word, words) {
//   return words.filter(function(item){
//     return item.split('').sort().join('') === word.split('').sort().join('')
//   })
// }

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])



//=============================================
// function sumStrings(a,b) {
//   let res=((+a) + (+b)) ;
//   console.log(res) 
//   console.log(typeof res) 
//   return res;
// }

// sumStrings('2','5')

// function sumStrings(a){
//   let f = a.split(' ').join("");
//   console.log(f)
// }

// sumStrings(' 22 ff aa')

//=============================================

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
    
//     const min = Math.min(...args)
//     console.log(min)
//   }
// }
// findSmallestInt([34, 15, 88, 2])


//=============================================

// function isTriangle(a,b,c)
// {
   
//   if (( a + b) > c && (b + c) > a && ( a + c) > b){
//     console.log(true)
//     return true;
//   }
//   else{
//     console.log(false)
//    return false;
//   }
  
// }

// isTriangle(7,2,2)

//=============================================

// function disemvowel(str) {
//   var newStr = "";
//   for (i = 0; i <= str.length; i++) {
//     if (str.charAt(i) != "a" || str.charAt(i) != "e" || str.charAt(i) != "i" || str.charAt(i) != "o" || str.charAt(i) != "u") {
//       newStr += str.charAt(i)
//     }
//     return newStr;
//   }
// }


//=============================================

// function disemvowel(str) {
//   console.log( str.replace(/([a,e,i,o,u])/gi, ''));
// }

// disemvowel('This website is for losers LOL')


//=============================================  

// function rot13(message){
//   let key = message.
//   split('').
//   forEach(element => console.log(element.forEach().replace(/([element])/gi, ' ')))
// }

//=============================================

// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// rot13('losers LOL')
  
//=============================================

// function towerBuilder(nFloors) {
//   var space = "";
//   var star = "";
//   var result = [];
//   for (var i = 1; i <= nFloors; i++) {
//     space = (" ").repeat(nFloors - i);
//     star = ("*").repeat((2 * i) - 1);
//     result.push(space + star + space);
//   }
//   return result;
// }
// console.log(towerBuilder(8));

//=============================================

// function findShort(s) {
//   let kas = Math.min(...s.split(' ').map(word => word.length));
//   console.log(kas)
// }

// findShort("bitcoin take over the world maybe who knows pers")
//=============================================

// const reverseSeq = n => {
//   let rez=[]
//   for (let kas= n;kas>0;kas--){
//     rez.push(kas)
   
//   };
//   console.log(rez)
// };

// reverseSeq(5)

//=============================================

function duplicateCount(text){
  text = text.toLowerCase();
  var arrayOfCharacters = text.split("");
  let count = 0;
for (let i = 0; i<=text.length;i++)
{
  for (let k = 0;k<=text.length;i++){
    if (arrayOfCharacters[i]===arrayOfCharacters[k]){

    }
  }
}
}

duplicateCount('aabc')