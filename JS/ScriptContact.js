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