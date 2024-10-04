import { Injectable } from '@angular/core';

export interface Event{id: number; speaker: string; title:string; place:string; date:string;}

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private events : Event[] = [];

  constructor() { 
    this.events = [
      {
      id : 0,
      speaker : 'Homer Simpson',
      title : 'Emprender en Compugglobalhipermeganet',
      place : 'Bilbao',
      date : '2024-12-21'
      },
      {
        id : 1,
        speaker : 'Stewie Griffin',
        title : 'Como generar ingresos siguiendo gordos con tuba',
        place : 'Donostia',
        date : '2024-05-11'
      },
      {
        id : 2,
        speaker : 'Homer simpson',
        title : 'Corre platano',
        place : 'Gasteiz',
        date : '2024-8-21'
      },
      {
        id : 3,
        speaker : 'Pedro Sanchez',
        title : 'Presidente de españa',
        place : 'Madrid',
        date : '2024-8-21'
      }
    ];
  }

  searchData(){

    return this.events;
  }

  addEvent(evento:Event){

    let nuevoEvento = {id: this.events.length, speaker: evento.speaker,
                      title: evento.title, place:evento.place, date: evento.date}
    this.events.push(nuevoEvento);
  }

  deleteEvent(index: any){

    this.events.splice(index, 1);
  }

  findEvent(id: any):any{
    for (const element of this.events) {

      if(element.id == id){
        return element;
      }
      
    }
    //return null;
  }

  updateEvent(event_id:any, event:any){
    for (const element of this.events) {

      if(element.id == event_id){
        element.speaker = event.speaker;
        element.place = event.place;
        element.title = event.title;
        element.date = event.date;
      }  
    }
  }


}
