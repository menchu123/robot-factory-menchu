var RobotType;
(function (RobotType) {
    RobotType[RobotType["Cleaner"] = 0] = "Cleaner";
    RobotType[RobotType["Waiter"] = 1] = "Waiter";
    RobotType[RobotType["Developer"] = 2] = "Developer";
})(RobotType || (RobotType = {}));
var Robot = /** @class */ (function () {
    function Robot(type) {
        var _this = this;
        this.battery = 100;
        this.name = this.generateName(7);
        this.type = type;
        setInterval(function () {
            if (_this.battery === 10) {
                console.log("uy uy uy que me queda un 10%, cuidao");
                _this.battery -= 1;
            }
            else if (_this.battery === 0) {
                console.log("pues me muero");
                _this.battery -= 1;
            }
            else if (_this.battery > 0) {
                _this.battery -= 1;
            }
        }, 1000);
    }
    Robot.prototype.trabajar = function () {
        if (this.battery > 0) {
            if (this.type === RobotType.Cleaner) {
                console.log("Larala larita, I clean my little house");
            }
            else if (this.type === RobotType.Waiter) {
                console.log("Do you feel like a mini of fuet?");
            }
            else if (this.type === RobotType.Developer) {
                console.log("JavaScript is cool -> I develop with JavaScript -> I'm cool");
            }
        }
    };
    Robot.prototype.generateName = function (nameLength) {
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var result = " ";
        for (var i = 0; i < nameLength - 2; i++) {
            result += characters.charAt(Math.floor(Math.random() * nameLength));
        }
        for (var i = 0; i < 2; i++) {
            result += numbers.charAt(Math.floor(Math.random() * 2));
        }
        return result;
    };
    Robot.prototype.reset = function () {
        this.battery = 100;
        this.name = this.generateName(7);
    };
    return Robot;
}());
var createRobot = function (robotType) { return new Robot(robotType); };
