function getGame(image, name, rank) {
    return {
        id: `${name}_${Math.floor(Math.random() * 101)}`,
        name,
        image,
        rank,
    };
}
