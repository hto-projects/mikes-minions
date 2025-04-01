document.addEventListener("DOMContentLoaded", () => {
    fetchLiveGame();
    fetchMVPStats();
    fetchAIPrediction();
    fetchNews();
});

function fetchLiveGame() {
    // Replace with an actual API call
    document.getElementById("live-game").innerHTML = `
        <p><strong>Team A</strong> vs <strong>Team B</strong></p>
        <p>Score: 102 - 98</p>
        <p>Time Remaining: 3:21 4Q</p>
        <p>Player of the Game: John Doe - 27 PTS, 8 REB, 5 AST</p>
    `;
}

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