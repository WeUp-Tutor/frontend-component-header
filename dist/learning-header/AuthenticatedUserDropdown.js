function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
import React from 'react';
import PropTypes from 'prop-types';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Dropdown } from '@openedx/paragon';
import LearningUserMenuToggleSlot from '../plugin-slots/LearningUserMenuToggleSlot';
import LearningUserMenuSlot from '../plugin-slots/LearningUserMenuSlot';
import messages from './messages';
var API_URL = "".concat(getConfig().LMS_BASE_URL, "/wul_apps/custom_field_editor/");

// Helper CSRF (optionnel si ton API est vraiment csrf_exempt)
function getCookie(name) {
  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
function syncEmailInCustomFields() {
  return _syncEmailInCustomFields.apply(this, arguments);
}
function _syncEmailInCustomFields() {
  _syncEmailInCustomFields = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var user, userEmail, getRes, getData, existingFields, payload, postRes, postData, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          console.log('77777777777777777777777777777777777777777777777777777777777777777');
          console.log('77777777777777777777777777777777777777777777777777777777777777777');
          console.log('77777777777777777777777777777777777777777777777777777777777777777');
          console.log('start syncEmailInCustomFields');
          user = getAuthenticatedUser();
          userEmail = user === null || user === void 0 ? void 0 : user.email;
          if (userEmail) {
            _context.n = 1;
            break;
          }
          console.warn('[CustomFields] Email utilisateur non disponible');
          return _context.a(2);
        case 1:
          _context.p = 1;
          _context.n = 2;
          return fetch(API_URL, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Accept': 'application/json'
              // 'X-CSRFToken': getCookie('csrftoken'), // pas nécessaire si csrf_exempt
            }
          });
        case 2:
          getRes = _context.v;
          _context.n = 3;
          return getRes.json();
        case 3:
          getData = _context.v;
          if (getRes.ok) {
            _context.n = 4;
            break;
          }
          console.error('[CustomFields] GET error', getData);
          return _context.a(2);
        case 4:
          existingFields = getData.data || {}; // POST avec email ajouté
          payload = _objectSpread(_objectSpread({}, existingFields), {}, {
            email: userEmail
          });
          _context.n = 5;
          return fetch(API_URL, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              // 'X-CSRFToken': getCookie('csrftoken'), // pas nécessaire si csrf_exempt
            },
            body: JSON.stringify(payload)
          });
        case 5:
          postRes = _context.v;
          _context.n = 6;
          return postRes.json();
        case 6:
          postData = _context.v;
          if (postRes.ok) {
            _context.n = 7;
            break;
          }
          console.error('[CustomFields] POST error', postData);
          return _context.a(2);
        case 7:
          console.log('[CustomFields] Email synchronisé', postData);
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t = _context.v;
          console.error('[CustomFields] Exception:', _t);
        case 9:
          console.log('77777777777777777777777777777777777777777777777777777777777777777');
        case 10:
          return _context.a(2);
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _syncEmailInCustomFields.apply(this, arguments);
}
var AuthenticatedUserDropdown = function AuthenticatedUserDropdown(_ref) {
  var username = _ref.username;
  var intl = useIntl();
  var dropdownItems = [{
    message: intl.formatMessage(messages.dashboard),
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard")
  }, {
    message: intl.formatMessage(messages.account),
    href: getConfig().ACCOUNT_SETTINGS_URL
  }].concat(_toConsumableArray(getConfig().ORDER_HISTORY_URL ? [{
    message: intl.formatMessage(messages.orderHistory),
    href: getConfig().ORDER_HISTORY_URL
  }] : []), [{
    message: intl.formatMessage(messages.signOut),
    href: getConfig().LOGOUT_URL
  }]);
  return /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-dropdown ml-3"
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "outline-primary",
    "aria-label": intl.formatMessage(messages.userOptionsDropdownLabel)
  }, /*#__PURE__*/React.createElement(LearningUserMenuToggleSlot, {
    label: username,
    icon: faUserCircle
  })), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, /*#__PURE__*/React.createElement(LearningUserMenuSlot, {
    items: dropdownItems
  })));
};
AuthenticatedUserDropdown.propTypes = {
  username: PropTypes.string.isRequired
};
export default AuthenticatedUserDropdown;
//# sourceMappingURL=AuthenticatedUserDropdown.js.map