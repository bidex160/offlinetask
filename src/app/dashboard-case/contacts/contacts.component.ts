import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/services/contact.service';

export function phoneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const phoneNumber = control.value;
  const phoneRegex = /^(\+234|0)?\d{10}$/
  return phoneRegex.test(phoneNumber) ? null : { 'invalidPhoneNumber': true };
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit{
  form: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    phoneNo: new FormControl(null, [Validators.required, phoneNumberValidator]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    longitude: new FormControl(null, [Validators.required]),
    latitude: new FormControl(null, [Validators.required]),
    addresses: new FormArray([]),
  });

  constructor(
    private contactSer: ContactService
  ) {}

  ngOnInit(): void {
    this.addAddress()
    this.getPosition()
  }

   async getPosition() {
    const position: any = await this.contactSer.getPosition()
    try{
      this.form.patchValue({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }catch(er){

    }
   
  };
  

  get fArray(): FormArray{
    return this.form.controls['addresses'] as FormArray
  }


  addAddress(){
    this.fArray.push(
      new FormGroup({
        address: new FormControl(null, Validators.required)
      })
    )
  }


  removeAddress(index: number){
    this.fArray.removeAt(index)
  }

  submit(){
    const contact = {
     ...this.form.value,
     addresses: this.fArray.value.map((r: any)=>{
      return r.address
     })
    }
   this.contactSer.addContact(contact)
   this.form.reset()
   this.getPosition()
  }

}
