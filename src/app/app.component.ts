import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnDemo1';
  dataSource: any[] = [];

  ngOnInit() {
    // Optionally, fetch your data here or initialize the dataSource array
  }

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  ngOnDestroy() {
    // Destroy the DataTable instance when the component is destroyed
    $('#dataTable1').DataTable().destroy();
  }

  // Handle page change
  onPageChange(page: number): void {
    // Optionally, fetch data for the new page based on your pagination logic
  }

  // Initialize DataTable
  initializeDataTable(): void {
    $(document).ready(function () {
      $('#dataTable1').DataTable({
        paging: true,  // Enable pagination
        lengthChange: false,  // Disable the option to change the number of items per page
        pageLength: 10,  // Number of items per page
      });
    });
  }
}
