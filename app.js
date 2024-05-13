// define -> zarlana
function snu(ner,nas){
	console.log("Sain uu")
	console.log("Namaig "+ ner + " gedeg ")
	console.log("bi  "+ nas + " nastai ")
}
// call -> duudaj ajluulan
snu ("dyrrodt",28);
snu ("messant",26);
function niilber(too1,too2){
	console.log(too1+too2)
}
niilber (80,80);
niilber (50,26);
function kvadart(too1){
	console.log(too1*too1)
}
kvadart(80);
function nas(age){
	if(age>17){	
	console.log("nasand hursen");
}else{
	console.log("nasand hureegui");
}
}	
nas (18);
nas (10);
var span = document.getElementsByTagName('span')[0];
var tooloh=0;
function nemeh(){
	tooloh++;
	span.innerText=tooloh;
	span.style.color="green";
}
function ehleh(){
	tooloh=0;
	span.innerText=tooloh;
	span.style.color="black";
}	
function hasah(){
	tooloh--;
	span.innerText=tooloh;
	span.style.color="red";
}	