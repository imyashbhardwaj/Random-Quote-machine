var quotes=[{
  quote:"“Don't cry because it's over, smile because it happened.”",
  author:"- Dr. Seuss"
},
{
quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
  author:"- Marilyn Monroe"
  },
            {
quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
  author:"- Bernard M. Baruch"
  },
            {
quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.” ",
  author:"- William W. Purkey"
  },
            {
quote:"“A room without books is like a body without a soul.” ",
  author:"- Marcus Tullius Cicero"
  }];
$(document).ready(function(){
  $("#btn").on("click",function(){
   var i=Math.floor((Math.random()*5)+0);
    $("#quotext").html(quotes[i].quote+"<br><br><div align=right style='font-size:20px'>"+quotes[i].author+"<br></div>");
   });
});