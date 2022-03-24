import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { showPasswordPipe } from './pipes/show.Password.pipe';
import { UselessPipe } from './pipes/useless.pipe';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { appRouting } from './app.routes';
import { LifeCycle2Component } from './components/life-cycle2/life-cycle2.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    showPasswordPipe,
    UselessPipe,
    LifeCycleComponent,
    LifeCycle2Component,
  ],
  imports: [BrowserModule, appRouting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
