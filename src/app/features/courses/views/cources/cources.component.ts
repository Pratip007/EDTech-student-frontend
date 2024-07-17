import { Component } from '@angular/core';
import { PageComponent } from "../../../../shared/views/layouts/page/page.component";
import { PageHeaderComponent } from "../../../../shared/views/layouts/page/page-header.component";

@Component({
  selector: 'tid-cources',
  standalone: true,
  imports: [PageComponent, PageHeaderComponent],
  templateUrl: './cources.component.html',
  styleUrl: './cources.component.scss'
})
export class CourcesComponent {

}
