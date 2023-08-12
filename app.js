const area = document.querySelector('.area');
const card = document.querySelector('.card');

let answers = [
    'Messi',
    'Ronaldo',
    'Maguire',
    'Mbape',
    'Schweinsteiger',
    'Ronaldinho',
    'Pique',
    'Buffon',
    'Neymar',
    'Haaland',
];

let photos = [
    'messi.png',
    'ronaldo.png',
    'maguire.png',
    'mbape.png',
    'Schweinsteiger.png',
    'ronaldinho.png',
    'pique.png',
    'buffon.png',
    'neymar.png',
    'haaland.png',
]

let styles = [
    'width: 400px;',
    '',
    'width: 300px; margin-top: 60px;',
    'width: 300px; margin-top: 40px;',
    'width: 300px; margin-top: 40px;',
    'width: 300px; margin-top: 40px;',
    'width: 300px; margin-top: 40px;',
    'width: 300px; margin-top: 60px;',
    'width: 300px; margin-top: 40px;',
    'width: 300px; margin-top: 40px;',
]

let rand, answer, i = 0;

area.style.height = `${window.innerHeight - 100}px`;

card.addEventListener('click', (e) => {
    newCard();
    document.body.innerHTML += `
    <input class="inp" type="text"/>
    <p align="center">
        <b>press Enter to confirm answer</b>
    </p>
    `
    forever();
});

document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        if(answer == answers[i]){
            i++;
            newCard();
        } else{
            alert(`that was ${answers[i]}`)
            window.open('./index.html', '_parent')
        }
    }
})

function newCard(){
    rand = Math.ceil(Math.random() * 4);

    document.body.innerHTML += `
    <div style='transform: rotate(${rand * -10||rand * 10}deg)' class="newCard">
        <img style = "${styles[i]}" src = "./images/${photos[i]}">
    </div>
    `;
};

function forever(){
    requestAnimationFrame(forever);

    answer = document.querySelector('.inp').value;

    if(i == 10){
       win(); 
    }
}

function win(){
    alert("you won");
    window.open('./index.html', '_parent')
}