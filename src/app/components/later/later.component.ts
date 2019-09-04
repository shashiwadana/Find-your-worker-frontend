import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-later',
  templateUrl: './later.component.html',
  styleUrls: ['./later.component.scss']
})
export class LaterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  longitude = 20.728218;
latitude = 52.128973;

markers = [
{ latitude: 52.228973, longitude: 20.728218 }
];

placeMarker(position: any) {
const lat = position.coords.lat;
const lng = position.coords.lng;

this.markers.push({ latitude: lat, longitude: lng });
}


}
