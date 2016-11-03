var bars = skills.getElementsByClassName('progress-bar');
for (var i = 0; i < bars.length; i++) {
  bars[i].style = 'width:95%;';
  bars[i].getElementsByClassName('progress-counter')[0].innerHTML = '95%';
}


// var count = $(('.count'));
// for (var i = 0; i < count.length; i++) {
//   $({ Counter: 0 }).animate({ Counter: count[i].innerHTML }, {
//     duration: 5000,
//     easing: 'linear',
//     step: function () {
//       count[i].innerHTML = Math.ceil(this.Counter) + "%";
//     }
//   });
// }
