import { jsx as _jsx } from "react/jsx-runtime";
var bodyWrapperStyle = {
    padding: '16px 48px',
};
var bodyStyle = {
    margin: 0,
    fontSize: '1rem',
};
export default function ModalBody(_a) {
    var children = _a.children;
    return (_jsx("div", { style: bodyWrapperStyle, children: _jsx("div", { style: bodyStyle, children: children }) }));
}
