import { Component, OnInit } from '@angular/core';
import { faAngleDoubleLeft, faChartLine } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    faAngleDoubleLeft = faAngleDoubleLeft;
    faChartLine = faChartLine;
  constructor() { }

  ngOnInit()
  {
      $('.btn-expand-collapse').click(function(e) {
          $('.navbar-primary').toggleClass('collapsed');
      });
  }

}

