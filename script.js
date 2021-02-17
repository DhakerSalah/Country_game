function mousedown(txt){
	txt.style.color="red";
}

function mouseup(txt){
	txt.style.color="white";
}

function double() {
}

function ResForm() {
  alert ("Jouer de nouveau");
  window.location.reload();
}

function verif() {

	res=0;


    i1 = document.f1.s1.value;
    if  (i1 =="Azerbaïdjan"){
		res=res+1;
		document.f1.s1.style.background="#53c653";
	}else{
		document.f1.s1.style.background="#ff3333";}


	i2 = document.f1.s2.value;
	if	(i2 =="Turkménistan"){
		res=res+1;
		document.f1.s2.style.background="#53c653";
	}else{
		document.f1.s2.style.background="#ff3333";}


	i3 = document.f1.s3.value;
	if	(i3 =="Ousbékistan"){
		res=res+1;
		document.f1.s3.style.background="#53c653";
	}else{
		document.f1.s3.style.background="#ff3333";}


	i4 = document.f1.s4.value;
	if	(i4 =="Afghanistan"){
		res=res+1;
		document.f1.s4.style.background="#53c653";
	}else{
		document.f1.s4.style.background="#ff3333";}


	i5 = document.f1.s5.value;
	if	(i5 =="Pakistan"){
		res=res+1;
		document.f1.s5.style.background="#53c653";
	}else{
		document.f1.s5.style.background="#ff3333";}


	i6 = document.f1.s6.value;
	if	(i6 =="Tadjikistan"){
		res=res+1;
		document.f1.s6.style.background="#53c653";
	}else{
		document.f1.s6.style.background="#ff3333";}


	i7 = document.f1.s7.value;
	if	(i7 =="Kirghizistan"){
		res=res+1;
		document.f1.s7.style.background="#53c653";
	}else{
		document.f1.s7.style.background="#ff3333";}
	


	if((i1=="vide")||(i2=="vide")||(i3=="vide")||(i4=="vide")||(i5=="vide")||(i6=="vide")||(i7=="vide"))
		alert("Il faut sélectionner tous les choix" );
	else if(res != 7)
	alert("Vous avez " + res + " réponse(s) juste(s)");
	else alert("Félicitation , Vous avez répond au totalité de réponses");
	}
