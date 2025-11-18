export function changeScenery(level: number): string {
    const backgrounds = [
        'url(assets/backgrounds/city.png)',
        'url(assets/backgrounds/green_field.png)',
        'url(assets/backgrounds/houses.png)',
        'url(assets/backgrounds/forest.png)',
        'url(assets/backgrounds/random_landscape.png)'
    ];

    const index = Math.floor(level / 50) % backgrounds.length;
    return backgrounds[index];
}

export function updateBackground(level: number): void {
    const body = document.body;
    body.style.backgroundImage = changeScenery(level);
}