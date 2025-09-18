import './polyfills';  
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Registrar los iconos en la librería
library.add(faFacebookF, faInstagram, faWhatsapp);


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideAnimations(),
    importProvidersFrom(FontAwesomeModule)]
})
.catch(err => console.error(err));
