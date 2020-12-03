var bdd = 
    {usr1:'Bob', mdp1:'bob01',
    usr2:"arnaud", mdp2:"ville",
    usr3:"maxime", mdp3:"chouraqui"}

let utilisateur = document.getElementById('utilisateur')
let mdp = document.getElementById('mdp')
let boutonconnect = document.getElementById('boutonconnexion')
let boutondeconnect = document.getElementById('boutondeconnexion')


function connexion(){
    if ((utilisateur.value  == bdd.usr1) && (mdp.value == bdd.mdp1)){
        document.getElementById('formconnexion').style.display='none'
        boutondeconnect.style.display="block"
        localStorage.setItem('connexion','1')
    }
    else if ((utilisateur.value  == bdd.usr2) && (mdp.value == bdd.mdp2)){
        document.getElementById('formconnexion').style.display='none'
        boutondeconnect.style.display="block"   
        localStorage.setItem('connexion','1')  
        }
    else if ((utilisateur.value  == bdd.usr3) && (mdp.value == bdd.mdp3)){
        document.getElementById('formconnexion').style.display='none'
        boutondeconnect.style.display="block"   
        localStorage.setItem('connexion','1') 
    }    
    else{
        document.getElementById('msgerreur').style.display='block'
    }  
}

function testconnexion(){
    if (localStorage.getItem('connexion') == '1'){
        boutonconnect.style.display='none'
        boutondeconnect.style.display='block'
    }
}
testconnexion()

let dateajd=new Date();
let datedepart=document.getElementById('datedépart');
let dateretour=document.getElementById('dateretour');
datedepart.min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
dateretour.min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+(dateajd.getDate()+1);

let nbadulte=document.getElementById('nbadulte');
let nbenfant=document.getElementById('nbenfant');

class destination {
    constructor(id,img,prix,nom){
        this.id=id;
        this.img=img;
        this.prix=prix;
        this.nom=nom;
        
    }
}

let lyon= new destination('1',"../Medias/Lyon.jpg",100,'Lyon');
let berlin= new destination('2',"../Medias/Berlin.jpg",200,'Berlin');
let barcelone= new destination('3',"../Medias/Barcelone.jpg",250,'Barcelone');
let sf= new destination('4',"../Medias/SF.jpg",400,'San Francisco');
let jakarta= new destination('5',"../Medias/Jakarta.jpg",350,'Jakarta');
let tokyo= new destination('6',"../Medias/Tokyo.jpg",400,'Tokyo');
let us= new destination('7',"../Medias/US.jpg",1300,'Road trip US');
let nord= new destination('8',"../Medias/Nord.jpg",900,'Pays du nord');
let safari= new destination('9',"../Medias/safari.jpg",1000,'Safari');
let asie= new destination('10',"../Medias/Asie.jpg",1200,'Road trip Asie');
let prixcroissant= [lyon,berlin,barcelone,jakarta,sf,tokyo,nord,safari,asie,us];
let prixdecroissant= [us,asie,safari,nord,tokyo,sf,jakarta,barcelone,berlin,lyon];
let popu= [lyon,safari,sf,us,tokyo,asie,barcelone,berlin,nord,jakarta];

let sejourid=new URLSearchParams(window.location.search).get('id');

document.getElementById('form').style='background-image:url(' + retrouverdest().img + ')'

boutonhaut = document.getElementById("boutonhaut");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    boutonhaut.style.display = "block";
  } else {
    boutonhaut.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}


function retrouverdest(){
    let i
    for (i of prixcroissant){
        if (i.id==sejourid){
            return i
        }
    }
}

document.getElementById('destination').innerHTML+=retrouverdest().nom + ' (' + retrouverdest().prix + '€ par jour)' 
  
function dates(){
    dateretour.min=datedepart.valueAsDate.getFullYear()+'-'+(datedepart.valueAsDate.getMonth()+1)+'-'+(datedepart.valueAsDate.getDate()+1);
}

function prixtot(){
    let dureesejour=dateretour.valueAsDate.getDate()-datedepart.valueAsDate.getDate()
    let prixtot=(0.4 * nbenfant.value * dureesejour * retrouverdest().prix) + (nbadulte.value * dureesejour * retrouverdest().prix)
    if (document.getElementById('ouidej').checked){
        prixtot+=(parseInt(nbadulte.value)+parseInt(nbenfant.value))*12*dureesejour;
    } 
    document.getElementById('prixtot').innerHTML=prixtot + '€'
}
prixtot()

function needconnect(){
  if (localStorage.getItem("connexion") == "0"){
    alert('Veuillez vous connecter pour pouvoir commander')
    return false
  }
}

