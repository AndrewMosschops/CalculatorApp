import { currentOperator, previousValue, currentInput, handleOperatorClick, handleNumberClick, handleClearClick, handleEqualsClick } from './script.js';


// spec.js
document.addEventListener("DOMContentLoaded", function () {

    jasmine.getEnv().configure({ random: false });


    describe("Calculator Test Suite", function () {
        it("should add numbers correctly", function () {
            expect(1 + 1).toBe(2);
        });
    });



    describe("Calculator", function () {
        // let display;
        // let currentInput;
        // let previousValue;
        // let currentOperator;

        beforeEach(function () {
                // Set up a minimal DOM environment for testing
                // document.body.innerHTML = `
                //     <div class="display" id="display"></div>
                // `;
                // display = document.getElementById("display");

            // // Reset calculator state before each test
            // currentInput = '';
            // previousValue = null;
            // currentOperator = null;
        });

        describe("userClick", function () {
            it("should add numbers correctly", async function () {
                document.getElementById("btn1").click();
                document.getElementById("btnPlus").click();
                document.getElementById("btn2").click();
                document.getElementById("btnEquals").click();
                expect(display.innerText).toBe('3');
            });
        });

        describe("userClick", function () {
            it("should add 1 and 2 correctly", async function () {
                document.getElementById("btn1").click();
                document.getElementById("btnPlus").click();
                document.getElementById("btn2").click();
                document.getElementById("btnEquals").click();
                expect(display.innerText).toBe('3');
            });

            it("should add numbers correctly", async function () {
                document.getElementById("btn1").click();
                document.getElementById("btnPlus").click();
                document.getElementById("btn2").click();
                document.getElementById("btnEquals").click();
                expect(display.innerText).toBe('3');
            });
        });

        describe("handleEqualsClick", function () {
            it("should perform addition correctly", function () {
                handleNumberClick(5);
                handleOperatorClick('plus');
                handleNumberClick(3);
                handleEqualsClick();
                expect(display.innerText).toBe('8');
            });

            it("should perform subtraction correctly", function () {
                handleNumberClick(10);
                handleOperatorClick('minus');
                handleNumberClick(4);
                handleEqualsClick();
                expect(display.innerText).toBe('6');
            });

            it("should perform multiplication correctly", function () {
                handleNumberClick(7);
                handleOperatorClick('multiply');
                handleNumberClick(3);
                handleEqualsClick();
                expect(display.innerText).toBe('21');
            });

            it("should perform division correctly", function () {
                handleNumberClick(15);
                handleOperatorClick('divide');
                handleNumberClick(3);
                handleEqualsClick();
                expect(display.innerText).toBe('5');
            });

            it("should handle division by zero (although your current code might not explicitly)", function () {
                handleNumberClick(10);
                handleOperatorClick('divide');
                handleNumberClick(0);
                handleEqualsClick();
                expect(display.innerText).toBe('Infinity'); // JavaScript's default behavior for division by zero
            });
        });

        describe("handleNumberClick", function () {
            it("should append the clicked number to currentInput and update display", function () {
                handleNumberClick(1);
                expect(currentInput).toBe('1');
                expect(display.innerText).toBe('1');

                handleNumberClick(2);
                expect(currentInput).toBe('12');
                // expect(display.innerText).toBe('13'); //changed
                expect(display.innerText).toBe('12');

            });
        });

        describe("handleOperatorClick", function () {
            it("should store the operator, move currentInput to previousValue, and clear currentInput", function () {
                handleNumberClick(5); // Set up currentInput
                handleOperatorClick('plus');
                expect(previousValue).toBe('5');
                expect(currentOperator).toBe('plus');
                expect(currentInput).toBe('');

                handleNumberClick(10); // Set up currentInput again
                handleOperatorClick('minus');
                expect(previousValue).toBe('10'); // previousValue should be updated to the new currentInput
                expect(currentOperator).toBe('minus');
                expect(currentInput).toBe('');
            });
        });

        describe("handleClearClick", function () {
            it("should clear currentInput and the display", function () {
                handleNumberClick(123); // Set up currentInput
                handleClearClick();
                expect(currentInput).toBe('');
                expect(display.innerText).toBe('');
            });
        });

        
    });

});