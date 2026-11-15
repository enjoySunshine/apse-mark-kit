/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2026 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Vector2 = require('../math/Vector2');

/**
 * Returns a Vector2 containing the coordinates of a point on the circumference of a Circle or Ellipse,
 * based on the given angle.
 *
 * This is the single place where a circumference point is derived from an angle. The Circle and Ellipse
 * `CircumferencePoint` functions, the `PlaceOnCircle` and `PlaceOnEllipse` Actions, and the
 * `Phaser.Curves.Ellipse` curve all call this function, so any change to the way the coordinates are
 * calculated from the angle is reflected in all of them at once.
 *
 * A Circle is treated as an Ellipse with both radii set to its radius.
 *
 * @function Phaser.Geom.PointFromAngle
 * @since 4.3.0
 *
 * @generic {Phaser.Math.Vector2} O - [out,$return]
 *
 * @param {number} x - The x position of the center of the shape.
 * @param {number} y - The y position of the center of the shape.
 * @param {number} radiusX - The horizontal radius of the shape. For a Circle, this is its radius.
 * @param {number} radiusY - The vertical radius of the shape. For a Circle, this is its radius.
 * @param {number} angle - The angle from the center of the shape, given in radians.
 * @param {Phaser.Math.Vector2} [out] - A Vector2 to store the results in. If not given a Vector2 will be created.
 *
 * @return {Phaser.Math.Vector2} A Vector2 object where the `x` and `y` properties are the point on the circumference.
 */
var PointFromAngle = function (x, y, radiusX, radiusY, angle, out)
{
    if (out === undefined) { out = new Vector2(); }

    out.x = x + radiusX * Math.cos(angle);
    out.y = y + radiusY * Math.sin(angle);

    return out;
};

module.exports = PointFromAngle;
