import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './google-maps-demo.component.html',
  styleUrls: ['./google-maps-demo.component.css']
})
export class GooglemapComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
    display: any;
    // Output decorator to send data to the parent (home) component
    @Output() snapshot = new EventEmitter<object>();
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
    setCoords(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.snapshot.emit(event.latLng.toJSON());
    }
}