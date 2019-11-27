import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details = { id: null, name: '',	image: '', location: '', stadium:	'', capacity:	null, manager: '', captain: '', lat: null, lng: null };
  teams = Team;

  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') !== 'null') {
      const id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
      this.details = this.teams.find(x => x.id === id);
    }
  }

  showMap(lat: any, lng: any) {
    this.router.navigate(['/maps', lat, lng]);
  }

}
