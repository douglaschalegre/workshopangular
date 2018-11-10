import { Component } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'BRUCE U';

  // receberDados(evento){
  //   this.name = evento.isTrusted;
  //   console.log(evento);
  // }

  userForm = new FormGroup({
    edit: new FormControl(null),
    showForm: new FormControl(false),
    name: new FormControl(null),
    age: new FormControl(null),
    cc: new FormControl(null),
    ccv: new FormControl(null)
  })

  users = []
  constructor(){

  }
  editar(user,i){
    this.verForm();
    this.userForm.patchValue(user);
    this.userForm.controls.edit.setValue(i);
  }

  editarUser(user, i){
    
    this.users[this.userForm.value.edit] = {
      name: this.userForm.value.name,
        age: this.userForm.value.age,
        cc: this.userForm.value.cc,
        ccv: this.userForm.value.ccv
    }
    this.userForm.reset();
    console.log(user, i);
  }

  deletarCC(i){
    this.users.splice(i, 1);  
  }

  adicionarCC(){
    this.users.push(
      {
        name: this.userForm.value.name,
        age: this.userForm.value.age,
        cc: this.userForm.value.cc,
        ccv: this.userForm.value.ccv
      }
    );
    this.userForm.reset();
  }

  verForm(){
  this.userForm.controls.showForm.setValue(true);
  }
}