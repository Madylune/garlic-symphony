const LOCAL_STORAGE_KEY = 'garlic-player-name';

export const findPlayerName = () => localStorage.getItem(LOCAL_STORAGE_KEY);

export const storePlayerName = playerName => localStorage.setItem(LOCAL_STORAGE_KEY, playerName);
