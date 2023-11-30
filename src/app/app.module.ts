import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExemplosComponent } from './exemplos/exemplos.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SobreComponent,
    ExemplosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
