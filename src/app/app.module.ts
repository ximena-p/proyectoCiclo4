import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoggingComponent } from './components/logging/logging.component';
import { PerfilComponent } from './components/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoggingComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
