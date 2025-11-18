export function saveGameState(state: any) {
    localStorage.setItem('stickmanClickerGame', JSON.stringify(state));
}

export function loadGameState() {
    const savedState = localStorage.getItem('stickmanClickerGame');
    return savedState ? JSON.parse(savedState) : null;
}

export function clearGameState() {
    localStorage.removeItem('stickmanClickerGame');
}