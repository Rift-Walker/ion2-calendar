import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CalendarController } from './calendar.controller';
import { IonicModule, ModalController } from '@ionic/angular';
import { CalendarService } from "./services/calendar.service";
import { CALENDAR_COMPONENTS } from "./components/index";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export function calendarController(modalCtrl: ModalController,
                                   calSvc: CalendarService) {
  return new CalendarController(modalCtrl, calSvc);
}

var IonicModuleForRoot = IonicModule.forRoot();

@NgModule({
  imports: [
    IonicModuleForRoot,
    FormsModule,
    CommonModule
  ],
  declarations: CALENDAR_COMPONENTS,
  exports: CALENDAR_COMPONENTS,
  entryComponents: CALENDAR_COMPONENTS,
  providers: [
    CalendarService,
    {
      provide: CalendarController,
      useFactory: calendarController,
      deps: [ModalController, CalendarService]
    }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarModule {
}
