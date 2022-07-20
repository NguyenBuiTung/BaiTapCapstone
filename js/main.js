function demso() {
  var a = 4;
  var b = 5;
  var c = 6;


  var sochan = 0;
  var sole = 0;

  if(a % 2 === 0){ // chia hết cho 2
    sochan++ ; // sochan += 1
  }
  if( b % 2 === 0) {
    sochan++ ;
  }
  if( c % 2 === 0) {
    sochan++ ;
  }
  console.log("so chan--------", sochan)


  sole = 3 - sochan;

  console.log("so le--------", sole)
}

demso();