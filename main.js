import {runge} from "./Runge.js";
import {gaussQuadrature} from "./GaussQuadrature.js";

let N = 25;
// N % 15 = 10
let b = Math.PI / 2;
let a = Math.PI / 4;

runge(f, a, b)
gaussQuadrature(a, b)

function f(x) {
    return Math.sqrt(Math.PI - Math.atan(1 / (1 + Math.pow(x,2))))
}