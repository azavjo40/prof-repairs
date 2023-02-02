import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isOpenMenu: boolean = false;
  public year = new Date(Date.now()).getFullYear();
  public socialSite = [
    {
      image: '/assets/icons/instagram.png',
      url: 'https://instagram.com/as_inter_bood?igshid=YmMyMTA2M2Y=',
    },
    {
      image: '/assets/icons/telegram.png',
      url: 'https://t.me/Abu_Saifullah01',
    },
    {
      image: '/assets/icons/whatsapp.png',
      url: 'https://wa.me/+48739463214',
    },
    {
      image: '/assets/icons/instagram.png',
      url: 'https://instagram.com/warszawaremonty?igshid=YmMyMTA2M2Y=',
    },
  ];
}
