window.onload=function()
{
   ex2();
   data();
   culoare();
}


function nume()
{ 
const element = document.getElementById("here");
const cssObj = window.getComputedStyle(element, null);
let bgColor = cssObj.getPropertyValue("background-color");
document.getElementById("despre").style.color = bgColor;

const foto1 = document.getElementById("im1").classList;
  foto1.add("myStyle");
const foto = document.getElementById("im2").classList;
  foto.add("myStyle");
}

function imagine1()
{ im1.src="queen7.jpg";
  im2.src="q3.jpg";
}

setInterval("imagine1()",2000);

function imagine2()
{   im1.src="queen3.jpg";
    im2.src="queen6.jpg";
}

setInterval("imagine2()",4000);

function ex2()
{ var nume=prompt("Care e melodia ta de la Queen preferata?");
  document.getElementById("p3").innerHTML="Melodia " + nume.toUpperCase() + " este o alegere excelenta!";
}

function data()
{const a = new Date();
  document.getElementById("p1").innerHTML = a.getFullYear();
  const l = new Date();
  document.getElementById("p2").innerHTML = l.getMonth()+1+"/";
  const z = new Date();
  document.getElementById("p4").innerHTML = z.getDate()+"/";
}

function culoare()
{   const culori=["#931D15", "#d0581c","#98a3a5"]
    var dimensiune=culori.length;
    var number=Math.floor(Math.random()*dimensiune);
    //document.getElementById("citat").innerHTML=citate[number];
    document.getElementById("despre").style.backgroundColor=culori[number];
}
