import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Bike } from './bike.js';

$(document).ready(function() {

  $('#find-bike').click(function() {
    let url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=1&location=IP&distance=10&stolenness=stolen"
    // const bike = $('#location').val();
    // $('#location').val("");

    (async () => {
      let bike = new Bike();
      const response = await bike.bikeRequest(url);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        console.log("Got a response!");
      } else {
        console.log("There was an error")
      }
    }

  });
});