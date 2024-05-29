"use strict";
function showError(message) {
    throw new Error(message);
}
function loopInfinito() {
    let n = 0;
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map