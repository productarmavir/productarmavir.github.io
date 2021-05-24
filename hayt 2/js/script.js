let a=false
function tt(){
	if(a==false){
		document.getElementById("TT_drop").classList.remove("d-none")

a=true
	}else if(a==true){
		document.getElementById("TT_drop").classList.add("d-none")
a=false
	}
}
let b=false
function hashv(){
	if(b==false){
		document.getElementById("hash_drop").classList.remove("d-none")
b=true
	}else if(b==true){
		document.getElementById("hash_drop").classList.add("d-none")
b=false
	}
}

	let weeb=document.querySelectorAll(".web")
	let ph=document.querySelectorAll(".photo")
	let app=document.querySelectorAll(".app")
	let hash=document.querySelectorAll(".hashvapah")
	let aud=document.querySelectorAll(".audit")
	let t=false
function web(){
		for(let i=0;i<weeb.length;i++){
	weeb[i].classList.remove('d-none')
}
if(t==false){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.add('d-none')
}
for(let i=0;i<app.length;i++){
	app[i].classList.add('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
t=true
}else if(t==true){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.remove('d-none')
}
for(let i=0;i<app.length;i++){
	app[i].classList.remove('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
t=false
}

}
let u=false
	function photo(){
		for(let i=0;i<ph.length;i++){
	ph[i].classList.remove('d-none')
}
if(u==false){
	for(let i=0;i<app.length;i++){
	app[i].classList.add('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.add('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
u=true
}else if(u==true){
	for(let i=0;i<app.length;i++){
	app[i].classList.remove('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.remove('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
u=false
}

}


let p=false
	function appp(){
		for(let i=0;i<app.length;i++){
	app[i].classList.remove('d-none')
}
if(p==false){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.add('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.add('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
p=true
}else if(p==true){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.remove('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.remove('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
p=false
}

}

	let l=false
	function hashvapah(){
		for(let i=0;i<hash.length;i++){
	hash[i].classList.remove('d-none')
}
if(l==false){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.add('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.add('d-none')
}
// for(let i=0;i<hash.length;i++){
// 	hash[i].classList.add('d-none')
// }
for(let i=0;i<aud.length;i++){
	aud[i].classList.add('d-none')
}
	for(let i=0;i<app.length;i++){
	app[i].classList.add('d-none')
}
l=true
}else if(l==true){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.remove('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.remove('d-none')
}
	for(let i=0;i<app.length;i++){
	app[i].classList.remove('d-none')
}
// for(let i=0;i<hash.length;i++){
// 	hash[i].classList.add('d-none')
// }
for(let i=0;i<aud.length;i++){
	aud[i].classList.remove('d-none')
}
l=false
}

}

	let r=false
	function audit(){
		for(let i=0;i<aud.length;i++){
	aud[i].classList.remove('d-none')
}
if(r==false){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.add('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.add('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.add('d-none')
}
// for(let i=0;i<aud.length;i++){
// 	aud[i].classList.add('d-none')
// }
	for(let i=0;i<app.length;i++){
	app[i].classList.add('d-none')
}
r=true
}else if(r==true){
	for(let i=0;i<ph.length;i++){
	ph[i].classList.remove('d-none')
}
for(let i=0;i<weeb.length;i++){
	weeb[i].classList.remove('d-none')
}
	for(let i=0;i<app.length;i++){
	app[i].classList.remove('d-none')
}
for(let i=0;i<hash.length;i++){
	hash[i].classList.remove('d-none')
}
// for(let i=0;i<aud.length;i++){
// 	aud[i].classList.remove('d-none')
// }
r=false
}

}
let redd=document.querySelectorAll(".read")
for(let j=0;j<redd.length;j++){

redd[j].addEventListener("click",readd)
console.log(redd)
	redd[j].id="id"+j;	
	console.log(redd[j].id)
}
let q=false
 function readd(){
 	console.log("ok")
 	let kesh=+this.id.slice(2)
 	 localStorage.removeItem("num")
 localStorage.setItem("num",kesh)
 	console.log(kesh)
 	window.location.assign("file:///C:/Users/Admin/Desktop/hayt%202/article.html")	
q=true
 }




