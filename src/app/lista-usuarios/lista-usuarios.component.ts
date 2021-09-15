import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Users } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: Users[];
  //collection = {count: 10, data: []};

  constructor(public usuariosService: UsuariosService, private router:Router) { }

  ngOnInit(): void {
    //this.populateUsers();
   this.getUsers();
  }

  getUsers(){
    this.usuariosService.getUsers().subscribe(
      data => {
        this.usersList = data;
        console.log(data);
      },
      error => {
        this.usersList = [];
        console.log(error);
      }
    );
  }
  // populateUsers() {
  //   for (let i = 0; i < this.collection.count; i++) {
  //     this.collection.data.push({
  //       id: i,
  //       email: 'email' + i + '@contactura.com',
  //       name: 'nome ' + i,
  //       senha: "**",
  //       admin: 'yes/no',

  //     });
      
  //     this.usersList = this.collection.data;
  //     //const element = array[i];
  //     console.log(this.usersList);
      
     
  //   }
  // }

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

  editUsuarios(user: Users) {
    console.log('edit work!', user);
    this.usuariosService.getUsersList(user);
    this.router.navigate(['/cadastro-usuarios']);
  }

  deleteUsuarios(user: Users) {
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
        this.usuariosService.deleteUsers(user.id).subscribe(
          data => {
            Swal.fire(
              String(data),
            );
            this.getUsers();
          }
        );
      }
    });
  }
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // } 

}


