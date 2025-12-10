import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() isModalOpen: boolean = false;
  @Input() modalTitle: string = '';
  @Input() modalData: any[] = [];

  @Output() closeRequest = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  closeModal(): void {
    this.closeRequest.emit();
  }

}