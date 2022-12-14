/* tslint:disable */
/* eslint-disable */
/**
* @param {string} program
* @param {string} inputs
* @param {number} num_stack_outputs
* @returns {string}
*/
export function execute(program: string, inputs: string, num_stack_outputs: number): string;
/**
* @param {string} program_in_assembly
* @returns {Uint8Array}
*/
export function generate_program_hash(program_in_assembly: string): Uint8Array;
/**
* @param {Uint8Array} program_hash
* @param {BigUint64Array} stack_inputs
* @param {BigUint64Array} stack_outputs
* @param {string} proof
* @returns {boolean}
*/
export function program_verify(program_hash: Uint8Array, stack_inputs: BigUint64Array, stack_outputs: BigUint64Array, proof: string): boolean;
/**
* @param {string} stack_init
* @param {string} advice_tape
* @param {string} _advice_sets
* @returns {string}
*/
export function output_inputs_string(stack_init: string, advice_tape: string, _advice_sets: string): string;
/**
*/
export function init_panic_hook(): void;
/**
* Handler for `console.log` invocations.
*
* If a test is currently running it takes the `args` array and stringifies
* it and appends it to the current output of the test. Otherwise it passes
* the arguments to the original `console.log` function, psased as
* `original`.
* @param {Array<any>} args
*/
export function __wbgtest_console_log(args: Array<any>): void;
/**
* Handler for `console.debug` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_debug(args: Array<any>): void;
/**
* Handler for `console.info` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_info(args: Array<any>): void;
/**
* Handler for `console.warn` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_warn(args: Array<any>): void;
/**
* Handler for `console.error` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_error(args: Array<any>): void;
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
export class WasmBindgenTestContext {
  free(): void;
/**
* Creates a new context ready to run tests.
*
* A `Context` is the main structure through which test execution is
* coordinated, and this will collect output and results for all executed
* tests.
*/
  constructor();
/**
* Inform this context about runtime arguments passed to the test
* harness.
*
* Eventually this will be used to support flags, but for now it's just
* used to support test filters.
* @param {any[]} args
*/
  args(args: any[]): void;
/**
* Executes a list of tests, returning a promise representing their
* eventual completion.
*
* This is the main entry point for executing tests. All the tests passed
* in are the JS `Function` object that was plucked off the
* `WebAssembly.Instance` exports list.
*
* The promise returned resolves to either `true` if all tests passed or
* `false` if at least one test failed.
* @param {any[]} tests
* @returns {Promise<any>}
*/
  run(tests: any[]): Promise<any>;
}
