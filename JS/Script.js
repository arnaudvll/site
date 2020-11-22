var bdd = 
    {usr1:'Bob', mdp1:'bob01',
    usr2:"arnaud", mdp2:"ville",
    usr3:"maxime", mdp3:"chouraqui"}

let utilisateur = document.getElementById('utilisateur')
let mdp = document.getElementById('mdp')

function connexion(){
    if ((utilisateur,mdp) == (bdd.usr1,bdd.mdp1) || (bdd.usr2,bdd.mdp2) || (bdd.usr3,bdd.mdp3)){
        return true
}   else
        return false
}

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
let us= new destination('7',"../Medias/US.jpg",1300,'Road trip US');
let nord= new destination('8',"../Medias/Nord.jpg",900,'Pays du nord');
let safari= new destination('9',"../Medias/safari.jpg",1000,'Safari');
let asie= new destination('10',"../Medias/Asie.jpg",1200,'Road trip Asie');

let offre=document.getElementById('offre')
let description=document.getElementsByClassName('description')

let prixcroissant= [lyon,berlin,barcelone,jakarta,sf,tokyo,nord,safari,asie,us];
let prixdecroissant= [us,asie,safari,nord,tokyo,sf,jakarta,barcelone,berlin,lyon];
let popu= [lyon,safari,sf,us,tokyo,asie,barcelone,berlin,nord,jakarta];

function AfficherOptTri(){
    document.getElementById('choixtri').style='display:inline;'
}


function AfficherTri(){
    let lienimg=''
    let i    
    if (document.getElementById('choixtri').value==='1'){
        let c=0
        for (i of prixcroissant){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'   
            c+=1    
        }    
        offre.innerHTML = lienimg 
    
    }else if (document.getElementById('choixtri').value==='2'){
        let c=0
        for (i of prixdecroissant){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'    
            c+=1   
        }
        offre.innerHTML = lienimg   
    
    }else if (document.getElementById('choixtri').value==='3'){
        let c=0
        for (i of popu){
            lienimg += '<a href="../HTML/Reservation.html?id=' + i.id + '"><img onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') id=' + i.id + ' src=' + i.img + '>\n <span onmouseover=flouimg(' + i.id + ');infoimg(' + c + ') onmouseout=suppinfoimg(' + c + ');enleveflouimg(' + i.id + ') class="description">' + i.nom + '<br>' + i.prix + '€ par jour </span></a>'    
            c+=1   
        }
        offre.innerHTML = lienimg  
    }
}

AfficherTri()

function infoimg(i){
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

