import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MembershipDashboardComponent } from './components/membership-dashboard/membership-dashboard.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: MembershipDashboardComponent },

  // Demo Pages 
  { path: 'about', component: AboutUsComponent },
  { path: 'trainers', component: OurTrainersComponent },
  { path: 'reviews', component: MemberReviewsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'membershipPlans', component: MembershipPlansComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
