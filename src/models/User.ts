export class User {
    //***caracteristicas, informações --> ATRIBUTOS
    // private id:string
    // private name:string
    // private email:string
    // private password:string

    //***ações, funções --> METODOS
    constructor(
        private id:string, 
        private name:string, 
        private email:string,
        private password:string,
        private createdAt:string)
    {
    //    this.id = id
    //    this.name = name
    //    this.email = email
    //    this.password = password
    }
    //OUTROS METODOS
    public getId():string{
        return this.id
    }
    public setId(newId:string):void{
        this.id = newId
    }

    public getName(){
        return this.name
    }
    public setName(newName:string):void{
        this.name = newName
    }

    public getEmail(){
        return this.email
    }
    public setEmail(newEmail:string):void{
        this.email = newEmail
    }

    public getPassword(){
        return this.password
    }
    public setPassword(newPassword:string):void{
        this.password = newPassword
    }
    
    public getCreatedAt(){
        return this.createdAt
    }
    public setCreatedAt(newCreatedAt:string):void{
        this.createdAt = newCreatedAt
    }

    // CriaConta()

    // MudarConta()
}

//***INSTACIAR
const user1 = new User("001","Murilo","murilo@email.com","1234", "2023-01-30 10:00:00")

const user2 = new User("002","Tais", "tais@email.com", "4321", "2023-01-30 10:00:00")

// console.log(user1.id) // erro pq ta privado
// console.log(user1.getId()) // 001

// user1.id = "010"
user1.setId("010")



// const Tais = user2.name //erro
const Tais = user2.getName // Tais


























user1.setId("011")

























