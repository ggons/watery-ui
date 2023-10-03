var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useCallback, createContext } from 'react';
import ReactDOM from 'react-dom';
export var ModalContext = createContext({
    openModal: function (props) { },
});
export function ModalProvider(_a) {
    var children = _a.children;
    var _b = useState([]), modals = _b[0], setModals = _b[1];
    var closeModal = useCallback(function (id) {
        setModals(function (modalState) { return modalState.filter(function (d) { return d.id !== id; }); });
    }, []);
    var openModal = useCallback(function (_a) {
        var Comp = _a.Comp, header = _a.header, body = _a.body, _b = _a.overlayClose, overlayClose = _b === void 0 ? false : _b, _c = _a.closeButton, closeButton = _c === void 0 ? false : _c, overlayStyle = _a.overlayStyle, onOk = _a.onOk, onCancel = _a.onCancel;
        return new Promise(function (resolve) {
            var id = String(Date.now());
            var onClose = function () {
                onCancel && onCancel();
                closeModal(id);
                resolve(false);
            };
            var onConfirm = function () {
                onOk && onOk();
                closeModal(id);
                resolve(true);
            };
            setModals(function (prevState) {
                return __spreadArray(__spreadArray([], prevState, true), [
                    {
                        id: id,
                        Comp: Comp,
                        header: header,
                        body: body,
                        overlayClose: overlayClose,
                        closeButton: closeButton,
                        overlayStyle: overlayStyle,
                        onOk: onOk,
                        onConfirm: onConfirm,
                        onClose: onClose,
                        onCancel: onCancel,
                    },
                ], false);
            });
        });
    }, [closeModal]);
    var handleBackdropClick = function (e, onClose) {
        if (e.target !== e.currentTarget) {
            return;
        }
        onClose();
    };
    return (_jsxs(ModalContext.Provider, { value: { openModal: openModal }, children: [modals.map(function (_a) {
                var id = _a.id, Comp = _a.Comp, header = _a.header, body = _a.body, overlayClose = _a.overlayClose, closeButton = _a.closeButton, overlayStyle = _a.overlayStyle, onConfirm = _a.onConfirm, onClose = _a.onClose, onCancel = _a.onCancel;
                var isUseFooter = !!onConfirm || !!closeButton || !!onCancel;
                return (_jsx(ModalPortal, { children: _jsx("div", __assign({ className: "watery-ui-modal-wrapper", style: __assign({ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, display: 'grid', placeItems: 'center', zIndex: 1001, backgroundColor: 'rgba(255, 255, 255, 0.75)' }, overlayStyle) }, (overlayClose
                        ? { onClick: function (e) { return handleBackdropClick(e, onClose); } }
                        : {}), { children: Comp ? (React.cloneElement((_jsx(Comp, {})), {
                            onConfirm: onConfirm,
                            onClose: onClose,
                        })) : (_jsxs("div", { className: "bg-white rounded-lg border border-gray-500 shadow relative", children: [closeButton && (_jsx("button", { className: "absolute top-1 right-1 rounded-full p-2 hover:bg-gray-100 active:bg-gray-200", onClick: function () { return onClose(); }, children: "X" })), header && (_jsx("div", { className: "px-16 h-16 grid items-center justify-center border-b border-gray-500", children: _jsx("h2", { className: "text-gray-700 text-xl font-medium", children: header }) })), _jsx("div", { className: "px-16 py-8 text-lg", children: typeof body === 'string'
                                        ? body
                                        : React.cloneElement(body, {
                                            onConfirm: onConfirm,
                                            onClose: onClose,
                                        }) }), isUseFooter && (_jsxs("div", { className: "p-2 w-full flex justify-center gap-x-1", children: [onConfirm && (_jsx("button", { className: "grow rounded-md text-lg bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900", onClick: onConfirm, children: "\uD655\uC778" })), (closeButton || onCancel) && (_jsx("button", { className: "grow rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200", onClick: onClose, children: "\uCDE8\uC18C" }))] }))] })) })) }, id));
            }), children] }));
}
function ModalPortal(_a) {
    var children = _a.children;
    if (!document.getElementById('modal-root')) {
        document.body.insertAdjacentHTML('afterbegin', '<div id="modal-root"></div>');
    }
    return ReactDOM.createPortal(children, document.getElementById('modal-root'));
}
