import { Component} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
      datos:any = new Array;
      confirmacion:any;
      nom:string = "";
      ape:string = "";
      carr:string = "";
      valor:any;
      habilitar(){
        if(this.nom == "" || this.ape =="" || this.carr==""){
          return this.valor = true;
        }else{
          return this.valor=false;
        }
      }
      Agregar() {
        if(this.nom !== "" && this.ape !== "" && this.carr !== "") {
          this.datos.push({'Nombre':this.nom, 'Apellidos':this.ape,'Carrera':this.carr});
          this.nom = "";
          this.ape = "";
          this.carr ="";
        }else{
          alert("datos vacios!! 🚨")
        }
        }

      Eliminar(indice:number) {
        this.confirmacion = confirm("desea eliminar?");
            if(this.confirmacion == true){
              this.datos.splice(indice, 1);
            }
      }

}
