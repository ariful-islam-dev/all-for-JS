function a() {
    b()
    console.log('I am function A');
}

function b() {
    d()
    console.log('I am function B');
}

function c() {

    console.log('I am function c');
}

function d() {
    c()
    console.log('I am function D');
}

var x = 100;
a();

console.log('I am Global');

//excutin of c Function Context
//excutin of D Function Context
//excutin of B Function Context
//excutin of A Function Context
//Execution of global context

//Creatinal Phuse
//Executional Phase



