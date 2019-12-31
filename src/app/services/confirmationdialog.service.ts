import { Injectable, PLATFORM_ID, Injector, Inject } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  private modalService: NgbModal

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector) {
    if (isPlatformBrowser(this.platformId)) {
      this.modalService = this.injector.get(NgbModal);
    }
  }

  public confirm(
    message: string,
    dialogSize: 'sm' | 'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(DialogComponent, { size: dialogSize });
    
    modalRef.componentInstance.message = message;

    return modalRef.result;
  }

}