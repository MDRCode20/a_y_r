import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { WorkshopsComponent } from '../../components/workshops/workshops';
import { MethodologyComponent } from '../../components/methodology/methodology';
import { TestimonialsComponent } from '../../components/testimonials/testimonials';
import { CtaComponent } from '../../components/cta/cta';
import { CarouselComponent } from '../../components/carousel/carousel';


@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    CarouselComponent,
    HeroComponent,
    AboutComponent,
    WorkshopsComponent,
    MethodologyComponent,
    TestimonialsComponent,
    CtaComponent
  ],
  
  templateUrl: './home.html'
})
export class HomeComponent {}
