import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
    this.listar();
  }

  // primero a modo de prueba crearemos JSON
  lista_personas = [
  {
    rut:"17888777-k",
    nombre:"Pedro",
    edad:50
  },{
    rut:"18888555-5",
    nombre:"Juan",
    edad:20
  },{
    rut:"15222111-1",
    nombre:"Diego",
    edad:40
  }
  ];


  //metodos de trabajo
  actualizar(rut:string){
    alert('Ha dado click en actualizar el rut: '+ rut);
  }

  eliminar(rut:string){
    alert('Ha dado click en eliminar el rut: '+ rut); 
  }

  //listar la informacion en nuestra pagina
  listar(){
    var datos = localStorage.getItem('datos');
    //alert(datos);
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    //alert (datos);

    var arreglo_temp = datos.split(';');
    var per;
    var lista_temp = new Array();

    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      per={
        rut: la_persona.rut,
        nombre: la_persona.nombre,
        edad: la_persona.edad
      };
      lista_temp.push(per);
      
    }
    this.lista_personas = lista_temp;
  }
}
