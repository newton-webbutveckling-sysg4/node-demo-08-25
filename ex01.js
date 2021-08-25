/*
1   1.01                          14   true + true + false
2   'false'                       15   5 && 8
3   null                          16   5 || 8
4   pancake                       17   !5
5   1 / 0                         18   !!5
6   false || true                 19   true && false || false && true
7   "123" - 0                     20   typeof (typeof true)
8   "1000" / 10                   21   1 + 2 * 3 + 4 * 5 + 6
9   123.4 - ''                    22   2 < 3
10  '5' + "0" / '2'               23   'två' < 'tre'
11  '5' + "0" / '5' + 0           24   17 === 17.0
12  '1' + '5' - '4' * '2' - '3'   25   17 === '17'
13  'kalle' - 5                   26   17.000000000000000000001 == 17
27  undefined || null || 0 || false || "foo"
*/
console.log( typeof 1.01 )  // 'number'
console.log( typeof pancake );  // 'undefined'
console.log( 1 / 0 )
console.log( "123" - 0, typeof ("123" - 0) );

'8' - '4' + '0'
(8 - 4) + '0'
4 + '0'
'4' + '0'
'40'

'1' + '2' - 0
('1' + '2') - 0
'12' - 0
12 - 0
12

// Omvandla sträng till tal på flera sätt:
Number('12')
'12' - 0
'12' * 1
'12' / 1

// Två exempel med strängar och tal
'12' - 0 + 0
12 - 0 + 0
12 + 0
12

'12' - 0 + '0'
12 - 0 + '0'
12 + '0'
'12' + '0'
'120'

// Omvandla tal till sträng
String(12)
12 + ''  --> '12' + ''  --> '12'
