import { Route } from "@angular/router";

export const COURSES_ROUTE : Route[] = [
  {
    path: '',
    loadComponent : ()=>
      import('./views/cources/cources.component').then((m)=>m.CourcesComponent),
    data : {
      breadcrumb: 'Courses',
    },
  },
];
