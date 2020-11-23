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