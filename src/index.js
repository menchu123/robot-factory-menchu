var RobotType;
(function (RobotType) {
    RobotType[RobotType["Cleaner"] = 0] = "Cleaner";
    RobotType[RobotType["Waiter"] = 1] = "Waiter";
    RobotType[RobotType["Developer"] = 2] = "Developer";
})(RobotType || (RobotType = {}));
var Robot = /** @class */ (function () {
    function Robot(type) {
        this.battery = 100;
        this.type = type;
    }
    Robot.prototype.trabajar = function () { };
    return Robot;
}());
