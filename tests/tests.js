var assert = chai.assert;

suite('temperature', function() {
   setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          converted = document.getElementById('converted');
      }
    });
    test('32F to C = 0C', function() {
        original.value = "32F to C";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.00 Celsius");
    });
    test('12F to C = -11.1C', function() {
        original.value = "12F to C";
        calculate();
        assert.deepEqual(converted.innerHTML, "-11.11 Celsius");
    });
    test('6.1f to k = 43F', function() {
        original.value = "6.1f to k";
        calculate();
        assert.deepEqual(converted.innerHTML, "258.76 Kelvin");
    });
    test('3te = Numero introducido no valido', function() {
        original.value = "3te";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });

    test('45C to k = 113.0 Farenheit', function() {
        original.value = "45C to k";
        calculate();
        assert.deepEqual(converted.innerHTML, "318.15 Kelvin");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});


describe("Pruebas Sinon", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  // ...

  /*describe("#calculate", function() {
    it("should log an error if target is passed in", function() {
      (new calculate2(20));

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "missing target")
    });
    it("No hay matches con la ExpReg", function() {
      (new calculate());

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "No encontrado matches")

    });*/


    /*it("should log greetings", function() {
      var greetings = (new Cow("Kate")).greets("Baby");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "Kate greets Baby")
    });
  });*/
});
