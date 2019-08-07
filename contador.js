const getRemainingTime = deadline => {
  let now = new Date(),
      remainTime = (new Date('Sep 21 2019 00:00:00 GMT-0500') - now + 1000) / 1000,
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
}
;

const countdown = (deadline,elem,finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval( () => {
    let t = getRemainingTime(deadline);
    el.innerHTML = `${t.remainDays} DIAS `;

    if(t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }

  }, 1000)
};

countdown('Sep 21 2019 00:00:00 GMT-0500', 'cronometro', 'NADA');

function reloj() {
  remainTime = (new Date('Sep 21 2019 00:00:00 GMT-0500')) / 1000,
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24));
  el.innerHTML = `${t.remainHours}:${t.remainMinutes}`;
  document.getElementById('pantalla').innerHTML = hora + " : " + minuto;
}
