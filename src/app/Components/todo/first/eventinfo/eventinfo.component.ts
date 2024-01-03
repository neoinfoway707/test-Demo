import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-eventinfo',
  templateUrl: './eventinfo.component.html',
  styleUrls: ['./eventinfo.component.css']
})
export class EventinfoComponent {
  dataSource: any[] = [];

  ngOnInit() {
    // Optionally, fetch your data here or initialize the dataSource array
  }

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  ngOnDestroy() {
    // Destroy the DataTable instance when the component is destroyed
    $('#dataTable').DataTable().destroy();
  }

  // Handle page change
  onPageChange(page: number): void {
    // Optionally, fetch data for the new page based on your pagination logic
  }

  // Initialize DataTable
  initializeDataTable(): void {
    $(document).ready(function () {
      $('#dataTable').DataTable({
        paging: true,  // Enable pagination
        lengthChange: false,  // Disable the option to change the number of items per page
        pageLength: 10,  // Number of items per page
      });
    });
  }
  constructor(){
    console.log("eventinfo module load")
  }
}
