
var container=document.createElement("div");

container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-5");
container.append(row);
async function dog(){
    let res=await fetch("https://random-words-api.vercel.app/word"); 
    let res1=await res.json();
console.log(res1);
row.innerHTML=`
<div class="card">
  <div class="card-header">
  <p><b>WORD:</b> ${res1[0].word}</p>
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p><b>Pronunciation:</b> ${res1[0].pronunciation}</p>
      <p><b>Definition:</b> ${res1[0].definition}</p>
    </blockquote>
  </div>
</div>
`;
document.body.append(container); 
    }
    dog();