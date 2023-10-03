import { jsx as _jsx } from "react/jsx-runtime";
var modalStyle = {
    borderRadius: '10px',
    border: '1px solid #ccc',
};
export default function Modal(_a) {
    var children = _a.children, onConfirm = _a.onConfirm, onClose = _a.onClose;
    return _jsx("div", { style: modalStyle, children: children });
}
