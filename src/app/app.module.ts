import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//1.importar para poder usar el formulario
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //2.importar aqui tambien
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
