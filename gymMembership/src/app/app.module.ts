import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MembershipDashboardComponent } from './components/membership-dashboard/membership-dashboard.component';
import { PaymentTrackingComponent } from './components/payment-tracking/payment-tracking.component';
import { MembershipChartComponent } from './components/charts/membership-chart/membership-chart.component';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { AboutUsComponent } from './home/pages/about-us/about-us.component';
import { OurTrainersComponent } from './home/pages/our-trainers/our-trainers.component';
import { MemberReviewsComponent } from './home/pages/member-reviews/member-reviews.component';
import { FaqComponent } from './home/pages/faq/faq.component';
import { MembershipPlansComponent } from './home/pages/membership-plans/membership-plans.component';
import { ClassesComponent } from './home/pages/classes/classes.component';
import { ProgramsComponent } from './home/pages/programs/programs.component';
import { ContactComponent } from './home/pages/contact/contact.component';
import { BlogComponent } from './home/pages/blog/blog.component';
import { LoginComponent } from './security/components/login/login.component';
import { CardComponent } from './components/member/card/card.component';
import { RegistrationComponent } from './components/member/registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MemberService } from './components/services/member.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberDetailsComponent } from './components/charts/member-details/member-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MembershipDashboardComponent,
    PaymentTrackingComponent,
    MembershipChartComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    AboutUsComponent,
    OurTrainersComponent,
    MemberReviewsComponent,
    FaqComponent,
    MembershipPlansComponent,
    ClassesComponent,
    ProgramsComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    CardComponent,
    RegistrationComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimations(),
    MemberService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
