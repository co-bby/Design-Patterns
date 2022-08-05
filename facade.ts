/** 
 * Facade class provides a simple interface to a complex subsystem.
 * This hides low level details of the subsystem from the end user.
*/
class PlumbingSystem {
	setPressure(p: number) {
		console.log(`the pressure is set to ${p}`);
	}
}
class ElectricalSystem {
	setVoltage(v: number) {
		console.log(`the voltage is set to ${v}`);
	}

}

/**This is a facade class. 
 * It contains the complex details on how to the system work
*/class house {
	private plumbing = new PlumbingSystem();
	private electrical = new ElectricalSystem();

	public turnOnSystems() {
		this.plumbing.setPressure(10);
		this.electrical.setVoltage(220);
	}

	public turnOffSystems() {
		this.plumbing.setPressure(0);
		this.electrical.setVoltage(0)
	}
}

/**The client can set the voltage and pressure of the systems 
*without worrying about its implementation details*/
class client {
	public person = new house();
	public setSystem() {
		this.person.turnOnSystems
		this.person.turnOffSystems
	}

}
