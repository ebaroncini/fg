import { Injectable } from '@angular/core';
import { Work } from './work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  offset: number;
  works: Work[];
  works1: Work[];
  works2: Work[];
  workArrayJson = `
  [
    {
      "id": "trabajo_10",
      "title": "Gatitos",
      "name": "Gatitos",
      "image": "images/works/trabajo_10/delantal-Home.jpg",
      "images": [
        "images/works/works-image-1.jpg",
        "images/works/works-image-2.jpg",
        "images/works/works-image-3.jpg"
      ],
      "shortDescription": "Desarrollo completo de alimento para gatos",
      "largeDescription": "Desarrollo completo de alimento para gatos",
      "details": ["Molino Fainax es una PyMe familiar de reciente presencia en el mercado local."]
    },
    {
      "id": "trabajo_8",
      "title": "Anatome Milano",
      "name": "Fainax",
      "image": "images/works/trabajo_8/corazon-animado.gif",
      "images": [
        "images/works/works-image-1.jpg",
        "images/works/works-image-2.jpg",
        "images/works/works-image-3.jpg"
      ],
      "shortDescription": "Galerie Anatome based in Paris",
      "largeDescription": "Identidad, Packaging, Print",
      "details": ["Molino Fainax es una PyMe familiar de reciente presencia en el mercado local."]
    },
    {
      "id": "trabajo_9",
      "title": "Studio Thonik",
      "name": "Fainax",
      "image": "images/works/trabajo_9/Portata-Agenda-Home.jpg",
      "images": [
        "images/works/works-image-1.jpg",
        "images/works/works-image-2.jpg",
        "images/works/works-image-3.jpg"
      ],
      "shortDescription": "Project for Thonik, design studio based in Amsterdam",
      "largeDescription": "Identidad, Packaging, Print",
      "details": ["Molino Fainax es una PyMe familiar de reciente presencia en el mercado local."]
    },
    {
      "id": "trabajo_1",
      "titulo": "NARANJA",
      "name": "Fainax",
      "image": "images/works/trabajo_1/iOCUS-Poster-Vertical.jpg",
      "images": [
        "images/works/works-image-1.jpg",
        "images/works/works-image-2.jpg",
        "images/works/works-image-3.jpg"
      ],
      "shortDescription": "Project for Thonik, design studio based in Amsterdam",
      "largeDescription": "Identidad, Packaging, Print",
      "details": ["Molino Fainax es una PyMe familiar de reciente presencia en el mercado local."]
    },
    {
      "id": "oliva",
      "title": "Olíve",
      "name": "Olíve",
      "image": "images/works/oliva/oliva_01.jpg",
      "images": [
        "images/works/oliva/oliva_01.jpg"
      ],
      "shortDescription": "Aceite de oliva",
      "largeDescription": "Identidad, Packaging, Print",
      "details": ["Loren ipsum"]
    }
  ]
  `;

  constructor() {
    this.works = <Work[]>JSON.parse(this.workArrayJson);
    this.offset = Math.floor(this.works.length / 2);
    this.works1 = this.works.slice(0, this.offset);
    this.works2 = this.works.slice(this.offset);
    console.log("<<< service");
    console.log(this.works);
    console.log(this.works1);
    console.log(this.works2);
    console.log("service >>>");
  }

  getWorks(option: number) {
    if (option === 0) {
      return this.works1.slice();
    } else {
      return this.works2.slice();
    }
  }

  getWork(id: string) {
    let index = this.works.findIndex(function(element){
      return element.id === id; 
    });
    let work = this.works[index];
    let previous = null;
    let next = null;
    if (index > 0) {
      previous = this.works[index - 1].id;
    }
    if (index < this.works.length - 1) {
      next = this.works[index + 1].id;
    }    
    return {"work": work, "previous": previous, "next": next};
  }
}
