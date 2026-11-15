var PointFromAngle = require('../../src/geom/PointFromAngle');
var Vector2 = require('../../src/math/Vector2');

describe('Phaser.Geom.PointFromAngle', function ()
{
    it('should return a Vector2 when no out parameter is provided', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, 0);

        expect(result).toBeInstanceOf(Vector2);
    });

    it('should return the provided out object', function ()
    {
        var out = new Vector2();
        var result = PointFromAngle(0, 0, 50, 25, 0, out);

        expect(result).toBe(out);
    });

    it('should return the rightmost point at angle 0', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, 0);

        expect(result.x).toBeCloseTo(50, 5);
        expect(result.y).toBeCloseTo(0, 5);
    });

    it('should return the bottom point at angle PI/2', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, Math.PI / 2);

        expect(result.x).toBeCloseTo(0, 5);
        expect(result.y).toBeCloseTo(25, 5);
    });

    it('should return the leftmost point at angle PI', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, Math.PI);

        expect(result.x).toBeCloseTo(-50, 5);
        expect(result.y).toBeCloseTo(0, 5);
    });

    it('should return the top point at angle 3*PI/2', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, 3 * Math.PI / 2);

        expect(result.x).toBeCloseTo(0, 5);
        expect(result.y).toBeCloseTo(-25, 5);
    });

    it('should offset the point by the given center', function ()
    {
        var result = PointFromAngle(120, 40, 50, 25, Math.PI / 2);

        expect(result.x).toBeCloseTo(120, 5);
        expect(result.y).toBeCloseTo(65, 5);
    });

    it('should use separate horizontal and vertical radii', function ()
    {
        var angle = 0.7;
        var result = PointFromAngle(30, -10, 100, 60, angle);

        expect(result.x).toBeCloseTo(30 + 100 * Math.cos(angle), 5);
        expect(result.y).toBeCloseTo(-10 + 60 * Math.sin(angle), 5);
    });

    it('should treat equal radii as a circle', function ()
    {
        var angle = 0.3;
        var result = PointFromAngle(120, 40, 80, 80, angle);

        expect(result.x).toBeCloseTo(120 + 80 * Math.cos(angle), 5);
        expect(result.y).toBeCloseTo(40 + 80 * Math.sin(angle), 5);
    });

    it('should handle negative angles', function ()
    {
        var result = PointFromAngle(0, 0, 50, 25, -Math.PI / 2);

        expect(result.x).toBeCloseTo(0, 5);
        expect(result.y).toBeCloseTo(-25, 5);
    });

    it('should handle zero radii', function ()
    {
        var result = PointFromAngle(5, 5, 0, 0, Math.PI / 4);

        expect(result.x).toBeCloseTo(5, 5);
        expect(result.y).toBeCloseTo(5, 5);
    });

    it('should write results into a plain object with x and y', function ()
    {
        var out = { x: 0, y: 0 };
        var result = PointFromAngle(0, 0, 50, 25, 0, out);

        expect(result).toBe(out);
        expect(out.x).toBeCloseTo(50, 5);
        expect(out.y).toBeCloseTo(0, 5);
    });
});
