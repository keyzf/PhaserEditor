
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)


/**
 * Menu.
 */
function Menu() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Menu_proto = Object.create(Phaser.State.prototype);
Menu.prototype = Menu_proto;
Menu.prototype.constructor = Menu;

Menu.prototype.init = function () {
	
	this.stage.backgroundColor = '#8080ff';
	
};

Menu.prototype.preload = function () {
	
};

Menu.prototype.create = function () {
	// user code
	this.initObjects();
	
};

/* --- end generated code --- */

Menu.prototype.initObjects = function() {
	this.add.text(100, 100, "Click to play");
};

Menu.prototype.update = function () {
	if (this.input.activePointer.isDown) {
		this.game.state.start("Level");
	}
};
