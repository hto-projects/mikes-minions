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
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    const url = 'https://api.balldontlie.io/v1/games?dates[]=2025-04-29';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': '9442113e-0db9-44e6-93db-e0debe6db30e',
        }
    };
    
    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);
        // For Upcoming games 
        document.getElementById("live-game").innerHTML = responseJSON.data[0].visitor_team.full_name + " at " + responseJSON.data[0].home_team.full_name;
        
    } catch (error) {
        console.error(error);
    }
}

async function fetchMVPStats() {
    let Response, responseJSON; 
    

    //Call to API 
    //url : https://api.balldontlie.io/v1/stats
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    const url = ' https://api.balldontlie.io/v1/players';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': '9442113e-0db9-44e6-93db-e0debe6db30e',
        }
    };

    //For Top Players (in terms of points)
    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);
        /*  
        if (responseJSON > 0) {
            document.getElementById("live-game").innerHTML = responseJSON.data[0];
        } else {
            document.getElementById("live-game").innerHTML = "No game data available";
        }
        */
    } catch (error) {
        console.error(error);
    }


    /* Replace with an actual API call */
    let mvpPlayers = [
        { name: "Shai", team: "Thunder", ppg: 32.7, rpg: 5.0, apg: 6.4 },
        { name: "Jokic", team: "Nuggets", ppg: 29.6, rpg: 12.7, apg: 10.2 },
        { name: "Giannis", team: "Bucks", ppg: 30.4, rpg: 11.9, apg: 6.5 }
    ];

    let list = document.getElementById("mvp-list");
    list.innerHTML = "";
    mvpPlayers.forEach(player => {
        let li = document.createElement("li");
        li.textContent = `${player.name} (${player.team}) - ${player.ppg} PPG, ${player.rpg} RPG, ${player.apg} APG`;
        list.appendChild(li);
    });
    
    
}

async function playerStatLookup() {
    let Response, responseJSON; 
    
    var userInput = document.getElementById("player-search").value; 

    //Call to API 
    //url : https://api.balldontlie.io/v1/stats
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    const url = ' https://api.balldontlie.io/v1/players?search=' + userInput;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': '9442113e-0db9-44e6-93db-e0debe6db30e',
        }
    };

    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);

        document.getElementById("player-results").innerHTML = responseJSON.data[2].first_name + " " + responseJSON.data[2].last_name;
    } catch (e) {
        console.error(e); 
    }
}

function fetchNews() {
    // Replace with an API call
    document.getElementById("news-feed").innerHTML = `
        <p><strong>Breaking:</strong> The Dallas Mavericks have officially got the first overall pick in the lottery draft on Monday. <a href="https://www.nytimes.com/athletic/6350742/2025/05/12/2025-nba-draft-lottery-cooper-flagg/">Read more</a></p>
        <p><strong>Trade Rumors:</strong> Interest in Kevin Durant continues to increase from within the Rockets Organization. <a href="https://hoopshype.com/2025/05/05/rockets-trade-interest-in-kevin-durant-continues-to-be-exaggerated/">Read more</a></p>
    `;
}
