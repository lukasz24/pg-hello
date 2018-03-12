function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);

	document.addEventListener("offline", checkConnection, false);
	document.addEventListener("online", checkConnection, false);

	document.addEventListener("devicemotion", devMove, true);
	

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

function devMove(){
	//DEVICE MOVEMENT
	navigator.accelerometer.watchAcceleration(onSuccess, onError);
	function onSuccess(acceleration) {
		var xPos = document.getElementById('xPos');
		var yPos = document.getElementById('yPos');
		var zPos = document.getElementById('zPos');

		xPos.innerHTML = "X = " + acceleration.x;
		yPos.innerHTML = "Y = " + acceleration.y;
		zPos.innerHTML = "Z = " + acceleration.z;

		/*
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
	*/
	}

	function onError() {
    	alert('onError!');
	}

	//var options = { frequency: 2000 };  // Update every 2 seconds

	//var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}