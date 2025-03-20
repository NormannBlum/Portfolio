import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legalnotice',
  standalone: true,
  imports: [],
  templateUrl: './legalnotice.component.html',
  styleUrl: './legalnotice.component.scss',
})
export class LegalnoticeComponent implements OnInit {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
