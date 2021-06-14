import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctor';
import { DoctorService } from '../services/doctor.service';
import { groupBy, map } from 'rxjs/operators';
import { WardService } from '../services/ward.service';
import { Ward } from '../models/ward';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DoctorComponent implements OnInit {

  wards: Ward[] = [];
  expandedElement: Ward | null;

  columnsToDisplay = ['Ward']
  doctorColumnsToDisplay = ['Name', 'Experience']


  constructor(
    private doctorService: DoctorService,
    private wardService: WardService) {
  }

  ngOnInit() {
    this.wardService.getWards().subscribe(w => this.wards = w);
  }

  getDoctors(wardId: number) {
    if (this.wards.find(w => w.id == wardId).doctors != undefined) {
      return;
    }
    
    this.doctorService.getDoctorsByWard(wardId).subscribe(d => {
      this.wards.find(w => w.id == wardId).doctors = d;
    });
  }
}
