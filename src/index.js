function printMessage() {
    let nomeHeroi = document.getElementById('idNome').value;
    let quantXp = parseInt (document.getElementById('quantXp').value);
    let heroClass = "";

    //Regras:

    if (quantXp <= 1000) {
        heroClass = "Ferro"
    }

    if (quantXp > 1000 && quantXp <2001) {
        heroClass = "Bronze"
    }

    if (quantXp > 2000 && quantXp <6001) {
        heroClass = "Prata"
    }

    if (quantXp > 6000 && quantXp <7001) {
        heroClass = "Ouro"
    }

    if (quantXp > 7000 && quantXp <8001) {
        heroClass = "Platina"
    }

    if (quantXp > 8000 && quantXp <9001) {
        heroClass = "Ascendente"
    }

    if (quantXp > 9000 && quantXp <10001) {
        heroClass = "Imortal"
    }

    if (quantXp >= 10000) {
        heroClass = "Radiante"
    }

    document.getElementById('resultado').innerHTML = 
        `<span class="scripText">${nomeHeroi} tem 
        <span id="xpAccent">${quantXp}</span> pontos de experiência e seu nível é
        <span id="classAccent">${heroClass}</span></span>`;
}