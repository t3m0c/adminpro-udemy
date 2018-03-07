import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
  @ViewChild('cGrafico') cGrafico: ElementRef;

  @Input() doughnutChartData: number[];
  @Input() doughnutChartLabels: string[];
  @Input() doughnutChartType: string = 'doughnut';
  @Input() leyenda: string = '';

  constructor() { }

  ngOnInit() {
  }

}
