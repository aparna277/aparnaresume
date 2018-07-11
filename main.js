//function getfile(file,callback) {
  //var xhr = new XMLHttpRequest();
  //xhr.overrideMimeType("application/json");
  //xhr.open("GET",file,true);
  //xhr.onreadystatechange = function(){
    //if(xhr.readyState === 4 && xhr.status == "200"){
      //callback(xhr.responseText);
    //}
  //};
  //xhr.send(null);
//}
//getfile("file.json",function(text){
  //var data = JSON.parse(text);
  //console.log(data);
//})
function loadJSON(file){
return new Promise((resolve,reject)=>{
  return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }else{
      reject(new Error('error'));
    }
  })
  })
}
var newFile=loadJSON("data.json")
newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  achievements(data.achievements);
  })
  var childtwo=document.querySelector(".childtwo");
  function career(obj){
    var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var careerP=document.createElement("p");
  careerP.textContent=obj.info;
  careerHeading.appendChild(careerP);
    }
  function education(edu){
      var eduHeading=document.createElement("h2");
    eduHeading.textContent="Education details";
    childtwo.appendChild(eduHeading);
    var hr=document.createElement("hr");
    childtwo.appendChild(hr);
    for(var i=0; i<edu.length; i++){
      var eduH3=document.createElement("h3");
      eduH3.textContent=edu[i].degree;
      childtwo.appendChild(eduH3);
    var eduU1=document.createElement("ul");
    var eduLi=document.createElement("li");
    eduLi.textContent=edu[i].institute;
    eduU1.appendChild(eduLi);
    childtwo.appendChild(eduU1);
    var eduU2=document.createElement("ul");
    var eduFi=document.createElement("li");
    eduFi.textContent=edu[i].data;
    eduU2.appendChild(eduFi);
    childtwo.appendChild(eduU2);

  }

    }
    function skills(skillInfo){
      var careerHeading=document.createElement("h2");
      careerHeading.textContent="Technical Skills";
      childtwo.appendChild(careerHeading);
      var hr=document.createElement("hr");
      careerHeading.appendChild(hr);
      var skillTable=document.createElement("table");
      childtwo.appendChild(skillTable);
      skillTable.border="1";
      var tableData="";
      for(var i=0;i<skillInfo.length;i++)
{
      tableData+="<tr><td>"+skillInfo[i].title+"</td><td>" +skillInfo[i].info+"</td></tr>";
        }
        skillTable.innerHTML=tableData;
}
function achievements(ach){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Achievements";
  childtwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
  careerHeading.appendChild(hr);
  var u1=document.createElement("u1");
  childtwo.appendChild(u1);
  var li="";
  for(var i=0;i<ach.length;i++){
    li="<li>"+ach[i].achieveData+"</li>";
    console.log(li);
    u1.innerHTML=li;
  }

  }
