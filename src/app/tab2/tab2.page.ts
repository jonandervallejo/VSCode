import { Component } from '@angular/core';

import { EventosService } from '../servicios/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  evento = {id: -1, speaker: '', title: '', place: '', date: ''}
  constructor(private eventosService : EventosService, private router : Router ){}

  enviarFormulario(){

    this.eventosService.addEvent(this.evento);
    this.evento= {id: -1, speaker: '', title: '', place: '', date: ''}
    this.router.navigateByUrl('/tabs/tab1');
  }
}
