import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  constructor(private fireStore: AngularFirestore) {
  }

  agregarEmpleado(empleado: any): Promise<any> {
    return this.fireStore.collection("empleados").add(empleado);
  }

  getEmpleados(): Observable<any> {
    return this.fireStore.collection('empleados', ref => ref.orderBy("fechaCreacion", "asc")).snapshotChanges();
  }

}