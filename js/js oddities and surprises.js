// JavaScript’s equality operator (==) coerces its arguments, leading to unexpected behavior:
if ("" == 0) {
    // It is! But why??
    console.log('true')
}

x = 9;

if (1 < x < 3) {
    // True for *any* value of x!
    console.log('true')
}