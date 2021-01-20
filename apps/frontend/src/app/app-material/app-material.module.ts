import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { NgrxFormsErrorStateMatcherDirective } from './ngrx-forms-error-state-matcher.directive';
import { NgrxFormsMatSelectViewAdapterDirective } from './ngrx-forms-mat-select-view-adapter.directive';


const matModules = [
  MatAutocompleteModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatIconModule,
  MatDialogModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatDividerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatChipsModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatRippleModule,
  MatStepperModule,
  MatSnackBarModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatTreeModule,
  NgrxFormsErrorStateMatcherDirective,
  NgrxFormsMatSelectViewAdapterDirective,

];

@NgModule({
  exports: matModules,
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }],
  declarations: [NgrxFormsErrorStateMatcherDirective, NgrxFormsMatSelectViewAdapterDirective]
})
export class AppMaterialModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'), { viewBox: '0 0 24 24' });
  }
}
