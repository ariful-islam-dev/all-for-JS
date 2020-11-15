{
    var x = 55;

    function test() {
        // var x = 45
        // console.log(x);

        function nested() {
            // var y = 65
            console.log(x);
        }
        // console.log(y);
        nested()
    }

    test()
}

var a = 11

function A() {
    var b = 12

    function B() {
        var c = 23
        console.log(c);
    }
    function C() {
        var d = 56
        console.log(d);
    }
    console.log(b);
    D(b)
    B()
    C()
}

function D(n) {
    return n + a
}

//  A-> a, b, B(), c(), D()
// B-> a, b, c, B(), D()
// c-> a, b, c, B(), D()

//D-> a, n, A();
