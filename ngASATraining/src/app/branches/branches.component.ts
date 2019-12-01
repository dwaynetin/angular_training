import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {

  content = {
    "name": "Arverne",
    "Address": "312 Beach 54 Street",
    "City": "Arverne",
    "Postcode": 11692,
    "phone": "(718) 634-4784",
    "Mn": "12:00 PM - 8:00 PM",
    "Tu": "1:00 PM - 6:00 PM",
    "We": "10:00 AM - 6:00 PM",
    "Th": "12:00 PM - 8:00 PM",
    "Fr": "10:00 AM - 6:00 PM",
    "Sa": "10:00 AM - 5:00 PM",
    "Su": "Closed - Closed",
    "notification": "",
    "Location 1": "{'longitude': '-73.784341', 'latitude': '40.593066', 'needs_recoding': False}",
    "Borough": "QUEENS   ",
    "Latitude": 40.593066,
    "Longitude": -73.784341,
    "Community Board": 14,
    "Council District": 31,
    "Census Tract": 97204,
    "BIN": 4158900018,
    "BBL": 4158900018,
    "NTA": "Hammels-Arverne-Edgemere                                                   "
  }

  constructor() { }

  ngOnInit() {
  }

}
