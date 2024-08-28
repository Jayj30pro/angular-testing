import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { of } from 'rxjs';
import { fakeAsync, tick } from '@angular/core/testing';
import { User } from './user.type';

// Define the User interface
// interface User {
//   id: string;
//   name: string;
//   role: string;
//   pokemon: string;
// }

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });

    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  describe('all', () => {
    it('should return a collection of users', fakeAsync(() => {
      const userResponse: User[] = [
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
        }
      ];

      let response: User[] | undefined;

      // Explicitly cast the return value to Observable<User[]>
      spyOn(usersService, 'all').and.returnValue(of(userResponse) as any);

      usersService.all().subscribe((res: any) => {
        response = res;
      });

      tick();
      expect(response).toEqual(userResponse);
    }));
  });

  describe('findOne', () => {
    it('should return a single user', fakeAsync(() => {
      const userResponse: User = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };

      let response: User | undefined;

      // Explicitly cast the return value to Observable<User>
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse) as any);

      usersService.findOne('2').subscribe((res: any) => {
        response = res;
      });

      tick();
      expect(response).toEqual(userResponse);
    }));
  });
});
