import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: User[];
  collection = {count: 10, data: []};

  constructor(public usuariosService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    this.populateUsers();
   
  }

  populateUsers() {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        email: 'email' + i + '@contactura.com',
        name: 'nome ' + i,
        senha: "**",
        admin: 'yes/no',

      });
      
      this.usersList = this.collection.data;
      //const element = array[i];
      console.log(this.usersList);
      
     
    }
  }

  refresh() {
    this.router.navigate(['/cadastro-contatos'])
    .then(() => {
      window.location.reload();
    })
  }

  refresh2() {
    this.router.navigate(['/cadastro-usuarios'])
    .then(() => {
      window.location.reload();
    })
  }

  editUsuarios(usuarios:User) {
    console.log('edit work!',usuarios);
    this.usuariosService.getUsersList(usuarios);
    this.router.navigate(['/cadastro-usuarios']);
  }

  deleteUsuarios(usuarios:User) {
     
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  } 

}


