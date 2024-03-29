import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './service/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


//begin  Services
import { LoadScriptsService} from './load-scripts.service';

//imports do material design
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './sharedComponents/navbar/navbar.component';
import { SearchfilterPipe } from './searchfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaContatosComponent,
    ListaUsuariosComponent,
    FormUsuariosComponent,
    FormContatosComponent,
    NotFoundComponent,
    NavbarComponent,
    SearchfilterPipe,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [LoadScriptsService, AuthGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
