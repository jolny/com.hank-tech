'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Bulb_RGB01 extends ZwaveDevice {
	onMeshInit() {
		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

		// register device capabilities
		this.registerCapability('onoff', 'BASIC'); //BASIC SWITCH_MULTILEVEL
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
	}
}

module.exports = Bulb_RGB01;
