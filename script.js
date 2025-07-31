let player_score=0;
let computer_score=0;
let play_select = -1;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const play_btn = document.getElementById('playbtn');

const CYW = document.getElementById('CYW');
let SelRock = false;
let SelPaper = false;
let SelScissor = false;
rock.addEventListener('click',()=>{
    rock.style.opacity = '1';
    paper.style.opacity = '0.5';
    scissor.style.opacity = '0.5';
    play_select = 0;
})

paper.addEventListener('click',()=>{
    rock.style.opacity = '0.5';
    paper.style.opacity = '1';
    scissor.style.opacity = '0.5';
    play_select = 1;
})

scissor.addEventListener('click',()=>{
    rock.style.opacity = '0.5';
    paper.style.opacity = '0.5';
    scissor.style.opacity = '1';
    play_select = 2;
})

let ps_show = document.getElementById('player_score');
let cs_show = document.getElementById('computer_score');
let countdownElement = document.getElementById('rem_time');

play_btn.addEventListener('click',()=>{
    play_btn.innerText = "Play Again"
    CYW.textContent = 'Choose Your Weapon!🎯';
    CYW.style.color = 'black'; 
    let countdown = 4;
    let com_choose = Math.floor(Math.random()*3);
    countdownElement.innerText = `${countdown}s`;
    let timer = setInterval(()=>{
        countdown--;
        countdownElement.innerText = `${countdown}s`;
        if(countdown == 0){
            clearInterval(timer);
            countdownElement.style.color = "red";
            countdownElement.textContent = "Time's Up !!!";
            if(play_select==com_choose){
                player_score++;
            }
            else if(play_select == -1){
                    countdownElement.textContent = "No Selection !!!";
                }
            else{
                computer_score++;
            }
            ps_show.innerText = player_score;
            cs_show.innerText = computer_score;
            if(player_score>=10 || computer_score>=10){
                if(computer_score>player_score){
                CYW.textContent = `COMPUTER WON 💔 Ply:${player_score} Com:${computer_score}`;
            }
            else if(computer_score==player_score){
                CYW.textContent = `Match Tied 🤝 Ply:${player_score} Com:${computer_score}`;
            }
            else{
                CYW.textContent = `YOU WON 🌟 Ply:${player_score} Com:${computer_score}`;
            }
            player_score = 0;
            computer_score = 0;
            ps_show.innerText = player_score;
            cs_show.innerText = computer_score;
            }
        }
    },1000)
})

let result_btn = document.getElementById('resultbtn');
result_btn.addEventListener('click',()=>{
    if(computer_score>player_score){
        CYW.style.color = 'red';
        CYW.textContent = `COMPUTER WON 💔 Ply:${player_score} Com:${computer_score}`;
    }
    else if(computer_score==player_score){
        CYW.style.color = 'blue';
        CYW.textContent = `Match Tied 🤝 Ply:${player_score} Com:${computer_score}`;
    }
    else{
        CYW.style.color = 'Green';
        CYW.textContent = `YOU WON 🌟 Ply:${player_score} Com:${computer_score}`;
    }
    player_score = 0;
    computer_score = 0;
    ps_show.innerText = player_score;
    cs_show.innerText = computer_score;
});