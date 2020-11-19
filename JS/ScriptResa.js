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
let us= new destination('7',"../Medias/US.jpg",1300);
let nord= new destination('8',"../Medias/Nord.jpg",900);
let safari= new destination('9',"../Medias/safari.jpg",1000);
let asie= new destination('10',"../Medias/Asie.jpg",1200);
let prixcroissant= [lyon,berlin,barcelone,jakarta,sf,tokyo,nord,safari,asie,us];
let prixdecroissant= [us,asie,safari,nord,tokyo,sf,jakarta,barcelone,berlin,lyon];
let popu= [lyon,safari,sf,us,tokyo,asie,barcelone,berlin,nord,jakarta];

let sejourid=new URLSearchParams(window.location.search).get('id');

document.getElementById('destination').innerHTML=prixcroissant[sejourid-1].nom

function dates(){
    dateretour.min=datedepart.valueAsDate.getFullYear()+'-'+(datedepart.valueAsDate.getMonth()+1)+'-'+(datedepart.valueAsDate.getDate()+1);
}


function test(){
    document.getElementById("test").innerHTML=sejourid
} 
test()


function prixtot(){
    let dureesejour=dateretour.valueAsDate.getDate()-datedepart.valueAsDate.getDate()
    let prixtot=(0.4 * nbenfant.value * dureesejour *100) + (nbadulte.value * dureesejour * 100)
    if (document.getElementById('ouidej').checked){
        prixtot+=(parseInt(nbadulte.value)+parseInt(nbenfant.value))*12*dureesejour;
    } 
    document.getElementById('prixtot').innerHTML=prixtot + '€'
}
prixtot()
