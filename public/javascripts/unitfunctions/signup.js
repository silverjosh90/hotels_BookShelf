function validator(pass) {
  return((/[A-Za-z]/g).test(pass) && (/[0-9]/g).test(pass) && pass.length >= 3)
}

function isMatching(strOne, strTwo) {
  return strOne === strTwo;
}
