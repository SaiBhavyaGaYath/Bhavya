// function Loadjson(file,callback){
// 	var Xhr  = new XMLHttpRequest();
// 	Xhr.overrideMimetype("application/json");
// 	Xhr.open("GET",file,true);
// 	Xhr.onreadystatechange=function(){
// 		if(Xhr.readyState===4&&Xhr.status=="200"){
// 			callback(Xhr.responseText);
// 		}
// 	};
// 	Xhr.send(null);                  
// }
// Loadjson("data.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.education);
// 	skillset(data.skill);
// 	Acheivementinfo(data.acheivements);

	



// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());


			}
			else{
				reject(new Error('error'));
			}

		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationinfo(data.education);
	skillset(data.skill);
	Acheivementinfo(data.acheivements);

})


var left=document.querySelector(".left");
function basics(det){
	var img=document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
	name1.textContent=det.name;
	left.append(name1);
	var phnno1=document.createElement("h3");
	phnno1.textContent=det.phnno;
	left.append(phnno1);
	var email=document.createElement("a");
	email.href="mailto:thokalabhavya99@gmail.com ";
	email.textContent=det.email;
    left.append(email);
	var address1=document.createElement("h2");
	address1.textContent="Address";
    left.append(address1);
    var line=document.createElement("hr");
    left.append(line);
    var ad=document.createElement("h3");
    ad.textContent=det.Address;
    left.append(ad);
    }
var right=document.querySelector(".right");
function careerinfo(info){
	var cobj=document.createElement("h2");
     cobj.textContent="career";
     right.append(cobj);
     var lin=document.createElement("hr");
    right.append(lin);
    var cr=document.createElement("h3");
    cr.textContent=info.infom;
    right.append(cr);
 }
 function educationinfo(edu){
 	var ed=document.createElement("h1");
 	ed.textContent="Educational Qualification";
 	right.appendChild(ed);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var table1=document.createElement("table");
    table1.border="1";
    right.appendChild(table1);
    tabledata="";
     for(i=0;i<edu.length;i++){
     	tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].Year+"</td><td>"+edu[i].percentage+"</td></tr>";
     	
     } 
     table1.innerHTML=tabledata;
 }      
function skillset(skill){
	var sk=document.createElement("h1");
	sk.textContent="Technical skills";
	right.appendChild(sk);
	for(i=0;i<skill.length;i++){
		var s=document.createElement("h3");
		s.textContent=skill[i].title;
		right.appendChild(s);

		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=skill[i].info;
		ul.appendChild(li);
		right.appendChild(ul);
	}
}
	function Acheivementinfo(acheive){
		var ac=document.createElement("h2");
		ac.textContent="Acheivements";
		right.appendChild(ac);
		var ln=document.createElement("hr");
        right.append(ln);
		for(i=0;i<acheive.length;i++) {

			var d=document.createElement("ul");
			var l=document.createElement("li");
		    l.textContent=acheive[i].a;
		   d.appendChild(l);
		   right.appendChild(d);
			

		}

		



	}
	function openpage()
	{
		window.open("resume.html","_self",true)
	}


