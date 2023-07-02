export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(htmlElementID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(htmlElementID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }
}
