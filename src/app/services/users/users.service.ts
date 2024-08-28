import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Add imports
import { User } from './user.type';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users: Array<User> = [  // change object to user afterr created
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Developer',
      pokemon: 'Venusaur'
    },
    {
      id: '4',
      name: 'Adam',
      role: 'Designer',
      pokemon: 'Yoshi'
    }
  ];

  constructor() { }

  all(): Observable<Array<object>> {
    return of(this.users);
  }
  
  findOne(id: string): Observable<object | undefined> {
    const user = this.users.find((u: any) => u.id === id);
    return of(user);
  }
}