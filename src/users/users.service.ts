import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "city": "Gwenborough"
            },
            "company": {
              "name": "Romaguera-Crona"
            },
            "role": "ADMIN"
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
              "city": "Wisokyburgh"
            },
            "company": {
              "name": "Deckow-Crist"
            },
            "role": "ENGINEER"
          },
          {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
              "city": "McKenziehaven"
            },
            "company": {
              "name": "Romaguera-Jacobson"
            },
            "role": "INTERN"
          },
          {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
              "city": "South Elvis"
            },
            "company": {
              "name": "Robel-Corkery"
            },
            "role": "ENGINEER"
          },
          {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
              "city": "Roscoeview"
            },
            "company": {
              "name": "Keebler LLC"
            },
            "role": "INTERN"
          },
          {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
              "city": "South Christy"
            },
            "company": {
              "name": "Considine-Lockman"
            },
            "role": "ADMIN"
          }
    ];

    findAll( role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }
    findOne(id : number ){
        const user= this.users.find(user => user.id ===id)
        return user
    }
    create(user: {
        name: string, email: string, role: "INTERN" | "ENGINEER " | 'ADMIN'
    }) {
        const userByHighestId = [...this.users].sort((a,b)=> b.id -a.id)
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }
    update(id: number, updatedUser: {name?: string, email?: string, role?: "INTERN"| "ENGINEER" | 'ADMIN'}) {
    
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {...user, ...updatedUser}
            }
            return user
        })
return this.findOne(id)
    }
    delete(id : number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }

}
