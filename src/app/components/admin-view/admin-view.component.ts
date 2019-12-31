import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
  data: any[];
  filteredData: any[]

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.filteredData = [{
      id: '1', clientName: 'ROYAL UPSTREAM', iot: 'EU', market: 'BeNeLux', quarter: 'Q1 2020', squadLaunchDate: '10/31/2019', expectedCompletionDate: '12/12/2019'
    },
    {
      id: '2', clientName: 'VODAFONE ZIGGO', iot: 'EU', market: 'BeNeLux', quarter: 'Q1 2021', squadLaunchDate: '10/31/2019', expectedCompletionDate: '12/12/2019'
    },
    {
      id: '3', clientName: 'AMSTERDAM AIRPORT SCHIPHOL', iot: 'EU', market: 'BeNeLux', quarter: 'Q1 2022', squadLaunchDate: '10/31/2019', expectedCompletionDate: '12/12/2019'
    },
    {
      id: '4', clientName: 'BIL SA.', iot: 'EU', market: 'BeNeLux', quarter: 'Q1 2024', squadLaunchDate: '12/9/2019', expectedCompletionDate: '1/20/2020'
    },
    {
      id: '5', clientName: 'VOLKSWAGEN - SKODA', iot: 'EU', market: 'CEE', quarter: 'Q1 2026', squadLaunchDate: '11/14/2019', expectedCompletionDate: '12/26/2019'
    },
    {
      id: '6', clientName: 'VODAFONE', iot: 'EU', market: 'CEE', quarter: 'Q1 2031', squadLaunchDate: '11/25/2019', expectedCompletionDate: '01/06/2020'
    },
    {
      id: '7', clientName: 'DEUTSCHE TELEKOM', iot: 'EU', market: 'CEE', quarter: 'Q1 2019', squadLaunchDate: '12/9/2019', expectedCompletionDate: '1/20/2020'
    },
    {
      id: '8', clientName: 'WIENERBERGER', iot: 'EU', market: 'DACH', quarter: 'Q1 2034', squadLaunchDate: '12/9/2019', expectedCompletionDate: '1/20/2020'
    },
    {
      id: '9', clientName: 'BASF', iot: 'EU', market: 'DACH', quarter: 'Q1 2019', squadLaunchDate: '12/9/2019', expectedCompletionDate: '1/20/2020'
    },
    {
      id: '10', clientName: 'ARLA', iot: 'EU', market: 'Nordic', quarter: 'Q1 2020', squadLaunchDate: '11/14/2019', expectedCompletionDate: '12/26/2019'
    },
    {
      id: '11', clientName: 'PSA PEUGEOT CITROEN', iot: 'EU', market: 'France', quarter: 'Q1 2021', squadLaunchDate: '11/14/2019', expectedCompletionDate: '12/26/2019'
    }
    ];

    this.data = this.filteredData;
  }

  filter(query: String) {
    this.data = (query) ? this.filteredData.filter(p => p.clientName.toLowerCase().includes(query.toLowerCase())) : this.filteredData;
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}