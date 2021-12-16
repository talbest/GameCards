function deleteBtn() {
    const parantId = this.parentElement.parentElement.id
    const movieIndex = state.games.findIndex(function (current) {
        return current.id === parantId;
    })
    state.games.splice(movieIndex, 1)
    localStorage.setItem(CONFIG.GAMES, JSON.stringify(state.games));
    draw(state.games);


}