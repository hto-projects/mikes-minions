//API being used: https://www.api-basketball.com/

document.addEventListener("DOMContentLoaded", () => {
    fetchLiveGame();
    fetchMVPStats();
    fetchAIPrediction();
    fetchNews();
});

async function fetchLiveGame(){
    let reponse, responseJSON; 
        
        //Call to API 
        try {

            fetch("https://v1.basketball.api-sports.io/odds?season=2024-2025&bet=1&bookmaker=6&game=1912&league=12", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "v1.basketball.api-sports.io",
                    "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
            
        } catch (e) {
            console.error("fetching data failed:", e);
            alert(e); 
            return; 
        }
 
        let odds = responseJSON.get("odds"); 

        document.getElementById("ai-prediction").innerHTML = "Odds" + odds;

        /* // Given by the API - wanted to do it similar to the Web 103 projects
        fetch("https://v1.basketball.api-sports.io/games?date=2019-11-23", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v1.basketball.api-sports.io",
                "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
        */
}







/*
function fetchLiveGame() {
    // Replace with an actual API call
    document.getElementById("live-game").innerHTML = `
        <p><strong>Team A</strong> vs <strong>Team B</strong></p>
        <p>Score: 102 - 98</p>
        <p>Time Remaining: 3:21 4Q</p>
        <p>Player of the Game: John Doe - 27 PTS, 8 REB, 5 AST</p>
    `;
}
*/ 

function fetchMVPStats() {
    // Replace with an actual API call
    let mvpPlayers = [
        { name: "shai", team: "Lakers", ppg: 28.3, rpg: 7.2, apg: 8.1 },
        { name: "Jokic", team: "Nuggets", ppg: 26.5, rpg: 11.8, apg: 9.4 },
        { name: "Giannis", team: "Bucks", ppg: 29.9, rpg: 12.2, apg: 5.7 }
    ];

    let list = document.getElementById("mvp-list");
    list.innerHTML = "";
    mvpPlayers.forEach(player => {
        let li = document.createElement("li");
        li.textContent = `${player.name} (${player.team}) - ${player.ppg} PPG, ${player.rpg} RPG, ${player.apg} APG`;
        list.appendChild(li);
    });
}

function fetchAIPrediction() {
    // Replace with AI analysis
    document.getElementById("ai-prediction").textContent = 
        "based on team stats.......";
}

function fetchNews() {
    // Replace with an API call
    document.getElementById("news-feed").innerHTML = `
        <p><strong>Breaking:</strong> Star player injured in tonight's game. <a href="https://www.nba.com/news">Read more</a></p>
        <p><strong>Trade Rumors:</strong> Team X looking to acquire Player Y. <a href="#">Read more</a></p>
    `;
}