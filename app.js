// Soru classı
class Soru {
    constructor(soruMetni, secenekA, secenekB, secenekC, secenekD, dogruCevap) {
        this.soruMetni = soruMetni;
        this.secenekA = secenekA;
        this.secenekB = secenekB;
        this.secenekC = secenekC;
        this.secenekD = secenekD;
        this.dogruCevap = dogruCevap
    }

    cevapKontrol(verilenCevap) {
        if (verilenCevap == this.dogruCevap) {
            console.log(`Cevap doğru: ${verilenCevap} : ${this.dogruCevap}`)
        }

        else {
            "Cevap Yanlış"
        }
    }
}

let i = 0;
// Soru classından üretilmiş sorular
let sorular = [
    new Soru("Atların en sevdiği sebze nedir?", "Patlıcan", "Kereviz", "Domates", "Havuç", "D"),
    new Soru("Kaç tane ana renk vardır?", "1", "2", "3", "4", "C"),
    new Soru("Hangisi bir kedi türüdür?", "Golden Retriever", "Tuxedo", "Labrador", "Chihuahua", "B"),
    new Soru("Bir mağazanın vitrinindeki 'Patron çıldırdı!' ifadesi muhtemelen hangisini anlatmak istiyordur?", "İndirim olduğunu", "Faturaların yüksek geldiğini", "Patronun tatile çıktığını", "İş yerine nazar değdiğini", "A"),
    new Soru("Otomobillerde, lastiklerin takıldığı tekerleğin çember biçimindeki bölümüne ne ad verilir?", "Jant", "Kriko", "Şasi", "Dingil", "A"),
    new Soru("Hangisi 'Müdavim' sözcüğü ile aynı anlamdadır?", "Rutin", "Kalender", "Gedikli", "Kadim", "C"),

]
// Başlangıçta gösterilen soru
let ilerleme = 0;
soruGoster()
// Soruları göstermek
function soruGoster() {
    clearTimeout()
    // Soru Metni
    document.querySelector('.soruDiv').innerHTML =
        `<span class="soru">${sorular[i].soruMetni}</span>`

    // Şıklar
    document.querySelector('.cevapDiv').innerHTML = ` 
    <button id="A" class="btn cevapBtn">${sorular[i].secenekA}</button>
    <button id="B" class="btn cevapBtn">${sorular[i].secenekB}</button>
    <button id="C" class="btn cevapBtn">${sorular[i].secenekC}</button>
    <button id="D" class="btn cevapBtn">${sorular[i].secenekD}</button>`

    // Kaçıncı soruda olduğunu gösteren sayaç.
    document.querySelector('.soruSayi').innerHTML = i + 1;

    // Butona tıklandığında yapılacaklar

    let cevapButon = document.querySelectorAll('.cevapBtn');

    cevapButon.forEach(element => {
        element.addEventListener('click', () => {

            soruKontrol(window.event);

        })
    });

    // Progress Bar aktif etmek.
    progressBar()

}

// Timeout ve soru gecme delayi ayırmak.
let soruGecTimeout;

document.querySelector('.gecBtn').addEventListener('click', () => {
    soruGec()

})


function soruKontrol(e) {

    // Doğru cevap
    if (e.target.id == sorular[i].dogruCevap) {
        console.log("Doğru")
        soruGecDelay(2000)
    }
    // Yanlış cevap
    else {
        console.log("Yanlış")
        soruGecDelay(2000)
    }

    // Doğru cevap ve yanlış cevap belirteç renkleri.
    cevapButon.forEach(element => {
        if (element.id == sorular[i].dogruCevap) {
            element.classList.add('bg-success')
        } else {
            element.classList.add('bg-danger')
        }

    })
}



function soruGecDelay(delay) {
    // Cevap butonu her soru değiştirdiğinde tekrar tanımlamak.
    cevapButon = document.querySelectorAll('.cevapBtn');
    // Sorular bitene kadar çalıştırılacak sorgu.
    setTimeout(() => {
        soruGec()
    }, delay);

}

function soruGec() {
    // Cevap butonu her soru değiştirdiğinde tekrar tanımlamak.
    cevapButon = document.querySelectorAll('.cevapBtn');

    // Sorular bitene kadar çalıştırılacak sorgu.
    if (i < sorular.length - 1) {
        i++
        soruGoster()

    } else {
        // Sorular bittiyse.
        document.querySelector('.info').innerHTML = `<div class="card-footer bilgi justify-content-center color-white">
        </div>`
        document.querySelector('.bilgi').innerHTML = `<span> Sorular bitti.</span>`
    }

}


function progressBar() {
    // Progress bar yüzde hesaplamaları
    let progressbar = document.querySelector('.progress-bar')
    let yuzde = 100 / (sorular.length)
    ilerleme = ilerleme + yuzde;
    progressbar.style.width = `${ilerleme}%`;


}

