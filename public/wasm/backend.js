import * as wasm from "./backend_bg.wasm";
export * from "./backend_bg.js";
import { __wbg_set_wasm } from "./backend_bg.js";
__wbg_set_wasm(wasm);