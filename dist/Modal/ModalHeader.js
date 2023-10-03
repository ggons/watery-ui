import { jsx as _jsx } from "react/jsx-runtime";
var titleWrapperStyle = {
    borderBottom: '1px solid #ddd',
    padding: '16px 48px',
};
var titleStyle = {
    margin: 0,
    fontSize: '1.5rem',
};
export default function ModalHeader(_a) {
    var children = _a.children;
    return (_jsx("div", { style: titleWrapperStyle, children: _jsx("h2", { style: titleStyle, children: children }) }));
}
