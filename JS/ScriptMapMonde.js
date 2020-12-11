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


//on colore les pays au passage de la souris sur le nom dans la liste

document.getElementById('lyon').onmouseover = function(){
    document.getElementsByClassName('lyon')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('lyon').onmouseout = function(){
    document.getElementsByClassName('lyon')[0].style.fill='grey'
    }


document.getElementById('berlin').onmouseover = function(){
    document.getElementsByClassName('berlin')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('berlin').onmouseout = function(){
    document.getElementsByClassName('berlin')[0].style.fill='grey'
    }


document.getElementById('barcelone').onmouseover = function(){
    document.getElementsByClassName('barcelone')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('barcelone').onmouseout = function(){
    document.getElementsByClassName('barcelone')[0].style.fill='grey'
    }
 
    
document.getElementById('jakarta').onmouseover = function(){
    document.getElementsByClassName('jakarta')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('jakarta').onmouseout = function(){
    document.getElementsByClassName('jakarta')[0].style.fill='grey'
    }
 
    
document.getElementById('sf').onmouseover = function(){
    document.getElementsByClassName('sf')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('sf').onmouseout = function(){
    document.getElementsByClassName('sf')[0].style.fill='grey'
    }
 
    
document.getElementById('canada').onmouseover = function(){
    document.getElementsByClassName('canada')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('canada').onmouseout = function(){
    document.getElementsByClassName('canada')[0].style.fill='grey'
    }


document.getElementById('tokyo').onmouseover = function(){
    document.getElementsByClassName('tokyo')[0].style.fill='rgb(193, 241, 250)'
    }
document.getElementById('tokyo').onmouseout = function(){
    document.getElementsByClassName('tokyo')[0].style.fill='grey'
    }


document.getElementById('safari').onmouseover = function(){   
    for (c of [0,1,2]) {
        document.getElementsByClassName('safari')[c].style.fill='rgb(193, 241, 250)'
    }
}
document.getElementById('safari').onmouseout = function(){
    for (c of [0,1,2]){
        document.getElementsByClassName('safari')[c].style.fill='grey'
    }
}

document.getElementById('nord').onmouseover = function(){
    for (c of [0,1,2]) {
        document.getElementsByClassName('nord')[c].style.fill='rgb(193, 241, 250)'
    }
}
document.getElementById('nord').onmouseout = function(){
    for (c of [0,1,2]){
        document.getElementsByClassName('nord')[c].style.fill='grey'
    }
}

document.getElementById('asie').onmouseover = function(){
    for (c of [0,1,2]) {
        document.getElementsByClassName('asie')[c].style.fill='rgb(193, 241, 250)'
    }
}
document.getElementById('asie').onmouseout = function(){
    for (c of [0,1,2]){
        document.getElementsByClassName('asie')[c].style.fill='grey'
    }
}