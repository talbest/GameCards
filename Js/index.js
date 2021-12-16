const DOM = {
    gamePayload: {
        form: null,
        gameName: null,
        gameImgUrl: null,
        gameRank: null,
    },
    gameContainer: null,
    addButton: null,
}

const CONFIG = { GAMES: "games" };
const state = {
    games: [],
}

function init() {
    DOM.gamePayload.form = document.querySelector("#addGameForm");
    DOM.gamePayload.gameName = DOM.gamePayload.form["gameName"];
    DOM.gamePayload.gameImgUrl = DOM.gamePayload.form["gameImgUrl"];
    DOM.gamePayload.gameRank = DOM.gamePayload.form["GameRank"];
    DOM.gameContainer = document.querySelector("#gameContainer")
    DOM.addButton = document.querySelector("#addButton")
    DOM.addButton.addEventListener("click", addGame)

    try {
        const gamesString = localStorage.getItem(CONFIG.GAMES);
        const games = JSON.parse(gamesString);
        if (!games) return;
        state.games = games;
    } catch { }
    draw(state.games);
}

function draw(games) {
    DOM.gameContainer.innerHTML = "";
    for (let index = 0; index < games.length; index++) {
        const gameCard = getCardUi(games[index]);
        if (!gameCard) return;
        DOM.gameContainer.append(gameCard);
    }
}

init();

function addGame() {
    const gameName = DOM.gamePayload.gameName.value;
    const gameimage = DOM.gamePayload.gameImgUrl.value;
    const gameRank = DOM.gamePayload.gameRank.value;
    game = getGame(gameimage, gameName, gameRank);
    state.games.push(game);
    localStorage.setItem(CONFIG.GAMES, JSON.stringify(state.games));
    draw(state.games);

}

