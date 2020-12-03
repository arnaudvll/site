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

let nfamille=new URLSearchParams(window.location.search).get('nfamille')
let prenom=new URLSearchParams(window.location.search).get('prenom')
let addmail=new URLSearchParams(window.location.search).get('addmail')
let numtel=new URLSearchParams(window.location.search).get('numtel')
let datedepart=new URLSearchParams(window.location.search).get('datedépart')
let dateretour=new URLSearchParams(window.location.search).get('dateretour')
let nbadulte=new URLSearchParams(window.location.search).get('nbadulte')
let nbenfant=new URLSearchParams(window.location.search).get('nbenfant')
let renseignement=new URLSearchParams(window.location.search).get('renseignement')
let ptitdej=new URLSearchParams(window.location.search).get("ptitdej")

let info=document.getElementById('info')
let ncommande=document.getElementById('ncommande')

ncommande.innerHTML+=Math.floor(1000000*Math.random()) 
info.innerHTML+= '<br> Nom de famille: ' + nfamille + '<br> Prénom: ' + prenom + '<br> Adresse e-mail: ' + addmail + '<br> Numéro de télephone: ' + numtel + '<br> Dates du voyage: du ' + datedepart.slice(8) + '-' + datedepart.slice(5,7) + ' au ' + dateretour.slice(8) + '-' + dateretour.slice(5,7) + '<br> Nombre de voyageurs adultes: ' + nbadulte + '<br> Nombre de voyageurs enfants: ' + nbenfant + '<br> Petit-déjeuner inclus: ' + ptitdej 