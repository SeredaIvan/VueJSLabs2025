import { apiLogin, apiRegister } from './fakeApi';

export function getStoredUser() {
    return JSON.parse(localStorage.getItem('auth_user') || 'null');
}

export function setStoredUser(user) {
    localStorage.setItem('auth_user', JSON.stringify(user));
}

export function clearStoredUser() {
    localStorage.removeItem('auth_user');
}

export async function login(payload) {
    const user = await apiLogin(payload);
    setStoredUser(user);
    return user;
}

export async function register(payload) {
    const user = await apiRegister(payload);
    setStoredUser(user);
    return user;
}

export function logout() {
    clearStoredUser();
}
