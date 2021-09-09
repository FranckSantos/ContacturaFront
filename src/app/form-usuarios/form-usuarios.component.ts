import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../service/usuarios/usuarios.service';


@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

    formUsuarios = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      senha: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
    })
  constructor(private router: Router, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.botaoEdit.subscribe(edit =>{
      if (edit !== null){
        let checkbox;
        console.log(edit, 'valor do edit');
        
        this.formUsuarios.get('email').setValue(edit.email);
        this.formUsuarios.get('senha').setValue(edit.password);
        this.formUsuarios.get('name').setValue(edit.name);
        this.formUsuarios.get('id').setValue(edit.id);

        checkbox = document.getElementById('adminCheck');
          if (checkbox){
            this.formUsuarios.get('check').setValue('yes');
          } else {
            this.formUsuarios.get('check').setValue('no');
          }
          console.log('check', checkbox);
      }
      
    })
  }

  save() {
    if (this.formUsuarios.valid) {
      Swal.fire ({
        icon: 'success',
        title: "Eeeeeba..",
        text: 'Usuário criado com sucesso!'
      });
      setTimeout(() => {
        this.router.navigate(['/lista-usuarios']);
         },2000)
      
    } else {
      Swal.fire ({
        icon: 'error',
        title: "Ooops..",
        text: 'Cadastro não realizado, ' + ' preencha corretamente todos os campos!'
      });
    }
    this.formUsuarios.reset();
  }
}
