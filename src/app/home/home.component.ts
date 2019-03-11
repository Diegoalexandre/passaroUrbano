import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertasModel } from '../shared/ofertas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  ofertas: Array<OfertasModel>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();

    this.ofertasService.getOfertas2()
      .then((ofertas: OfertasModel[]) => {
        this.ofertas = ofertas;
      })
      .catch((error: any) => console.log(error));
  }

}
