export function signIn(user) {
    return fetch('https://app.fakejson.com/q/90QpDqu4?token=87N3dd1vw3XTqQZdYbbtEQ')
        .then(res => res.json())
        .then(
            data => {
                console.log('auth-api: signIn', data);
                return data;
            }
        );
}

export async function signUp(user) {
    return true;
}

export async function signOut() {
    return true;
}