import { Component, OnInit } from '@angular/core';

//importamos el componente para recoger el id
import { ActivatedRoute } from '@angular/router';

//importamos los servicios
import { EventosService } from '../servicios/eventos.service';

//importamos el modulo para poder navegar entre los componentes
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {
  //variable para recoger el id
  event_id: any;
  evento: any;

  constructor(private route:ActivatedRoute, private service:EventosService, private router:Router) { }

  ngOnInit() {
    //recogemos el id de la url, la ruta
    this.event_id = this.route.snapshot.paramMap.get('event_id');
    //console.log(this.event_id);
    this.evento= this.service.findEvent(this.event_id);
    }

    enviarFormulario(){
      this.service.updateEvent(this.event_id, this.evento);
      this.router.navigateByUrl('');
    }

}
