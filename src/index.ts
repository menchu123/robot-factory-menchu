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
    this.name = this.generateName(7);
    this.type = type;

    setInterval(() => {
      if (this.battery === 10) {
        console.log("uy uy uy que me queda un 10%, cuidao");
        this.battery -= 1;
      } else if (this.battery === 0) {
        console.log("pues me muero");
        this.battery -= 1;
      } else if (this.battery > 0) {
        this.battery -= 1;
      }
    }, 1000);
  }

  trabajar(): void {
    if (this.battery > 0) {
      if (this.type === RobotType.Cleaner) {
        console.log("Larala larita, I clean my little house");
      } else if (this.type === RobotType.Waiter) {
        console.log("Do you feel like a mini of fuet?");
      } else if (this.type === RobotType.Developer) {
        console.log(
          "JavaScript is cool -> I develop with JavaScript -> I'm cool"
        );
      }
    }
  }
  generateName(nameLength: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let result = " ";
    for (let i = 0; i < nameLength - 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * nameLength));
    }
    for (let i = 0; i < 2; i++) {
      result += numbers.charAt(Math.floor(Math.random() * 2));
    }
    return result;
  }

  reset(): void {
    this.battery = 100;
    this.name = this.generateName(7);
  }
}

const createRobot = (robotType: RobotType): Robot => new Robot(robotType);
