function Structure1(){

  var nb1 = parseFloat(window.prompt("Sasir nombre 1"))
  var nb2 = parseFloat(window.prompt("Saiir nombre 2", 0));
  var op=window.prompt("saisir S pour Somme et P pour le produit des nombre saisi")
  res= "Erreur";

  if (op=="s" || op=="S") {
    res="La somme nombre saisi est : "+(nb1+nb2);
  } else if (op=="p" || op=="P") {
    res="Le produit nombre saisi est : "+(nb1*nb2);
  }

  window.prompt(res);

}

function Structure2(){

    var a = 0, b = 10;
    var a = b++;
    window.alert(b);
}


function While15(){

  var i = 0;
  var nombre =0;
  var total = 1;

  while (i < 3) {

    nombre = prompt("Entrer un nombre : ");

    total *= nombre;

    i++;
  }

  alert(total);
}


function While18(){

  var i = 0;
  var nombre = 0;
  var Fnombre = 1;

  while (i < 5) {

    nombre = prompt("Entrer un nombre : ");

    if(nombre > Fnombre){

    Fnombre = nombre;

    }

    i++;
  }

  alert(Fnombre);

}

var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function table1(){

  window.alert("The table 'week' have "+ week.length + " days");

}

function table2() {

  for (var i = 0; i < week.length; i++) {
    document.write(" "+week[i]);
  }
}

function table3() {

  document.write("The week's table have "+ week.join(" puis "));

}

function table4(){

  var actualDate = new Date();

  window.alert("We are actually "+ week[actualDate.getDay()]);

}
