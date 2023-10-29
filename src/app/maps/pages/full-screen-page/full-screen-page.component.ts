import { NativeName } from './../../../../../../03-country/src/app/countries/interfaces/country';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Map} from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent  implements AfterViewInit{

  @ViewChild('map') divMap?:ElementRef;



  ngAfterViewInit(): void {

    if(!this.divMap) throw 'El elemento htm no fue encontrado';

    //console.log (this.divMap.nativeElement );

    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [ -73.967,4.717], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }


}
