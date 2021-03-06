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
      title: "Título",
      text: "Este es el texto del cuadro de diálogo",
      icon: "warning",
      scrollbarPadding: true,
      showConfirmButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
      confirmButtonColor: "#5360a9",
    });
  }

  openDialogOneButton(): void {
    Swal.fire({
      title: "Un botón",
      text: "Este es un cuadro de diálogo de un botón.",
      icon: "warning",
      scrollbarPadding: true,
      showConfirmButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
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
    Swal.fire({
      title: "Dos botones",
      text: "Este es un cuadro de diálogo de dos botones.",
      icon: "warning",
      scrollbarPadding: true,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-check fa-fw"></i> Confirmar</strong>',
      confirmButtonColor: "#069539",
      cancelButtonText:
        '<strong><i class="fa fa-times fa-fw"></i></i>Cancelar</strong>',
      cancelButtonColor: "#cc253a",
    })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }

  openDialogThreeButtons(): void {
    Swal.fire({
      title: "Tres botones",
      text: "Este es un cuadro de diálogo de tres botones.",
      icon: "warning",
      width: "40rem",
      scrollbarPadding: true,
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText:
        '<strong><i class="fa fa-check fa-fw"></i> Confirmar</strong>',
      confirmButtonColor: "#069539",
      denyButtonText:
        '<strong><i class="fa fa-thumbs-up fa-fw"></i> OK</strong>',
      denyButtonColor: "#5360a9",
      cancelButtonText:
        '<strong><i class="fa fa-times fa-fw"></i> Cancelar</strong>',
      cancelButtonColor: "#cc253a",
    })
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}
