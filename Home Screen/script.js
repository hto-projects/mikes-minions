//API being used: https://www.api-basketball.com/

document.addEventListener("DOMContentLoaded", () => {
    fetchLiveGame();
    fetchMVPStats();
    fetchAIPrediction();
    fetchNews();
});

async function fetchLiveGame(){
    let Response, responseJSON; 
        
    //Call to API 
    const url = 'https://v2.nba.api-sports.io/games?date=2025-04-15';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8d653ec6d8f0d0e883ac43325c3c85c4',
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);
        // For Upcoming games 
        if (responseJSON && responseJSON.response && responseJSON.response.length > 0) {
            document.getElementById("live-game").innerHTML = responseJSON
            .response[0]
            .teams
            .home
            .name + " vs. " +  
            responseJSON
            .response[0]
            .teams
            .visitors
            .name;

           document.getElementById("game-time").innerHTML = " Time: " + responseJSON.response[0].date.start.slice(11,16); 
        } else {
            document.getElementById("live-game").innerHTML = "No game data available";
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchMVPStats() {
    let Response, responseJSON; 
        
    //Call to API 
    const url = 'https://v2.nba.api-sports.io/players?id=265'; //json of Lebron stats, most likely not recent
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '8d653ec6d8f0d0e883ac43325c3c85c4',
            'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    //For Top Players (in terms of points)
    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);
        /*  
        if (responseJSON && responseJSON.response && responseJSON.response.length > 0) {
            document.getElementById("mvp-list").innerHTML = responseJSON;
        } else {
            document.getElementById("live-game").innerHTML = "No game data available";
        }
        */
    } catch (error) {
        console.error(error);
    }


    // Replace with an actual API call
    let mvpPlayers = [
        { name: "Shai", team: "Thunder", ppg: 32.6, rpg: 5.0, apg: 6.4 },
        { name: "Jokic", team: "Nuggets", ppg: 30.0, rpg: 12.8, apg: 10.2 },
        { name: "Giannis", team: "Bucks", ppg: 30.5, rpg: 11.9, apg: 6.3 }
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
        <p><strong>Breaking:</strong> Damian Lillard is set to miss the start of the playoffs. <a href="https://www.espn.com/nba/story/_/id/44684806/bucks-damian-lillard-miss-start-nba-playoffs-sources-say">Read more</a></p>
        <p><strong>Trade Rumors:</strong> An NBA trade rumor is emerging that the Lakers are trying to find the "perfect" Luka Doncic teamate as LeGOAT starts to age. <a href="https://lakeshowlife.com/wild-nba-trade-rumor-opens-door-lakers-perfect-luka-doncic-teammate">Read more</a></p>
    `;
}
