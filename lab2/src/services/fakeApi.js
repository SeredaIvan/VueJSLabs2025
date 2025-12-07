
let users = JSON.parse(localStorage.getItem('users') || '[]');

const save = () => localStorage.setItem('users', JSON.stringify(users));

export function seedIfEmpty() {
    if (!users.length) {
        users = [
            { id: 1, name: 'Admin', email: 'admin@email.com', password: '1' },
            { id: 2, name: 'User One', email: 'one@email.com', password: '123' },
        ];
        save();
    }
}

export async function apiRegister({ name, email, password }) {
    const exists = users.find(u => u.email === email);
    if (exists) alert('Email already used');
    const id = Date.now();
    const user = { id, name, email, password };
    users.push(user); save();
    return { id, name, email };
}

export async function apiLogin({ email, password }) {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return { id: user.id, name: user.name, email: user.email };
}

export async function apiGetUsers() {
    return users.map(({ password, ...rest }) => rest);
}

export async function apiGetUser(id) {
    const u = users.find(x => String(x.id) === String(id));
    if (!u) throw new Error('Not found');
    const { password, ...rest } = u;
    return rest;
}

