/*Project game: Space Rangers*/

var view = {
  showCount: function (count) {
    var elCount = document.getElementById('area_game__user_count--total');
    elCount.innerHTML = count;
  },
  showMsg: function (msg) {
    var elMessage = document.getElementById('area_game__user_message--msg');
    elMessage.innerHTML = msg;
  },
  showShip: function (id, color) {
    var elShip = document.getElementById(id);
    if(color === 'red') {
      elShip.setAttribute('class', 'ship-red');
    }else if(color === 'blue') {
      elShip.setAttribute('class', 'ship-blue');
    }
  },
  showAsteroid: function (id) {
    var elAsteroid = getElementById(id);
    elAsteroid.setAttribute('class', 'asteroid');
  },
  soundShot: function () {
    var audio = document.getElementsByTagName('audio')[0];

    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }
}
