import { Injectable } from '@angular/core';
import {FormGroup, FormControl, FormBuilder,Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(public formBuilder: FormBuilder) { }
  // remember import forms module and reactive forms module in appmodule
  formReg : FormGroup = this.formBuilder.group({

    Name:["",Validators.required],
    email:["",Validators.compose([Validators.required, Validators.email])],
    phone:["",Validators.required],
    description:["",Validators.required]

  });

  get Namegetter(){
    return this.formReg.get("Name");
  };
  get emailgetter(){
    return this.formReg.get("email");
  };
  get phonegetter(){
    return this.formReg.get("phone");
  };
  get descriptiongetter(){
    return this.formReg.get("description");
  };










}
