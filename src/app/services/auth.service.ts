import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, map, throwError } from 'rxjs';
interface Iuser {
  name: string;
  email: string;
  age: number;
  password?: string;
  phoneNumber: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usersCollection: AngularFirestoreCollection<Iuser>;
  public isAuthenticated$: Observable<boolean>;
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {
    this.usersCollection = this.db.collection('user');
    this.isAuthenticated$ = this.auth.user.pipe(map((user) => !!user));
    // this.auth.user.subscribe(console.log);
  }

  public async createUser(userData: Iuser) {
    if (!userData.password) {
      throw new Error('Password not provided');
    }
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string
    );
    await this.usersCollection.doc(userCred.user?.uid).set({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });
    await userCred.user?.updateProfile({
      displayName: userData.name,
    });
  }
}
