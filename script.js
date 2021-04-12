var display = document.body.querySelector(".display");
var nav = document.body.querySelector(".nav");
var pages = [
  {
    name:"Home",
    content:""
  },
  {
    name:"About",
    content:"Caleb Lawrence"
  },
  {
    name:"View",
    content:"none"
  
  },
]

var list = []



function validate(){
  var display = document.body.querySelector(".display");
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
  
  
  if(username==="coolStudent123"){
   var userremove = document.getElementById("username");
   userremove.remove();
   var valremove = document.getElementById("validate");
   valremove.remove();
   for(var i = 0; i<pages.length; i++){
     createPage(pages[i]);
    }
    contentWrite(pages[0].content, "Home");
  }
  else{
    messEle.innerHTML="Incorrect Username!"
  }
}
document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})






function createPage(pg){
  
  var display = document.body.querySelector(".display");
  var button = document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name)
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  var header = document.createElement("h1");
  var h3 = document.createElement("h3");
  display.innerHTML="";
  if(pg!=="View"){
    header.innerHTML=pg;
    h3.innerHTML=wd;
    display.appendChild(header);
    display.appendChild(h3);
  }
  else {
    
    viewPage()
    
  }
  
}


function viewPage(){
  var button = document.createElement("button");
  
  button.innerHTML="Insert";
  var text = document.createElement("input");
  text.setAttribute("type", "text");
  text.setAttribute("name", "text");
  text.setAttribute("placeholder", "Enter Text");
 
  var number = document.createElement("input");
  number.setAttribute("type", "number");
  number.setAttribute("name", "number");
  number.setAttribute("placeholder", "Enter Number");
  
  display.appendChild(text);
  display.appendChild(number);
  display.appendChild(button);
  
  button.addEventListener("click", function(){
    submit(text, number)
  })
  
 
}

function submit(text, number){
  var text=document.body.querySelector(".text").value;
  var number=document.body.querySelector(".number").value;
  
  if(text.length>=2){
    document.body.querySelector(".subMess").innerHTML="";
    list.push(text, number);
    renderItems();
  }
  else{
    document.body.querySelector(".subMess").innerHTML="Not enough letters";
  }
  
  
}

function renderItems(){
  document.body.querySelector(".display").innerHTML="";
  for(var  i = 0; i<list.length; i++){
    var ele=document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}