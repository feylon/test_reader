
// ozgaruvchilarni elon qilish

 
let form = document.querySelector("form") ;
let parentsector = document.querySelector(".parentsector");
let ul =document.querySelector("ul");
let addme = document.querySelector(".addme");
let n;
let start = false ;
let minut;
let second = 60;


// *ozgaruvchilarni elon qilish


// ochiq funksiya chaqiruvlari
createnewarray();
showtasks()





// *ochiq funksiya chaqiruvlari


//yangi arrayni localstoragega saqlash
function createnewarray(){
 
  let save = localStorage.getItem("save");
  if(save != null){
  let newarray1 = randomer(JSON.parse(save).length);
  //n = Number (prompt("Testlar sonini kiriting"));
 n =  Number (prompt("Nechta savoldan iborat bo'lsin ?"));
 if(typeof(n) != "number" && n < 0)window.location="index.html"; 
 
 if( n > newarray1.length)n = newarray1.length
  minut = n;
  newarray1 = newarray1.slice(0,n)
  // console.log(newarray1) ;
  
  // console.log(JSON.parse(save))
  let newarray2 = [];
  for(let i = 0 ;i  <  n; i++){
    //newarray2.push(newarray1[i])
   // console.log(JSON.parse(save)[newarray1[i]]);
newarray2.push(JSON.parse(save)[newarray1[i]]) ;
 //console.log(newarray2);
  }
  localStorage.setItem("save1",JSON.stringify(newarray2));}

}

//*yangi arrayni localstoragega saqlash



//savollarni ekranga chiqarish
function showtasks(){
    
    let save = localStorage.getItem("save");
    
    if(save == null){
        let  ques = [] ;
        console.log(404);
        start = false;
       
    }
    else {
    parentsector.innerHTML='';
    ul.innerHTML ='';
    let save1 = localStorage.getItem("save1");
    let ques = JSON.parse(save1) ;

   
 
    
      ques.forEach((i,j) => {
        let newarray = randomer(4);
   
        let avariant =`<div class="variant pt-2  d-flex">
                <input onclick="reactive(${j})" class="form-check-input avariant" type="radio" name="${i.savol}${i.j}" id="${i.a+j}" value="option1">
                 <label onclick="reactive(${j})" class="form-check-label " for="${i.a+j}">  ${i.a}</label>
               </div>`;
               
        let bvariant = `<div class="variant pt-2  d-flex">
                  <input onclick="reactive(${j})" class="form-check-input bvariant" type="radio" name="${i.savol}${i.j}" id="${i.b+j}" value="option1">
                   <label onclick="reactive(${j})" class="form-check-label " for="${i.b+j}">${i.b}</label>
                 </div>` 
         let cvariant =  `<div class="variant pt-2  d-flex">
                 <input onclick="reactive(${j})" class="form-check-input cavariant" type="radio" name="${i.savol}${i.j}" id="${i.c+j}" value="option1">
                  <label onclick="reactive(${j})" class="form-check-label " for="${i.c+j}">${i.c}</label>
                </div>`       
         let dvariant = `<div class="variant pt-2 d-flex">
                 <input onclick="reactive(${j})" class="form-check-input dvariant" type="radio" name="${i.savol}${i.j}" id="${i.d+j}" value="option1">
                  <label onclick="reactive(${j})" class="form-check-label " for="${i.d+j}">${i.d}</label>
               </div>`  
               
               
               if(i.a == "") avariant='';
               if(i.b == "") bvariant='';
               if(i.c == "") cvariant='';
               if(i.d == "") dvariant='';
     
     
            
        let newarray1 = [];
        
        newarray1[newarray[0]] = avariant;
        newarray1[newarray[1]] = bvariant;
        newarray1[newarray[2]] = cvariant;
        newarray1[newarray[3]] = dvariant;
           
        let section1 = `<div id="savolid${j}" class="sector ps-3 pb-2 p-3">
       
        <div  class="savol mt-1 mb-1 pb-2"> ${j+1}.
        ${i.savol}
         </div>`
     
         let section2 = ` <div>
     
         </div>
       
       
       </div>`
        
        
        let section = `
        ${section1}
        
       
       ${newarray1[0]}
     
     
       ${newarray1[1]}
       
       
       
       ${newarray1[2]}
     
     
       ${newarray1[3]}
     
     
     
      
        `
        parentsector.innerHTML += section;
           
        
        let ahref = `<a style=" text-decoration: none;"  href="#savolid${j}"> <li class="savolid${j}">${j+1}</li></a>`
        
     ul.innerHTML += ahref;
     
         });
         start = true;
     
}

}

//*savollarni ekranga chiqarish



//savollarni belgilanganini bildirish
function reactive(a){
  checked = document.querySelector(`.savolid${a}`);
  checked.classList.add("checked") ;
}
//*savollarni belgilanganini bildirish





