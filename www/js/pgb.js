function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);

	document.addEventListener("offline", checkConnection, false);
	document.addEventListener("online", checkConnection, false);

	window.addEventListener("compassneedscalibration", function(event) {
        event.preventDefault();
    }, true);
    detectMotion();
    window.removeEventListener("devicemotion", processEvent);

}



function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function authorInfo() {
	aInfo = "Name: Łukasz Pudzisz" + "\n" + 
			"Age: 22";

	navigator.notification.alert(aInfo);
}

function checkConnection(){
	var rd = document.getElementById("netInfo");
	
	var networkState = navigator.connection.type;
	
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    
    
    rd.innerHTML = 'Internet connection status: ' + states[networkState];
    if(states[networkState] == states[Connection.NONE]){
    	rd.style.color = "red";
    }else{
    	rd.style.color = "#33ff33";
    }
    
    //navigator.notification.alert('Connection type: ' + states[networkState]);
}

function detectMotion() {
    window.addEventListener("devicemotion", processEvent, true);
}

function processEvent(event) {
	/*
    document.getElementById('xPos').innerHTML = 'Acceleration X: ' + event.acceleration.x;
    document.getElementById('yPos').innerHTML = 'Acceleration Y: ' + event.acceleration.y;
    document.getElementById('zPos').innerHTML = 'Acceleration Z: ' + event.acceleration.z;
*/
    document.getElementById('xPos').innerHTML = "X = " + Math.round(event.accelerationIncludingGravity.x);
	document.getElementById('yPos').innerHTML = "Y = " + Math.round(event.accelerationIncludingGravity.y);
	document.getElementById('zPos').innerHTML = "Z = " + Math.round(event.accelerationIncludingGravity.z);
}

function devMove(event){
	//DEVICE MOVEMENT
	var xPos = document.getElementById('xPos');
		var yPos = document.getElementById('yPos');
		var zPos = document.getElementById('zPos');

		xPos.innerHTML = "X = " + event.acceleration.x;
		yPos.innerHTML = "Y = " + event.acceleration.y;
		zPos.innerHTML = "Z = " + event.acceleration.z;
		/*
	function onSuccess(acceleration) {
		var xPos = document.getElementById('xPos');
		var yPos = document.getElementById('yPos');
		var zPos = document.getElementById('zPos');

		xPos.innerHTML = "X = " + Math.round(event.acceleration.x*100)/100;
		yPos.innerHTML = "Y = " + Math.round(event.acceleration.y*100)/100;
		zPos.innerHTML = "Z = " + Math.round(event.acceleration.z*100)/100;

		/*
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
	
	

	function onError() {
    	alert('onError!');
	}
	*/
	//navigator.accelerometer.watchAcceleration(onSuccess, onError);
	//var options = { frequency: 2000 };  // Update every 2 seconds

	//var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}