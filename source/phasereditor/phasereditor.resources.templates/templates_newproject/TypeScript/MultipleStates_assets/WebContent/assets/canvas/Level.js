// -- user code here --
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* --- start generated code --- */
// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)
/**
 * Level.
 */
var Level = (function (_super) {
    __extends(Level, _super);
    function Level() {
        return _super.call(this) || this;
    }
    Level.prototype.init = function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    };
    Level.prototype.preload = function () {
    };
    Level.prototype.create = function () {
        this.add.sprite(-175, -85, 'bg');
        this.add.sprite(38, 452, 'environ', 'ground-0');
        this.add.sprite(166, 452, 'environ', 'ground-1');
        this.add.sprite(294, 452, 'environ', 'ground-2');
        this.add.sprite(265, 398, 'environ', 'grass-1');
        var _tree_ = this.add.sprite(10, 127, 'environ', 'tree-1');
        _tree_.scale.setTo(2.0687500039674838, 2.072000037051153);
        var _dino = new Dino(this.game, 118, 258);
        this.add.existing(_dino);
        this.add.sprite(453, 306, 'environ', 'bridge');
        var _coins = this.add.group();
        var _coins0 = new Coin(this.game, 488, 170);
        _coins.add(_coins0);
        var _coins1 = new Coin(this.game, 424, 170);
        _coins.add(_coins1);
        var _coins2 = new Coin(this.game, 552, 170);
        _coins.add(_coins2);
        // public fields
        this.fDino = _dino;
        this.fCoins0 = _coins0;
        this.fCoins1 = _coins1;
        this.fCoins2 = _coins2;
    };
    return Level;
}(Phaser.State));
/* --- end generated code --- */
// -- user code here --
