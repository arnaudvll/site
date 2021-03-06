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

function testconnexion(){ //vérifie si l'utilisateur s'est connecté
    if (localStorage.getItem('connexion') == '1'){
        boutonconnect.style.display='none'
        boutondeconnect.style.display='block'
    }
}
testconnexion()

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
let canada= new destination('7',"../Medias/Canada.png",1300,'Road trip Canada');
let nord= new destination('8',"../Medias/Nord.jpg",900,'Pays du nord');
let safari= new destination('9',"../Medias/safari.jpg",1000,'Safari');
let asie= new destination('10',"../Medias/Asie.jpg",1200,'Road trip Asie');

let offre=document.getElementById('offre')
let description=document.getElementsByClassName('description')

let prixcroissant= [lyon,berlin,barcelone,jakarta,sf,tokyo,nord,safari,asie,canada];
let prixdecroissant= [canada,asie,safari,nord,tokyo,sf,jakarta,barcelone,berlin,lyon];
let popu= [lyon,safari,sf,canada,tokyo,asie,barcelone,berlin,nord,jakarta];


function AfficherOptTri(){
    document.getElementById('choixtri').style='display:inline;'
}


function AfficherTri(){ //affiche les destinations en fonction du tri choisi
    let lienimg=''
    let i    
    if (document.getElementById('choixtri').value==='1'){
        let c=0
        for (i of prixcroissant){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + ' alt=' + i.nom + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'   
            c+=1    
        }    
        offre.innerHTML = lienimg 
    
    }else if (document.getElementById('choixtri').value==='2'){
        let c=0
        for (i of prixdecroissant){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + ' alt=' + i.nom + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'    
            c+=1   
        }
        offre.innerHTML = lienimg   
    
    }else if (document.getElementById('choixtri').value==='3'){
        let c=0
        for (i of popu){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + ' alt=' + i.nom + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'    
            c+=1   
        }
        offre.innerHTML = lienimg  
    }
}

AfficherTri()

function infoimg(i){ //place sur chaque image laa description de la destination
    description[i].style.opacity=1;
    if ((i==0) || (i==3) || (i==6) || (i==9)){ //si l'image est sur la premier colonne
        description[i].style.left=0 + '%';   
    }
    if ((i==1) || (i==4) || (i==7)){ //si l'image est sur la deuxieme colonne
        description[i].style.left=33.3 + '%'; 
    }
    if ((i==2) || (i==5) || (i==8)){ //3eme colonne
        description[i].style.left=66.6 + '%'; 
    }
    if (i<3){ //1ere ligne
        description[i].style.top=19.5 +'%';
    }
    if ((i>=3) & (i<6)){ //2eme ligne
        description[i].style.top=44.5 + '%';
    }
    if ((i>=6) & (i<9)){ //3eme ligne
        description[i].style.top=69.5 + '%';
    }
    if (i>=9){ //derniere ligne
        description[i].style.top=94.5 + '%';
    }
}

function suppinfoimg(i){
    description[i].style.opacity=0;
}

function flouimg(i){
    document.getElementById(i).style.opacity=0.7;
}

function enleveflouimg(i){
    document.getElementById(i).style.opacity=1;
}

function meteo(ville){
    const APIKEY = '91e51fd34b7e2b9e325961c90665cd7b';
    let url= 'https://api.openweathermap.org/data/2.5/weather?q=' + ville.nom + '&appid=' + APIKEY + '&units=metric&lang=fr';
    fetch(url)
        .then(function(resp) { return resp.json() }) //convertit la réponse en format JSON
        .then(function(data) {
            creationmeteo(data,ville)        
        }) 
}

function creationmeteo(d,v){ //affiche en fonction du tri choisi la température de la ville dans sa description
    if (document.getElementById('choixtri').value==='1'){
        nville=prixcroissant.indexOf(v)
        description[nville].innerHTML+= ' // ' + d.main.temp + '°C'
    }
    else if (document.getElementById('choixtri').value==='2'){
        nville=prixdecroissant.indexOf(v)
        description[nville].innerHTML+= ' // ' + d.main.temp + '°C'
    }
    else if (document.getElementById('choixtri').value==='3'){
        nville=popu.indexOf(v)
        description[nville].innerHTML+= ' // ' + d.main.temp + '°C'
    }  
}

function affichagemeteo(){ //boucle pour afficher la température pour chaque ville (sauf les circuits)
    for (i of prixcroissant.slice(0,6)){
        meteo(i)
    }
}
affichagemeteo()
