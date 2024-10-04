import { Component, OnInit } from '@angular/core';

import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  eventos: any;


  constructor(private eventosService: EventosService) {}

  ngOnInit() {
    this.eventos = this.eventosService.searchData();
    //console.log(this.eventos);
  }

  delete(index: any){
    this.eventosService.deleteEvent(index);
    this.eventos = this.eventosService.searchData();
  }

}
