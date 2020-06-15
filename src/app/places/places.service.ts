import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Manhattan Mansion', 
      'In the heart of New York City.', 
      'https://d.neoldu.com/news/5893.jpg', 
      166.99),
      new Place(
        'p2', 
        'Adana', 
        'In the heart of New York City.', 
        'https://d.neoldu.com/news/5893.jpg', 
        186.99),
        new Place(
          'p2', 
          'İzmir', 
          'In the heart of New York City.', 
          'https://i.pinimg.com/originals/c3/46/e3/c346e3b593d008d55e3fcc9f65a80335.jpg', 
          186.99)

  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
