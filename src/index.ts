enum RobotType {
  Cleaner,
  Waiter,
  Developer,
}

class Robot {
  name: string;
  type: RobotType;
  battery = 100;

  constructor(type: RobotType) {
    this.type = type;
  }

  trabajar() {}
}
