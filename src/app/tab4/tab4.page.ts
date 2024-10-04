import { Component, OnInit } from '@angular/core';
import { EventosService } from '../servicios/eventos.service';

//importar el router para cambiar componentes
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  eventos: any;


  constructor(private eventosService: EventosService, private router:Router) {}

  ngOnInit() {
    this.eventos = this.eventosService.searchData();
    //console.log(this.eventos);
  }

  update(id:any){
    this.router.navigateByUrl('/edit-event/'+id);
  }

}
