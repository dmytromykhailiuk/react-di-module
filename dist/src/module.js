"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInject = exports.Module = void 0;
const React = require("react");
const dependency_injection_container_1 = require("@dmytromykhailiuk/dependency-injection-container");
const react_1 = require("react");
const DIContext = (0, react_1.createContext)(dependency_injection_container_1.globalContainer);
const Module = ({ providers = [], children }) => {
    const container = (0, react_1.useContext)(DIContext);
    const newContainer = (0, react_1.useMemo)(() => new dependency_injection_container_1.Container(container), [providers]);
    (0, react_1.useMemo)(() => {
        newContainer.registerProviders([...(providers || [])]);
    }, [providers]);
    return React.createElement(DIContext.Provider, { value: newContainer }, children);
};
exports.Module = Module;
function useInject(token) {
    const container = (0, react_1.useContext)(DIContext);
    return (0, react_1.useMemo)(() => container.inject(token), [token]);
}
exports.useInject = useInject;
//# sourceMappingURL=module.js.map