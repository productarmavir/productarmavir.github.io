let a=document.querySelectorAll(".bt2")
for(let i=0;i<=a.length;i++){
	a[i].addEventListener("mouseover",f)
		a[i].id="id"+i
}

function f(){

let c=+this.id.slice(2)

let o=["height:460px","height:390px","height:320px","height:250px","height:180px","height:110px","height:40px"]
document.getElementById("slaq").style=o[c]

}



function d(){
$("#first").toggleClass("d-block")
$("#slaq").toggleClass("d-block")
}
