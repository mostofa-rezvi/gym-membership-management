import { Component, Signal } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-membership-chart',
  templateUrl: './membership-chart.component.html',
  styleUrl: './membership-chart.component.css',
})
export class MembershipChartComponent {
  membersByType: Signal<any[]>;
  monthlyRevenue: Signal<any[]>;

  // Chart options
  view: [number, number] = [0, 300]; // [width, height], 0 makes it responsive
  barChartColorScheme = {
    domain: ['#cd7f32', '#a7a7a7', '#ffc400', '#e5e4e2'],
  };
  lineChartColorScheme = { domain: ['#0d6efd'] };

  constructor(private memberService: MemberService) {
    this.membersByType = this.memberService.membersByType;
    this.monthlyRevenue = this.memberService.monthlyRevenue;
  }

  // Define a vibrant, futuristic color scheme
  chartColorScheme: Color = {
    name: 'futuristic',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#00bfff', // Deep Sky Blue
      '#1e90ff', // Dodger Blue
      '#32cd32', // Lime Green
      '#ff4500', // Orange Red
      '#da70d6', // Orchid
    ],
  };

}
