import bundledEsModuleChai from "./chai";

type expect = typeof bundledEsModuleChai.expect;
type assert = typeof bundledEsModuleChai.assert;
type should = typeof bundledEsModuleChai.should;

declare function expect(...args: Parameters<expect>): ReturnType<expect>;
declare function assert(...args: Parameters<assert>): ReturnType<assert>;
declare function should(...args: Parameters<should>): ReturnType<should>;

export { expect, assert, should };
export { bundledEsModuleChai as chai };
