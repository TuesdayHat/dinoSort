import { sorted } from './../js/word.js';

$(document).ready(function() {
  let total = [];
  $('#chain').click(function(){
    const num = $('#word').val();
    const paragraphs = "1";
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphs}&words=${num}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })

//////////////////////////////// Ajax stuff
    // $.ajax({
    //   url: 'http://dinoipsum.herokuapp.com/api/',
    //   type: 'GET',
    //   data: {
    //     format: 'json',
    //     paragraphs: 1,
    //     words: num
    //   },

      // success: function(response) {
      //   // $('.showStolen').text(`The amount of bikes stolen in ${city} is ${response.proximity}`);
      //   let dinos = response[0];
      //   total += dinos;
      //   // console.log(total.split(","));
      //   const sort = sorted(total.split(",")); // new array with all the dinosaurs sorted
      //   for (let dino in sort){
      //     console.log(sort[dino]);
      //   }
      // },

      promise.then(function(response) {
        body = JSON.parse(response);
        let dinos = response[0];
         total += dinos;
         console.log(total.split(","));
         const sort = sorted(total.split(","));
          for(let dino in sort) {
            console.log(sort[dino]);
          }
      },
      



    });
  });
});

promise.then(function)
