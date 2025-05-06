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
    const userInput = document.getElementById("player-search").value.trim();
    const resultsContainer = document.getElementById("player-results");

    if (!userInput) {
        resultsContainer.innerHTML = "<p>Please enter a player name.</p>";
        return;
    }

    const url = 'https://api.balldontlie.io/v1/players?search=' + userInput;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': '9442113e-0db9-44e6-93db-e0debe6db30e'
        }
    };

    try {
        const Response = await fetch(url, options);
        const responseJSON = await Response.json();

        const matchedPlayers = responseJSON.data;

        if (!matchedPlayers || matchedPlayers.length === 0) {
            resultsContainer.innerHTML = "<p>No player found. Try putting in full name</p>";
            return;
        }

        const player = matchedPlayers.find(p => 
            `${p.first_name.toLowerCase()} ${p.last_name.toLowerCase()}` === userInput.toLowerCase()
        ) || matchedPlayers[0]; 

        resultsContainer.innerHTML = `
            <h3>${player.first_name} ${player.last_name}</h3>
            <p><strong>College:</strong> ${player.college || "N/A"}</p>
            <p><strong>Country:</strong> ${player.country}</p>
            <p><strong>Draft:</strong> ${player.draft_year ? `${player.draft_year}, Round ${player.draft_round}, Pick ${player.draft_number}` : "N/A"}</p>
            <p><strong>Height:</strong> ${player.height || "N/A"}</p>
            <p><strong>Jersey:</strong> ${player.jersey_number || "N/A"}</p>
            <p><strong>Position:</strong> ${player.position || "N/A"}</p>
            <p><strong>Team:</strong> ${player.team.full_name} (${player.team.abbreviation})</p>
        `;
    } catch (error) {
        console.error(error);
        resultsContainer.innerHTML = "<p>Error fetching player data. Try again later.</p>";
    }
}


function fetchNews() {
    // Replace with an API call
    document.getElementById("news-feed").innerHTML = `
        <p><strong>Breaking:</strong> Nuggets steal Game 1 from the No 1 seed Thunder with a game winning three by Aaron Gordon. <a href="https://pagesix.com/2025/04/22/celebrity-news/nba-fines-anthony-edwards-50k-for-vulgar-response-to-fan-asking-about-his-alleged-4-kids/">Read more</a></p>
        <p><strong>Trade Rumors:</strong> Interest in Kevin Durant continues to increase from within the Rockets Organization. <a href="https://hoopshype.com/2025/05/05/rockets-trade-interest-in-kevin-durant-continues-to-be-exaggerated/">Read more</a></p>
    `;
}
