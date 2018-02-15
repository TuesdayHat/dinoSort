import { sorted } from './../js/word.js';

$(document).ready(function() {
  $('#chain').click(function(){
    const num = $('#word').val();
    const paragraphs = "1";
    $.ajax({
      url: `http://dinoipsum.herokuapp.com/api/?paragraphs=${paragraphs}&words=${num}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        // $('.showStolen').text(`The amount of bikes stolen in ${city} is ${response.proximity}`);
        let dinos = response[0]; //should be an array
        const sort = sorted(dinos); // new array with all the dinosaurs sorted
        for (let dino in sort){
          console.log(sort[dino]);
        }
      },
    });
  });
});
