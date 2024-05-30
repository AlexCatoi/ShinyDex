shine=[3,6,9,25,26,49,54,55,59,73,77,79,81,92,94,96,100,113,129,130,133,147,150,151
,179,183,184,187,197,198,203,205,212,214,215,218,228,231,232,234,242,243,244,245,249,250,251
,282,283,296,299,302,316,319,322,323,325,331,333,335,361,370,371,376,382,383,384,385
,396,403,404,405,415,416,417,418,430,437,438,440,442,447,453,478,479,480,481,482,483,487,489,490,491,492,493
,571,585,586,612,613,614,615,625,627,641,642,644,645,649
,656,661,662,663,664,667,668,669,670,671,672,673,679,692,701,707,712,713,714,716,717,718,719
,725,734,739,741,744,747,753,757,765,766,769,770,773,779,785,786,787,788,791,792,800,807,809
,819,820,821,833,834,837,838,839,854,857,861,875,876,888,889,890,894,895
,906,907,908,909,910,911,912,913,914,915,916,917,918,919,920,922,926,927,930,931,932,934,935,940,942,944,945,947,
952,955,957,963,964,965,966,968,970,971,972,974,975,976,977,978,979,981,982,983,984,985,986,988,989,990,991,992,993,1006,1009,1010]

nr=1
var diterator=0
var it=1;
var p=0;
let it1=0
var used=0
var used1=30
let data=new Array(1026);
let v=document.getElementById("ceva");
let text =document.getElementById("text");
let box=document.createElement("div");
box.setAttribute("id","box")

async function reading(){
for(d=it;d<used1+1 && d<1026;d++){
const res =await fetch('https://pokeapi.co/api/v2/pokemon/'+d)
const data1= await res.json();
data[d]=data1;
}
}

function init(){
    console.log(used1,it,used,it1)
    for( i=1;i<=30;i++){
        let mini= document.createElement("div");
        mini.classList.add("mini");
        for(var j=0;j<i;j++)
        {
            console.log(data[used+1].id)
                 let pict =document.createElement("img");
                 if(shine.includes(data[used+1].id))
                     pict.setAttribute('src',data[used+1].sprites.other.home.front_shiny)
                else
                    pict.setAttribute('src',data[used+1].sprites.other.home.front_default)
                 pict.classList.add("pict")
                  mini.append(pict);
                  used++;
                  break
        }
        box.append(mini);
    }
    v.append(box);
}

async function Pokes()
{
await reading();
await init();
}


function increment(){
    if(used1+30<=1050)
    { used1+=30
     it+=30
    }
     if(used==0)
         used+=30
}
function next(){
    if(used1<=1050)
    {
        it1=used
        console.log(used1,it,used,it1)
        let vechi=document.getElementById("box");
        vechi.remove()
        let box=document.createElement("div");
        box.setAttribute("id","box")

        for( var i=it1+1;i<=it1+30;i++){
             let mini= document.createElement("div");
             mini.classList.add("mini");
             if(i>1025)
                break;
            for(var j=0;j<i;j++)
            {

                
                        let pict =document.createElement("img");
                        if(shine.includes(data[i].id))
                            pict.setAttribute('src',data[i].sprites.other.home.front_shiny)
                        else
                            pict.setAttribute('src',data[i].sprites.other.home.front_default)    
                        pict.classList.add("pict")
                        mini.append(pict);
                        used++
                        break;
                        console.log(it,i)
            }
            box.append(mini);
        }
        text.innerHTML="Box "+ (used-29) + "-" + (used);
        v.append(box);
        console.log(data)
    }
else
console.log(data)
}


function decrement(){
    if(used-59>=0)
    {used1-=30
    it-=30
    }
}

function prev(){
    if(used-59>=0 )
    {
        it1=used-60
        let vechi=document.getElementById("box");
        vechi.remove()
        used-=60
        console.log(used1,it,used,it1)
        let box=document.createElement("div");
        box.setAttribute("id","box")
        for( var i=it1+1;i<=it1+30;i++){
             let mini= document.createElement("div");
             mini.classList.add("mini");
            for(var j=0;j<i;j++)
            {

                        let pict =document.createElement("img");
                        if(shine.includes(data[i].id))
                            pict.setAttribute('src',data[i].sprites.other.home.front_shiny)
                        else
                            pict.setAttribute('src',data[i].sprites.other.home.front_default)
                        pict.classList.add("pict")
                        mini.append(pict);
                        used++
                        break;
            }
            box.append(mini);
        }
        text.innerHTML="Box "+ (used+1) + "-" + (used+30);
        v.append(box);
    }
else if(used-30>=0)
    {
        used-=30;
        console.log(data)
    }
else
console.log(used1,it,used,it1)
}

async function nextB()
{
    increment();
    await reading();
    //console.log(data)
    await next();
}

async function prevB()
{
    decrement()
    await reading()
    await prev();
}

Pokes()