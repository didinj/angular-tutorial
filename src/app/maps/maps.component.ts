import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var google: any;
let map: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;

  constructor(public route: ActivatedRoute) {
    this.initMap(parseInt(this.route.snapshot.paramMap.get('lat'), 0), parseInt(this.route.snapshot.paramMap.get('lng'), 0));
  }

  ngOnInit() {
  }

  initMap(latitude: any, longitude: any) {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: latitude, lng: longitude },
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();

      marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: 'Click to zoom',
        icon: iconBase + 'blue-dot.png'
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

}
