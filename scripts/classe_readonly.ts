class User{
    readonly id: string = "123123klklfgklfg";
    name: string = "João";
    private password: string = "123456";
    readonly dateRegister: Date = new Date("2021-02-04")
}

const user = new User();
console.log(user.id);
