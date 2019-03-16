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
      "image": "images/works/trabajo_10/delantal-Home.jpg",
      "images": [
        "images/works/works-image-1.jpg",
        "images/works/works-image-2.jpg",
        "images/works/works-image-3.jpg"
      ],
      "shortDescription": "Desarrollo completo de alimento para gatos",
      "largeDescription": "Desarrollo completo de alimento para gatos",
      "details": [
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.",
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consueum formas humanitatis per seacula quarta deciEodem modo tythepi, qui nunc, fiant sollemnes in futurum."
      ]
    },
    {
      "id": "olive",
      "title": "Olive",
      "image": "images/works/olive/home.jpg",
      "images": [
        "images/works/olive/work-1.jpg",
        "images/works/olive/work-2.jpg",
        "images/works/olive/work-3.jpg"
      ],
      "shortDescription": "Branding, Packaging",
      "largeDescription": "Aceite de oliva, suave y natural",
      "details": [
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.",
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consueum formas humanitatis per seacula quarta deciEodem modo tythepi, qui nunc, fiant sollemnes in futurum."
      ]
    },
    {
      "id": "trabajo_8",
      "title": "Anatome Milano",
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
      "id": "cover-book",
      "title": "Cover book",
      "image": "images/works/cover_book/Agenda-Home.jpg",
      "images": [
        "images/works/cover_book/work_1.jpg",
        "images/works/cover_book/work_2.jpg",
        "images/works/cover_book/work_3.jpg"
      ],
      "shortDescription": "Project for Thonik, design studio based in Amsterdam",
      "largeDescription": "Identidad, Packaging, Print",
      "details": [
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.",
        "Claritas est etiam processus dynamicus, qui sequitur mutationem consueum formas humanitatis per seacula quarta deciEodem modo tythepi, qui nunc, fiant sollemnes in futurum.",
        "Molino Fainax es una PyMe familiar de reciente presencia en el mercado local."]
    },
    {
      "id": "trabajo_1",
      "titulo": "NARANJA",
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
