import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bug } from 'src/app/models/bug';
import { BugsService } from 'src/app/services/bugs.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private service: BugsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getBugs().subscribe(bugList => this.bugs = bugList);
  }

  createNewBug(): void {
    this.router.navigate(['/bugs']);
  }

  bugListExist(): boolean {
    return this.bugs !== null;
  }

  editBug(bugId: string): void {
    this.router.navigate(['/bugs', bugId]);
  }
}
