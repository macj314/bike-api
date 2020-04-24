export class Bike{
  async bikeRequest(url) {
    try {
      let response = await fetch(url);
      if (response.ok && response.status == 200) {
        response = await response.json();
      } else {
        response = false;
      }
      return response;
    } catch(err) {
      return false;
    }
  }
}