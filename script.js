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
    paper.style.opacity = '0.4';
    scissor.style.opacity = '0.4';
    play_select = 0;
})

paper.addEventListener('click',()=>{
    rock.style.opacity = '0.4';
    paper.style.opacity = '1';
    scissor.style.opacity = '0.4';
    play_select = 1;
})

scissor.addEventListener('click',()=>{
    rock.style.opacity = '0.4';
    paper.style.opacity = '0.4';
    scissor.style.opacity = '1';
    play_select = 2;
})

let ps_show = document.getElementById('player_score');
let cs_show = document.getElementById('computer_score');
let countdownElement = document.getElementById('rem_time');
let each_status = document.getElementById('each_status');
let status_info = document.getElementById('status_info');
let timeup = true;


play_btn.addEventListener('click',()=>{
    if(timeup==true){
    timeup = false;
    play_btn.innerText = "Play Again"
    CYW.textContent = 'Choose Your Weapon!🎯';
    CYW.style.color = 'black'; 
    let countdown = 3;
    let com_choose = Math.floor(Math.random()*3);
    countdownElement.innerText = `${countdown}s`;
    let timer = setInterval(()=>{
        countdown--;
        countdownElement.style.color = "green";
        countdownElement.innerText = `${countdown}s`;
        if(countdown == 0){
            timeup = true;
            clearInterval(timer);
            countdownElement.style.color = "red";
            countdownElement.textContent = "0s";
            if(play_select == 0 && com_choose == 0){
                each_status.innerText = 'TIED';
                status_info.innerText = 'ROCK | ROCK';
            }
            else if(play_select == 0 && com_choose == 1){
                computer_score++;
                each_status.innerText = 'Computer Won';
                status_info.innerText = 'ROCK | PAPER';
            }
            else if(play_select == 0 && com_choose == 2){
                player_score++;
                each_status.innerText = 'Player Won';
                status_info.innerText = 'ROCK | SCISSOR';
            }
            else if(play_select == 1 && com_choose == 0){
                player_score++;
                each_status.innerText = 'Player Won';
                status_info.innerText = 'PAPER | ROCK';
            }
            else if(play_select == 1 && com_choose == 1){
                each_status.innerText = 'TIED';
                status_info.innerText = 'PAPER | PAPER';
            }
            else if(play_select == 1 && com_choose == 2){
                computer_score++;
                each_status.innerText = 'Computer Won';
                status_info.innerText = 'PAPER | SCISSOR';

            }
            else if(play_select == 2 && com_choose == 0){
                computer_score++;
                each_status.innerText = 'Computer Won';
                status_info.innerText = 'SCISSOR | ROCK';
            }
            else if(play_select == 2 && com_choose == 1){
                player_score++;
                each_status.innerText = 'Player Won';
                status_info.innerText = 'SCISSOR | PAPER';
            }
            else if(play_select == 2 && com_choose == 2){
                each_status.innerText = 'TIED';
                status_info.innerText = 'SCISSOR | SCISSOR';
            }
            else if(play_select == -1){
                    countdownElement.textContent = "No Selection !!!";
                    each_status.innerText = 'TRY';
                    status_info.innerText = 'YOUR LUCK';
                }
            
            ps_show.innerText = player_score;
            cs_show.innerText = computer_score;
            if(player_score>=10 || computer_score>=10){
                if(computer_score>player_score){
                CYW.textContent = `COMPUTER WON 💔 ${player_score} | ${computer_score}`;
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
}})

let result_btn = document.getElementById('resultbtn');
result_btn.addEventListener('click',()=>{
    if(computer_score>player_score){
        CYW.style.color = 'red';
        CYW.textContent = `COMPUTER WON 💔 ${player_score} | ${computer_score}`;
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

let pcpc = document.getElementById('PCPC');
let each_result_div = document.getElementById('each_result');
let rules_btn_bool = false;
let rules_btn = document.getElementById('Rules');
let rulesDiv = document.getElementById('show_rules_div1');
let rulesDiv2 = document.getElementById('show_rules_div2');



rules_btn.addEventListener('click', () => {
    CYW.textContent = "Choose Your Weapon!🎯";
  if (!rules_btn_bool) {
    showRules();
  } else {
    hideRules();
  }
  rules_btn_bool = !rules_btn_bool; // Toggle the boolean
});

function showRules() {
  rulesDiv.style.display = 'none';  // Hide default content
  rulesDiv2.style.display = 'block'; // Show rules
}

function hideRules() {
  rulesDiv.style.display = 'block';  // Show default content
  rulesDiv2.style.display = 'none';  // Hide rules
}
