import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular CRUD';
  //3.declaro mi arreglo de empleados
  empleado = [
    {'nombre':'Pepe','apellidos':'Gonzales Gonzales'},
    {'nombre':'Juana','apellidos':'Magdalena Rojas'},
    {'nombre':'Roberto','apellidos':'Cordero Robles'},
    {'nombre':'Alejandra','apellidos':'Rodriguez Cuba'},
    {'nombre':'Mariano','apellidos':'Troglio Soso'}
  ];

  mensaje:string ="";
  
  //5.declaro un modelo que contendra los cambios temporales  
  model:any = {};
  modelActualizar:any={};//para actualizar los datos que se guardan en la tabla
  ocultarFormularioActualizar:boolean=true;//variable creada para ocultar formulario actualizar

  //4.declaro mis metodos para el crud
  //4.1: como no retorna nada le digo que es de tipo void
  agregarEmpleado():void{
    this.empleado.push(this.model);//agrego los empleados a mi modelo
    //para el mensaje 
    this.mensaje="Empleado Agregado Satisfactoriamente";
  }

    //creo una variable global 
    obtenerIndice;

  eliminarEmpleado(indice):void{
    let respuesta=confirm('¿Estas seguro de Eliminar esta Trabajor?');
    if(respuesta){
      this.empleado.splice(indice,1);//elimina y reubica al indice
      this.mensaje="Empleado Eliminado Satisfactoriamente";
      this.ocultarFormularioActualizar=true;  
    }
  }

  editarEmpleado(indice):void{
    //con esto le digo que no oculte el formulario de actualizar
    this.ocultarFormularioActualizar=false;  
    //trae los datos del empleado por sus key, dependiendo del indice que selecciono.
    this.modelActualizar.nombre = this.empleado[indice].nombre;
    this.modelActualizar.apellidos = this.empleado[indice].apellidos;
    this.obtenerIndice = indice;
  }

  actualiarArregloEmpleado(){
    console.log(this.modelActualizar);
    let i = this.obtenerIndice;
    for(let j=0; j<this.empleado.length;j++){
      if(i==j){
        this.empleado[i]=this.modelActualizar;
        this.mensaje="Empleado Actualizado Satisfactoriamente";
        this.modelActualizar={}//limpiamos la variable temporal;
      }
    }
  }
  closeAlert():void {
    this.mensaje="";
  }

}