// file iconkasini bosgandagi event
let fileread = document.querySelector(".file") ;

document.querySelector(".fa-folder").addEventListener("click",()=>{
  fileread.click();
})
// * file iconkasini bosgandagi event

//Faylni yuklash
var fr = new FileReader();
fr.onload = function() {
  try
  {console.log(JSON.parse (this.result));
  
  localStorage.setItem("save",this.result);
window.location = "index.html"
 }

  catch(err){
    alert("Fayl ochishda xatolik");
   window.location = "index.html" ;
  } showtasks();
}
fileread.onchange = function() {
   fr.readAsText(this.files[0]);
}
//  *Faylni yuklash
let action = document.querySelector(".action");
let yakunlash = document.querySelector(".yakunlash");
let avariantcheck = document.querySelectorAll(".avariant");
let radio = document.querySelectorAll(`.form-check-input`);
let caption = document.querySelector(".yakunlash")



caption.addEventListener("click",()=>{

  
 if(confirm("Testni tugatasizmi ?"))
  {yakunlash.classList.add("d-none")
     let s = 0;
  radio.forEach((i)=>{
    i.setAttributeNode(document.createAttribute("disabled"))
    i.nextElementSibling.setAttributeNode(document.createAttribute("disabled"));
    i.nextElementSibling.removeAttribute("onclick")
    i.removeAttribute("onclick"); 
  })
 
 avariantcheck.forEach((i)=>{
  if(i.checked == true)s++;
  i.nextElementSibling.classList.add("correct")
  i.setAttributeNode(document.createAttribute("disabled"))
  i.nextElementSibling.setAttributeNode(document.createAttribute("disabled"));
  i.nextElementSibling.removeAttribute("onclick")
  i.removeAttribute("onclick");
 })


 let ball = ((s / n) * 100).toFixed(1) ;
 let innerball = `<p>${ball} %</p>`;
 let savollar = n;
 let result ;
 if(ball >= 60 )
   result = `<p class="text-success">Testdan o'tdi</p>`;
  else
   result = `<p class="text-danger">Testdan yiqildi</p>`;
 
 let  natija = document.querySelector(".natija");
   natija.classList.remove("d-none") ;


 let   natija1 = document.querySelector(".natija1");
 natija1.innerHTML = `${innerball} <p>${n}</p>${result}`;
 clearInterval(vaqt);

}




} )



// random funksiya
function randomer(myinteger){
 
    let a = [];
  for( let i = 0; i < myinteger;){
      let newrandom = Math.trunc(Math.random()*myinteger );
      if(!a.includes(newrandom)){
          a.push(newrandom);i++;
      }
    
  }
  
  return a;
  }
  

//*random funksiya

/*Timerni hisoblash*/
let vaqt =setInterval(() => {
  let save = localStorage.getItem("save");
  if(start && save != null){
second--;
if (second < 0){minut--;
second = 59}
 }
 
 




 if(minut == 0 && minut < 0){
  document.querySelector(".hredfw").innerHTML =`Test mavjud emas`;
  yakunlash.classList.add("d-none");
  clearInterval(vaqt)
}
 
if( second % 2 == 0)
document.querySelector(".hredfw").innerHTML=(`${minut} : ${second}`)

 else 
 document.querySelector(".hredfw").innerHTML=(`${minut}  &nbsp ${second}`)
 if(second == 0 && minut == 0){
  
  clearInterval(vaqt);
  
  { let s = 0;
    radio.forEach((i)=>{
      i.setAttributeNode(document.createAttribute("disabled"))
      i.nextElementSibling.setAttributeNode(document.createAttribute("disabled"));
      i.nextElementSibling.removeAttribute("onclick")
      i.removeAttribute("onclick"); 
    })
   
   avariantcheck.forEach((i)=>{
    if(i.checked == true)s++;
    i.nextElementSibling.classList.add("correct")
    i.setAttributeNode(document.createAttribute("disabled"))
    i.nextElementSibling.setAttributeNode(document.createAttribute("disabled"));
    i.nextElementSibling.removeAttribute("onclick")
    i.removeAttribute("onclick");
   })
  
  
   let ball = ((s / n) * 100).toFixed(1) ;
   let innerball = `<p>${ball} %</p>`;
   let savollar = n;
   let result ;
   if(ball >= 60 )
     result = `<p class="text-success">Testdan o'tdi</p>`;
    else
     result = `<p class="text-danger">Testdan yiqildi</p>`;
   
   let  natija = document.querySelector(".natija");
     natija.classList.remove("d-none") ;
  
  
   let   natija1 = document.querySelector(".natija1");
   natija1.innerHTML = `${innerball} <p>${n}</p>${result}`;
   yakunlash.classList.add("d-none")
  
   
  }


  
 }
}, 1000);


/* **Timerni hisoblash*/
