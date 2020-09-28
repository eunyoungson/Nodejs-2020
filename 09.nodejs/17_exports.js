//export 66page 외부에 있는것을 require 로 하기위해 내가만드는 작업

exports.randInt = function randInt ( from, to) {
    return Math.floor(Math.random()*(to - from +1) + from);
}

exports.area = function(radius) {
    return Math.PI*radius*radius;
}