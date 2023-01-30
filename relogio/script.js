const hoursHand = document.querySelector(".hand.hours");//Ponteiro de horas
const minutesHand = document.querySelector(".hand.minutes");//Ponteiro de minutos
const secondsHand = document.querySelector(".hand.seconds");//Ponteiro de segundos
const relogioAna = document.querySelector('.clock');
const relogioDig = document.querySelector('.relogio');
const btnChange = document.querySelector('.change');//botão que troca estilo

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
  //setProperty(propertyName, value, priority) OBS: value e priority não obrigatório.
};

const setClock = () => {
  const currentDate = new Date();
//lembrando que a gente tem que transforma esses valores para degs, então eu primeiro vou por 60 ou 12 e multiplicar por 2 Rad (360°)
  const secondsPercentage = currentDate.getSeconds() / 60;
//Tanto o ponteiro de minutos quanto o de segundos recebe sen antecessor para somar, pelo motivo de obrigar eles a mexerem nem que seja 0.1°deg por segundo.
  const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) / 60;
  const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

setClock();


setInterval(setClock, 1000);/*Vai chamar o setClock a cada 1 segundo*/


const Analogico = 'analogico';
const Digital = 'digital';
function AnaToDigi() {
  relogioAna.classList.toggle(Analogico);
  relogioDig.classList.toggle(Digital)
}
btnChange.addEventListener('click', AnaToDigi)



//Relogio Digital
const hour = document.querySelector('#hour')//horas
const min = document.querySelector('#min')//minutos
const sec = document.querySelector('#sec')//secundos

setInterval(() => {
  let date = new Date()//pegar a data atual
  let dHour = date.getHours()
  let dMinute = date.getMinutes()
  let dSec = date.getSeconds()
  //vai chamar a função passando como parâmetros a data atual, e vai me devolver depois dentro do HTML
  hour.innerHTML = `${formatTime(dHour)}`
  min.innerHTML = `${formatTime(dMinute)}`
  sec.innerHTML = `${formatTime(dSec)}`

}, 1000)//intervalo de ação 1 segundo

function formatTime(time) {
  return time < 10 ? '0' + time : time//Caso o numero do meu leitor seja menor que dez eu quero que adicione um 0 na frente, para evitar ficar assim:  10: 1 : 30. Eu quero que fiquei assim 10 : 01 : 30
}