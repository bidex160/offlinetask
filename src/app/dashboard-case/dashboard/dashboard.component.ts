import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { IContact } from 'src/models/interface';
import { ContactService } from 'src/services/contact.service';

const icon = L.icon({
  iconUrl: 'assets/icons/marker.png',
  shadowUrl: 'assets/icons/marker.png',
  iconSize: [50,50],
  shadowSize:   [0, 0],
});

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tab: number = 1
  displayedColumns: string[] = ['position', 'name', 'phoneNo', 'email', 'addresses', 'longitude', 'latitude'];
  dataSource: IContact[] = [];

  currentPosition: any

  constructor(
    private contactSer: ContactService
  ) {}

  ngOnInit(): void {
   this.contactSer.contactSubject.subscribe((r)=>{
    this.dataSource = r
   })

  }


  
 async initMap(){
   const position: any = await this.contactSer.getPosition()
    const map = L.map('map', {
      center: [ position.coords.latitude, position.coords.longitude],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(map);

    this.dataSource.forEach((r)=>{
      const marker = L.marker([r.latitude, r.longitude], { icon }).bindPopup('Marker');
      marker.addTo(map);
    })

 }
}
