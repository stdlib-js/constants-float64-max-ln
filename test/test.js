/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( '@stdlib/math-base-special-pow' );
var ln = require( '@stdlib/math-base-special-ln' );
var FLOAT64_MAX = require( '@stdlib/constants-float64-max' );
var FLOAT64_MAX_LN = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT64_MAX_LN, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to the natural logarithm of the max double-precision floating-point number', function test( t ) {
	t.equal( FLOAT64_MAX_LN, ln( pow(2, 1023) * (2-pow(2, -52)) ), 'equals the logarithm of the max value (computed)' );
	t.equal( FLOAT64_MAX_LN, ln( FLOAT64_MAX ), 'equals the logarithm of the max value' );
	t.end();
});
