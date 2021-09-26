import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }

  //la variable elRut es un controlador de un input
//elRut = new FormControl('');
//elNombre = new FormControl('');
//laEdad = new FormControl('');

  // para controlar los elementos como grupo
  //en el controlador de grupos se pueden agregar validaciones

persona = new FormGroup({
  elRut : new FormControl('', Validators.required),
  elNombre : new FormControl('',[Validators.required,
                                 Validators.minLength(3)]),
  laEdad : new FormControl('',[Validators.min(0),
                               Validators.required, 
                               Validators.max(130)])
});

  //vamos a crear el boton para grabar (metodo)
  //le entregamos los valores del controlador de grupo  a la variable perso
  lista_persona = new Array();
  perso: any;
  grabar(){
    console.log ('comienza el proceso');
    this.perso = {
      rut : this.persona.controls.elRut.value,
      nombre : this.persona.controls.elNombre.value,
      edad : this.persona.controls.laEdad.value
    };
    console.log(this.perso);

    //le entregamos los valores de perso a la lista y lo agregamos con un push
    this.lista_persona.push(this.perso);
    //vamos a guardar los valores enuna variable llamada LocalStorage ( controla el navegador)
    localStorage.setItem('datos',JSON.stringify(this.lista_persona));
    alert('La Persona fue Almacenada Correctamente')

    //limpiar el formulario
    this.persona.controls.elRut.setValue('');
    this.persona.controls.elNombre.setValue('');
    this.persona.controls.laEdad.setValue('');
  }




}
