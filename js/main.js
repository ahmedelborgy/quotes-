var index=document.getElementById('index');
var count=0,num;
var quoteOutput=document.getElementById('quoteOutput');
var authorOutput=document.getElementById('authorOutput');
var listQoute=[

  {
    author:'-- Marilyn Monroe', qoute:`
  “I'm selfish, impatient and a little insecure. I make
   mistakes, I am out of control and at times hard to handle.
    But if you can't handle me at my worst, then you sure as hell don'
    t deserve me at my best.” `},
    
  {
    author:'-- Albert Einstein', qoute:`
    Albert Einstein
    “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`},


    
  {
    author:'-- Frank Zappa', qoute:`
    “So many books, so little time.”`},
    
  {
    author:'-- Marcus Tullius Cicero', qoute:`
    “A room without books is like a body without a soul.” `},
    
  {
    author:'-- Bernard M. Baruch', qoute:`
    “Be who you are and say what you feel, because 
    those who mind don't matter, and those who matter don't mind.”`},
]













let arr=[];
function generateQuote(){

// index=Number(index)

num= Math.floor(  Math.random()*listQoute.length);
console.log(num)
arr.push(num);


if(num==arr[arr.length-2]){
  mxR()
 }
 
 else{
mx(num)
 }



}
function mx(n){
 index.innerHTML=n;
 quoteOutput.innerHTML=listQoute[n].qoute;
  authorOutput.innerHTML=listQoute[n].author;
 
}

function mxR(){
 
 console.log('count '+ count)
if(count ==0){
  index.innerHTML='6'
  quoteOutput.innerHTML=`“It is better to be hated for
   what you are than to be loved for what you are not.`;
  authorOutput.innerHTML='----route';
}
if(count >0){
  index.innerHTML='7'
  quoteOutput.innerHTML=`“Insanity is doing the same thing, over and over again, but
   expecting different results.”`;
  authorOutput.innerHTML='---- Anonymous';
}

count++;
if(count >=2){
  count=0;
}
  return 0;
}