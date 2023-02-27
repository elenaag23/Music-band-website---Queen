window.onload=function()
{ex1();
}

function ex1()
{   const elem=document.getElementById("myh");
    elem.style.color="#931D15";
    const elem1=document.getElementById("myh1");
    elem1.style.color="#931D15";
    const elem2=document.getElementById("myh2");
    elem2.style.color="#931D15";
    const elem3=document.getElementById("myh3");
    elem3.style.color="#931D15";
    const elem4=document.getElementById("myh4");
    elem4.style.color="#931D15";
    const elem5=document.getElementById("myh5");
    elem5.style.color="#931D15";

}

function ex2()
{   localStorage.setItem("incheiere", "Recomand vizionarea filmului!");
    const para = document.createElement("li");
    para.innerText = localStorage.getItem("incheiere");
    document.getElementById("mydiv").appendChild(para);

    const element = document.getElementById("poza");
    element.remove();

}

const myTimeout = setTimeout(ex2, 5000);


