/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2026 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var PointFromAngle = require('../PointFromAngle');

/**
 * Returns a Vector2 containing the coordinates of a point on the circumference of the Circle based on the given angle.
 *
 * @function Phaser.Geom.Circle.CircumferencePoint
 * @since 3.0.0
 *
 * @generic {Phaser.Math.Vector2} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference point on.
 * @param {number} angle - The angle from the center of the Circle to the circumference to return the point from. Given in radians.
 * @param {Phaser.Math.Vector2} [out] - A Vector2 to store the results in. If not given a Vector2 will be created.
 *
 * @return {Phaser.Math.Vector2} A Vector2 object where the `x` and `y` properties are the point on the circumference.
 */
var CircumferencePoint = function (circle, angle, out)
{
    return PointFromAngle(circle.x, circle.y, circle.radius, circle.radius, angle, out);
};

module.exports = CircumferencePoint;
