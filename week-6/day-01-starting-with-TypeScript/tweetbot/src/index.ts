import * as express from 'express';
import * as moment from 'moment';

const app = express()

// app
//   .get('/users/:id([0-9]+)', (req, res) => {
//     const userId: string = req.params.id
//     if (Number(userId) === 123) { //to convert string to a number we user Number(string), so now we can compare it with a number
//       res.send({
//         name: 'Jan Klaassen',
//         age: 60
//       })
//     }
//     else {
//       res.status(404).send(`User ${userId} not found!`)
//     }
//   })
//   .listen(12345, () => console.log('Listening on port 12345'))


interface UserEntity {
    id: number
    firstName: string
    lastName: string
    birthDate: Date
}

interface UserResponse {
    user: {
        name: string
        age: number
    }
}//define how the object is going to look like

const toUser = (entity: UserEntity): UserResponse => {
    return {
        user: {
            name: `${entity.firstName} ${entity.lastName}`,
            age: moment().diff(entity.birthDate, 'years')
        }
    }
}

const user = toUser({
    id: 1,
    firstName: 'Alice',
    lastName: 'Rabbit',
    birthDate: new Date(1986, 12)
})
      
console.log(user);

const alice: UserEntity = {
    id: 1,
    firstName: 'Alice',
    lastName: 'Pleasance Liddell',
    birthDate: new Date(1865, 5, 4)
  }

const getUser = (id: number) => new Promise<UserEntity | null>((resolve, reject) => {
    setTimeout(() => {
      if (id === 123) resolve(alice)
      else if (id > 1000) reject(new Error('getUser error!'))
      else resolve(null)
    }, 500)
  })

//   interface YourInterface {
//     nickname: string
//     color: 'blue' | 'white'
//     age: number
//     websites: string[]
//     job: { name: string }
//   }


app
    .get('/users/:id([0-9]+)', async (req, res) => {
        const response = await getUser(parseInt(req.params.id))
    
        if (response) res.send(toUser(response))
        else res.status(404).send(`User not found!`)
    })
    .listen(12345, () => console.log('Listening on port 12345')) //this part is refacturing the app from line 6