import { DoBootstrap, Injector, NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';

@NgModule({
  declarations: [AppComponent, DynamicLoaderComponent, BComponent, AComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [], //AppComponent removed
})
//implement DoBootstrap
export class AppModule implements DoBootstrap {
  constructor(private ngZone: NgZone, private injector: Injector) {
    (window as any).ngZone = this.ngZone;
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('mfe5-element', ce);
  }
}
