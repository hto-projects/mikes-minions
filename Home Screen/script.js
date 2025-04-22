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
    const url = 'https://api.balldontlie.io/v1/games?seasons[]=2025';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': '9442113e-0db9-44e6-93db-e0debe6db30e',
            //'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    try {
        Response = await fetch(url, options);
        responseJSON = await Response.json();
        console.log(responseJSON);
        /* For Upcoming games 
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
        
            //Time is in UTC Time, need to convert time into est
           document.getElementById("game-time").innerHTML = " Time: " + responseJSON.response[0].date.start.slice(11,16); 
                    
           } else {
            document.getElementById("live-game").innerHTML = "No game data available";
        }
            */ 
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
    const url = 'https://api.balldontlie.io/v1/players?search=james';
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
        if (responseJSON && responseJSON.response && responseJSON.response.length > 0) {
            document.getElementById("mvp-list").innerHTML = responseJSON;
        } else {
            document.getElementById("live-game").innerHTML = "No game data available";
        }
        */

        //document.getElementById("mvp-list").innerHTML = responseJSON.response[0].
    } catch (error) {
        console.error(error);
    }


    /* Replace with an actual API call
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
    */
    
}

function fetchAIPrediction() {
    // Replace with AI analysis
    document.getElementById("ai-prediction").textContent = 
        "based on team stats.......";
}

function fetchNews() {
    // Replace with an API call
    document.getElementById("news-feed").innerHTML = `
        <p><strong>Breaking:</strong> Anthony Edwards fined $50,000 for an inapropriate response to a fan after questioned the whereabouts of his four alleged kids. <a href="https://pagesix.com/2025/04/22/celebrity-news/nba-fines-anthony-edwards-50k-for-vulgar-response-to-fan-asking-about-his-alleged-4-kids/">Read more</a></p>
        <p><strong>Trade Rumors:</strong> An NBA trade rumor is emerging that the Lakers are trying to find the "perfect" Luka Doncic teamate as LeGOAT starts to age. <a href="https://lakeshowlife.com/wild-nba-trade-rumor-opens-door-lakers-perfect-luka-doncic-teammate">Read more</a></p>
    `;
}
