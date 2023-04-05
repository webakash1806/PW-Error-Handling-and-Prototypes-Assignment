class User {
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    get password() {
        return this.#password.replace(/./g, '*');
    }

    set password(newPassword) {
        if (newPassword.length < 8 || !/\\d/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        } else {
            this.#password = newPassword;
        }
    }

    #password;
}

const user = new User('john', 'Password123');

user.password = 'newpassword';
user.password = 'Newpassword';
user.password = 'NewPassword12334343434';
console.log(user.password);