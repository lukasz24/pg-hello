function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
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
	var rd = document.getElementById("personalInfoList");
	var dz = rd.firstChild;
	var networkState = navigator.connection.type;
	
 	
 	dz.innerHTML = dz.innerHTML + "*";
 	var infoPanel = document.createElement('div');
    infoPanel.innerHTML = "" + networkState + " " + nt;
 	document.body.appendChild(infoPanel);
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
    var infoPanel = document.createElement('div');
    infoPanel.innerHTML = "" + states[networkState] + "\n Net: " + networkState;
 	document.body.appendChild(infoPanel);
    //alert('Connection type: ' + states[networkState]);
    navigator.notification.alert('Connection type: ' + states[networkState]+ "\n Net: " + networkState);
}