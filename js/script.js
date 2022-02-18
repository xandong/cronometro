const frases = ['Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os sete mafagafinhos.', 'Trazei três pratos de trigo para três tigres tristes comerem.', 'A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã. Nem a rã arranha a aranha.', 'O tempo perguntou ao tempo quanto tempo o tempo tem, o tempo respondeu ao tempo que o tempo tem o tempo que o tempo tem.', 'Se percebeste, percebeste. Se não percebeste, faz que percebeste para que eu perceba que tu percebeste. Percebeste?', 'O rato roeu a rica roupa do rei de Roma! A rainha raivosa rasgou o resto e depois resolveu remendar!', 'Em rápido rapto, um rápido rato raptou três ratos sem deixar rastros.', 'O sabiá não sabia que o sábio sabia que o sabiá não sabia assobiar.', 'Sabendo o que sei e sabendo o que sabes e o que não sabes e o que não sabemos, ambos saberemos se somos sábios, sabidos ou simplesmente saberemos se somos sabedores.', 'Olha o sapo dentro do saco. O saco com o sapo dentro. O sapo batendo papo e o papo soltando o vento.']
// console.log(frases.length) = 10

const frase = document.querySelector('#modelo');
const test = document.querySelector('#areaTest');
const areaTest = document.querySelector('#input_');
const tempo = document.querySelector('#timer');
const btt = document.querySelector('#btt-reset');
const bttFrase = document.querySelector('#btt-frase')

timer = [0, 0, 0];
var interval
var timerRunning = false

frase.innerHTML = frases[parseInt(Math.random()*10)]

// Executa um time padrão de minuto / segundo / centésimo
const cronometro = function(){
    ++timer[2]
    
    if(timer[2]==100){
        timer[1]++
        timer[2] = 0
    }
    if(timer[1]==60){
        timer[0]++
        timer[1] = 0
    }
    if(timer[0]==100)
        reset()
    // Adiciona zero inicial aos numeros <= 9
    var min = (timer[0]<10)? '0'+timer[0] : timer[0]
    var seg = (timer[1]<10)? '0'+timer[1] : timer[1]
    var mil = (timer[2]<10)? '0'+timer[2] : timer[2]
    tempo.innerHTML = `${min}:${seg}:${mil}`
}

// Inicia o cronômetro
function start(){
    let testLength = test.value.length;
    if(testLength === 0 && !timerRunning){ // se não tiver nada digitado e o timerRunning for verdadeiro;
        timerRunning = true
        interval = setInterval(cronometro, 10)
    }
}


// Verifica se o texto digitado com o fragmento da página
function check(){
    let textoInserido = test.value // Atribue o valor digitado
    let textoOriginMatch = frase.innerHTML.substring(0, textoInserido.length) // Recebe String de texto original, até o tamanho digitado. para comparação
    if(textoInserido == frase.innerHTML){
        areaTest.style.borderColor = "#008b8b"
        tempo.style.color = "#008b8b"
        clearInterval(interval) // limpa o intervalo, ou seja, para de incrementar o tempo
    }else{
        if(textoInserido == textoOriginMatch){
            areaTest.style.borderColor = "#00bfff"
        }else{
            areaTest.style.borderColor = "#ff6347"
        }
    }
}


// Função de mudar a frasae
function mudarFrase(){
    i = parseInt(Math.random()*10)
    frase.innerHTML = frases[i]
    reset()
}


// Função de recomeçar
function reset(){
    clearInterval(interval)
    interval = null
    console.log("Recomeçar!")
    timer = [0, 0, 0]
    timerRunning = false

    test.value = ''
    tempo.innerHTML = '00:00:00'
    areaTest.style.borderColor = 'gray'
}


test.addEventListener('keypress', start, false)
test.addEventListener('keyup', check, false)
btt.addEventListener('click', reset, false)
bttFrase.addEventListener('click', mudarFrase, false)

