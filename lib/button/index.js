import React from 'react';
import './index.less';

var Button = function Button(_ref) {
  var text = _ref.text,
      className = _ref.className,
      size = _ref.size,
      type = _ref.type;

  if (type === undefined) {
    type = 'default';
  }

  if (size === undefined) {
    size = 'normal';
  }

  console.log(className);
  return /*#__PURE__*/React.createElement("button", {
    className: className === undefined ? "".concat(type, " ").concat(size) : "".concat(className, " ").concat(type, " ").concat(size)
  }, "\u8FD9\u662F\u4E00\u4E2A\u7EC4\u4EF6\u6309\u94AE", text);
};

export default Button;