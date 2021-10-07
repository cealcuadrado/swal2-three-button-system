import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialogBox(): void {
    Swal.fire({
      title: 'Título',
      text: 'Este es el texto del cuadro de diálogo',
      icon: 'warning',
      scrollbarPadding: true,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: '#5360a9'
    });
  }

  openDialogOneButton(): void {
    Swal.fire({
      title: "Un botón",
      text: "Este es un cuadro de diálogo de un botón.",
      icon: "warning",
      scrollbarPadding: true,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: "#5360a9",
    })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  openDialogTwoButtons(): void {

  }

  openDialogThreeButtons(): void {

  }
}
