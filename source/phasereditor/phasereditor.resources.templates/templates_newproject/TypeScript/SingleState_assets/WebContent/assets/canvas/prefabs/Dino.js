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
 * Dino.
 * @param aGame A reference to the currently running game.
 * @param aX The x coordinate (in world space) to position the Sprite at.
 * @param aY The y coordinate (in world space) to position the Sprite at.
 * @param aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
var Dino = (function (_super) {
    __extends(Dino, _super);
    function Dino(aGame, aX, aY, aKey, aFrame) {
        var _this = _super.call(this, aGame, aX, aY, aKey === undefined ? 'dino' : aKey, aFrame === undefined ? 0 : aFrame) || this;
        var _anim_walk = _this.animations.add('walk', [8, 9, 10, 11], 6, true);
        var _anim_stay = _this.animations.add('stay', [0, 1, 2], 4, true);
        var _anim_jump = _this.animations.add('jump', [4, 5], 4, true);
        _anim_stay.play();
        // public fields
        _this.fAnim_walk = _anim_walk;
        _this.fAnim_stay = _anim_stay;
        _this.fAnim_jump = _anim_jump;
        return _this;
    }
    return Dino;
}(Phaser.Sprite));
/* --- end generated code --- */
// -- user code here --
