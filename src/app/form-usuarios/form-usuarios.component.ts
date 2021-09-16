import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../service/usuarios/usuarios.service';
import { Users } from '../models/user';


@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

    formUsuarios = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('',[Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
      name: new FormControl('',[Validators.required]),
      check: new FormControl('')
    });

    user: Users;

  constructor(private router: Router, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.botaoEdit.subscribe( edit => {
      if (edit !== null){
        this.user = edit;
        //let checkbox;
        console.log(edit, 'valor do edit');
        
        this.formUsuarios.get('email').setValue(edit.username);
        this.formUsuarios.get('senha').setValue(edit.password);
        this.formUsuarios.get('name').setValue(edit.name);
        this.formUsuarios.get('id').setValue(edit.id);
     // let checkbox;
      // checkbox = document.getElementById('adminCheck');
      //     if (checkbox.checked){
      //       console.log("checado")
      //       this.formUsuarios.get('check').setValue(true);
      //     } else {
      //       this.formUsuarios.get('check').setValue(false);
      //     }
      //     console.log('check', checkbox);
        
      }
      
    })
  }
  validationUser(){
    console.log('xablau');
    if (this.formUsuarios.valid){
       if (this.user){
        this.edit(this.user);
      }else{
        this.createUsers();
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ooooops..',
        text: 'Cadastro não realizado,' +
        'preencha corretamente todos os campos'
      });
    }
  //  this.formContatos.reset();
  }
  edit(user: Users){
    user.name = this.formUsuarios.get('name').value;
    user.password = this.formUsuarios.get('senha').value;
    user.username =  this.formUsuarios.get('email').value;
    //user.phone = this.formUsuarios.get('phone').value;
    
    this.usuariosService.updateUsers(user).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Eeeeeba..',
          text: 'Usuário editado com sucesso!'
        });
        this.router.navigate(['/lista-usuarios']);
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops..',
            text: 'Erro ao editar contato!'
          });
        }
    );
  }

  createUsers(){
    this.usuariosService.createUsers(this.formUsuarios.value).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Eeeeeba..',
          text: 'Usuário criado com sucesso!'
        });
        this.router.navigate(['/lista-usuarios']);
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops..',
            text: 'Erro ao criar usuário!'
          });
        }
    );
  }
  // save() {
  //   if (this.formUsuarios.valid) {
  //     Swal.fire ({
  //       icon: 'success',
  //       title: "Eeeeeba..",
  //       text: 'Usuário criado com sucesso!'
  //     });
  //     setTimeout(() => {
  //       this.router.navigate(['/lista-usuarios']);
  //        },2000)
      
  //   } else {
  //     Swal.fire ({
  //       icon: 'error',
  //       title: "Ooops..",
  //       text: 'Cadastro não realizado, ' + ' preencha corretamente todos os campos!'
  //     });
  //   }
  //  // this.formUsuarios.reset();
  // }
}
