var bdd = 
    {usr1:'Bob',mdp1:'bob01',
    usr2:'arnaud',mdp2:"ville",
    usr3:"maxime", mdp3:"chouraqui"}

let utilisateur = document.getElementById('utilisateur')
let mdp = document.getElementById('mdp')

function connexion(){
    if ((utilisateur,mdp) == (bdd.usr1,bdd.mdp1) || (bdd.usr2,bdd.mdp2) || (bdd.usr3,bdd.mdp3)){
        return true
}   else
        return false
}


class destination {
    constructor(id,img,prix){
        this.id=id;
        this.img=img;
        this.prix=prix;
    }
}

let lyon= new destination('1',"/site/Medias/Lyon.jpg",100);
let berlin= new destination('2',"/site/Medias/Berlin.jpg",200);
let barcelone= new destination('3',"/site/Medias/Barcelone.jpg",250);
let sf= new destination('4',"/site/Medias/SF.jpg",400);
let jakarta= new destination('5',"/site/Medias/Jakarta.jpg",350);
let tokyo= new destination('6',"/site/Medias/Tokyo.jpg",400);
let us= new destination('7',"/site/Medias/US.jpg",1300);
let nord= new destination('8',"/site/Medias/Nord.jpg",900);
let safari= new destination('9',"/site/Medias/safari.jpg",1000);
let asie= new destination('10',"/site/Medias/Asie.jpg",1200);

let offre=document.getElementById('offre')

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
        for (i of prixcroissant){
            lienimg += '<a href="Reservation.html"> <img id=' + i.id + ' src=' + i.img + '></a>'       
        }    
        offre.innerHTML = lienimg
    
    }else if (document.getElementById('choixtri').value==='2'){
        for (i of prixdecroissant){
            lienimg += '<a href="Reservation.html"> <img id=' + i.id + ' src=' + i.img + '></a>'       
        }
        offre.innerHTML = lienimg   
    
    }else if (document.getElementById('choixtri').value==='3'){
        for (i of popu){
            lienimg += '<a href="Reservation.html"> <img id=' + i.id + ' src=' + i.img + '></a>'       
        }
        offre.innerHTML = lienimg  
    }
}

AfficherTri()

