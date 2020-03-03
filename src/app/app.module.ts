import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InitModule } from './init/init.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule,
    InitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}