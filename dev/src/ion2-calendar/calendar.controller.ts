import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions, CalendarModalOptions } from './calendar.model'
import { CalendarModal } from "./components/calendar.modal";
import { CalendarService } from './services/calendar.service';

@Injectable()
export class CalendarController {

  constructor(public modalCtrl: ModalController,
              public calSvc: CalendarService) {
  }

  /**
   * @deprecated
   * @param calendarOptions
   * @param modalOptions
   * @returns
   */
  async openCalendar(calendarOptions: CalendarModalOptions, modalOptions: ModalOptions = {}): Promise<{}> {

    let options = this.calSvc.safeOpt(calendarOptions);
    let calendarModal = await this.modalCtrl.create(Object.assign({
      options: options,
      component: CalendarModal
    }, options));

    await calendarModal.present();
    return calendarModal.onDidDismiss().catch(() => {
      throw('cancelled')
    })
  }

}
