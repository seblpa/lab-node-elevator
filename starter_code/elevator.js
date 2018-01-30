class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
    this.interval;
    this.waitingList = [];
    this.passengers = [];
  }
  
  start() { 
    this.interval = setInterval(() => {
      this.update();
      this.floorUp();
    }, 1000);
    
  }
  
  stop() {
    clearInterval(this.interval);
  }
  
  update(person) { 
    this.log();
    this._passengersEnter(person);
    this._passengerLeave(person);
    this.stop();
   }

  _passengersEnter(person) { 
    for (var i = 0; i < this.waitingList.length; i++){
      if(this.waitingList[i].originFloor == this.floor) {
        this.passengers.push(person);
        this.waitingList.pop(person);
        this.requests.push(person.destinationFloor)
      console.log(person.name + 'has entered on' + this.floor)
      } 
    }
  }
  _passengersLeave(person) { }

  floorUp() { 
    if (this.floor < this.MAXFLOOR && this.direction == "up"){
      this.floor++;
    }  else {
       this.direction = "down";
       this.floorDown();
      }
    }
  
  floorDown() { 
    if (this.floor > 0 && this.direction == "down") {
      this.floor--;
    } else {
      this.direction = "up";
      this.floorUp();
    }
  } 
  call(person) { 
    this.waitingList.push(person);
    this.requests.push(person);
  }

  log() { 
    console.log('current status is' + this.floor + 'current direction' + this.direction);
  }
}

module.exports = Elevator;
