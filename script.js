//======================== codificador
function codificador() {
  var letrasRecebidas = document.getElementById('selectText').value

  /* checkChar(letrasRecebidas) */

  var msgNova = ''
  //msgNova organiza todos os textos recebidos
  var auxiliar

  for (var posicao = 0; posicao < letrasRecebidas.length; posicao++) {
    //
    auxiliar = letrasRecebidas[posicao]
    //auxiliar guarda todas as letras digitadas e troca conforme a entrada
    if (letrasRecebidas[posicao] == 'e') {
      auxiliar = 'enter'
    }
    if (letrasRecebidas[posicao] == 'i') {
      auxiliar = 'imes'
    }
    if (letrasRecebidas[posicao] == 'a') {
      auxiliar = 'ai'
    }
    if (letrasRecebidas[posicao] == 'o') {
      auxiliar = 'ober'
    }
    if (letrasRecebidas[posicao] == 'u') {
      auxiliar = 'ufat'
    }

    msgNova = `${msgNova}${auxiliar}`
  }

  document.querySelector('#msgEncontrada').innerHTML = msgNova
}

//======================== decodificador

function decodificador() {
  var texto = document.getElementById('selectText').value

  var lista = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
  ]
  // percorrer a lista e executa uma função
  lista.forEach(function (trocar) {
    texto = texto.replaceAll(trocar[0], trocar[1])
  })

  //======================== saídas do codificador e decodificador no campo
  document.getElementById('msgEncontrada').innerHTML = texto
}

//======================== botão de copiar

function copy() {
  //
  var content = document.querySelector('#msgEncontrada')
  content.select()
  document.execCommand('copy')
  alert('Copiado!')
}

// verificações

/* function checkChar(textos) {
  console.log(textos)

  let listaPattern = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]

  var auxiliar = 0
  for (var letras = 0; letras <= textos.length; letras++) {
    //
    for (var posicao = 0; posicao < listaPattern.length; posicao++) {
      if (listaPattern[posicao] == textos[letras]) {
        auxiliar = 1
        console.log(posicao)
        posicao = listaPattern.length
      } else {
        auxiliar = 0
      }
    }
  }

  if (auxiliar == 0) {
    console.log('Digite letras minúsculas sem acentuos ou números!')
  }
} */
