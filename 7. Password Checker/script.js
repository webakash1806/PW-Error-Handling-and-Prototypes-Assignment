class User {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    getpassword() {
        return this.#password.replace(/./g, '*');
    }

    setpassword(newPassword) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(newPassword)) {
            console.error('Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        } else {
            this.#password = newPassword;
        }
    }


}

const user = new User('john', 'Password123');
console.log(user.getpassword());

user.setpassword('Newpassword');
user.setpassword('newpassword123');
user.setpassword('Newassword12334343434');
console.log(user.getpassword());