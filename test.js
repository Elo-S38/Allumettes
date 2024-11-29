let totalAlumettes = 50                                                                                                      //variable pour total initial des allumettes        
let askUser = prompt ("Choisis un nombre entre 1 et 6 :")                                               //variable pour lancer le prompt à l'user pour choisir un chiffre
     askUser = parseInt (askUser)                                                                                        // fonction pour convertir les "strings du prompt" en number
                                                                            


function restAlumettes ( askUser){                                                                                   //fonction pour stocker la soustraction du total des allumettes - nombre choisi par l'user
     return console.log (totalAlumettes - askUser)   
    }  

function NextPlayer (){                                                                                                          //fonction Joueur suivant
  totalAlumettes = totalAlumettes-askUser

       while (totalAlumettes >0){     
        askUser=prompt ("joueur suivant")  
        totalAlumettes = totalAlumettes-askUser
          userChoice()
          return console.log (totalAlumettes)

                }

        didIwin()            
                                 }

function didIwin(){
  if (totalAlumettes===0){
    alert ("Bravo Joueur, tu as gagné")
  }
}

function userChoice (){                                                                                                      //fonction pour limiter le choix du nombre de l'user entre 1 et 6
    while (true){                                                                                                                      //tant que la condition est vraie
          if (askUser>6 || askUser<1){                                                                                       //si le chiffre choisi est strictement superieur à 6 OU strict. inferieur à 1
          askUser = prompt ("Erreur! Choisis un nombre entre 1 et 6")                                   //un prompt se relance et la valeur des strings change
       } else{
          break}                                                                                                                           //on sort de la boucle avec break     
                                                                   
           
       }  
    }




restAlumettes ( askUser)                                      //appel la fonction de la soustraction
userChoice()                                                         //appel de la fonction du prompt
NextPlayer()     

                                                                                                          






