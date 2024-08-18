import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IContact } from "src/models/interface";

declare var navigator: any;


@Injectable({
    providedIn: 'root'
})

export class ContactService {
 contactSubject: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([])

 addContact(contact: IContact){
    const contacts = this.contactSubject.value
    this.contactSubject.next([contact, ...contacts])
 }

  getPosition () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
} 