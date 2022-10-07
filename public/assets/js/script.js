class Elevator {
  constructor(actualFloor, targetFloor, stoppedFloor) {
    this.totalFloors = 10;
    this.stoppedFloor = stoppedFloor;
    this.actualFloor = actualFloor;
    this.targetFloor = targetFloor;
  }

  elevatorUpDown(actualFloor, targetFloor) {
    let getDisplay = document.getElementById("digitalDisplay");

    if (this.actualFloor == this.targetFloor) {
      getDisplay.innerText = this.actualFloor;
    } else if (this.actualFloor < this.targetFloor) {
      getDisplay.innerText = this.actualFloor;
    } else {
      getDisplay.innerText = this.actualFloor;
    }
  }
}

function getFloorT() {
  let floorTerreo = document.getElementById("floor");

  let terreo = new Elevator(getDisplay, floorTerreo);

  terreo.elevatorUpDown();
}

function getFloorFirst() {
  let firstFloor = document.getElementById("first");

  let first = new Elevator(getDisplay, firstFloor);

  first.elevatorUpDown();
}

function getFloorSecond() {
  let secondFloor = document.getElementById("second");

  let second = new Elevator(getDisplay, secondFloor);

  second.elevatorUpDown();
}

function getFloorThird() {
  let thirdFloor = document.getElementById("third");

  let third = new Elevator(getDisplay, thirdFloor);

  third.elevatorUpDown();
}

function getFloorFourth() {
  let fourthFloor = document.getElementById("fourth");

  let fourth = new Elevator(getDisplay, fourthFloor);

  fourth.elevatorUpDown();
}

function getFloorFifth() {
  let fifthFloor = document.getElementById("fifth");

  let fifth = new Elevator(getDisplay, fifthFloor);

  fifth.elevatorUpDown();
}

function getFloorSixth() {
  let sixthFloor = document.getElementById("sixth");

  let sixth = new Elevator(getDisplay, sixthFloor);

  sixth.elevatorUpDown();
}

function getFloorSeventh() {
  let seventhFloor = document.getElementById("seventh");

  let seventh = new Elevator(getDisplay, seventhFloor);

  seventh.elevatorUpDown();
}

function getFloorEighth() {
  let eighthFloor = document.getElementById("eighth");

  let eighth = new Elevator(getDisplay, eighthFloor);

  eighth.elevatorUpDown();
}

function getFloorNineth() {
  let ninethFloor = document.getElementById("nineth");

  let nineth = new Elevator(getDisplay, ninethFloor);

  nineth.elevatorUpDown();
}

function getFloorTenth() {
  let tenthFloor = document.getElementById("tenth");

  let tenth = new Elevator(getDisplay, tenthFloor);

  tenth.elevatorUpDown();
}
