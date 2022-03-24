import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public amount: number = 98765;

  public testDate: Date = new Date();

  public texto: string = 'Que paso cotorros como están';

  public numberPI: number = Math.PI;

  public numberPercent: number = 0.03;

  public password: string = '1234MuyDificil';

  public changeLetters: boolean = false;

  //Usamos pag web para hacer un fake Json
  public jsonFake: any[] = [
    {
      _id: '61ba7bd823a013cb000f3e42',
      index: 0,
      guid: '43372273-b7e4-4647-988c-797a68f9df01',
      isActive: false,
      balance: '$3,483.01',
      picture: 'http://placehold.it/32x32',
      age: 27,
      eyeColor: 'brown',
      name: 'Susan Chang',
      gender: 'female',
      company: 'ENDICIL',
      email: 'susanchang@endicil.com',
      phone: '+1 (899) 573-3071',
      address: '616 Dinsmore Place, Fannett, Montana, 9245',
      about:
        'Mollit qui pariatur irure aliquip. Et non cupidatat reprehenderit aute. Excepteur.\r\n',
      registered: '2018-12-22T06:19:53 +03:00',
      latitude: -4.876094,
      longitude: 114.557234,
      tags: [
        'incididunt',
        'anim',
        'excepteur',
        'cupidatat',
        'nisi',
        'velit',
        'Lorem',
      ],
      friends: [
        {
          id: 0,
          name: 'Holt Parrish',
        },
        {
          id: 1,
          name: 'Gayle Dodson',
        },
        {
          id: 2,
          name: 'Becky Garza',
        },
      ],
      greeting: 'Hello, Susan Chang! You have 3 unread messages.',
      favoriteFruit: 'banana',
    },
    {
      _id: '61ba7bd8a6477f270c7b417f',
      index: 1,
      guid: 'fd0e4783-a135-4b16-a0a5-efec39ca7634',
      isActive: true,
      balance: '$2,987.45',
      picture: 'http://placehold.it/32x32',
      age: 36,
      eyeColor: 'brown',
      name: 'Hoover Black',
      gender: 'male',
      company: 'BOSTONIC',
      email: 'hooverblack@bostonic.com',
      phone: '+1 (868) 518-2208',
      address: '419 Lewis Avenue, Monument, South Carolina, 9195',
      about:
        'Minim laborum proident tempor laboris eiusmod eu ipsum excepteur proident eu. Officia reprehenderit pariatur cupidatat est. .\r\n',
      registered: '2021-04-23T07:56:19 +03:00',
      latitude: -32.369998,
      longitude: 132.369907,
      tags: [
        'ad',
        'veniam',
        'consectetur',
        'incididunt',
        'aute',
        'sunt',
        'enim',
      ],
    },
  ];

  public obsevable$: Observable<number[]> = from([1, 2, 3, 4, 5]).pipe(
    toArray()
  );

  //Spread operator
  public fatherList: number[] = [3, 4];
  public childList: number[] = [1, 2, ...this.fatherList, 5, 6];

  public firstList: number[] = [1, 2, 3, 4, 5];
  public secondList: number[] = [6, 7, 8, 9, 10];
  public thirdList: number[] = [...this.firstList, ...this.secondList];

  //Math.Max
  public maxElementoList: number = Math.max(...[6, 7, 8, 9, 10]);

  public dog: any = {
    name: 'Dora',
    age: 11,
    race: 'chihuahua',
    idDueño: 13,
  };

  public OwnerList: { id: number; nombre: string }[] = [
    {
      id: 13,
      nombre: 'Bilbo Baggins',
    },
    {
      id: 14,
      nombre: 'Frodo Baggins',
    },
    {
      id: 15,
      nombre: 'Gandalf the grey',
    },
    {
      id: 16,
      nombre: 'Elrond',
    },
  ];

  constructor() {
    console.log(this.maxElementoList);
    let newArray: any = []
    console.log(
      this.OwnerList.map((owner) =>
        owner.id == this.dog.idDueño ? { ...owner, ...this.dog } : null
      )
    );
  }
}
