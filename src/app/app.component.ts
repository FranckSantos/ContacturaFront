import { Component } from '@angular/core';
import { AuthGuard } from './service/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'contactura';
  search;
  mostrarMenu: boolean = false;

  constructor(private authGuard: AuthGuard){}

  ngOnInit(){
    this.authGuard.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }
}
