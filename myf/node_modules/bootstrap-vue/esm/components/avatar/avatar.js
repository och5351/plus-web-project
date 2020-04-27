function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { mergeData } from 'vue-functional-data-merge';
import Vue from '../../utils/vue';
import pluckProps from '../../utils/pluck-props';
import { getComponentConfig } from '../../utils/config';
import { isNumber, isString } from '../../utils/inspect';
import { toFloat } from '../../utils/number';
import { BButton } from '../button/button';
import { BLink } from '../link/link';
import { BIcon } from '../../icons/icon';
import { BIconPersonFill } from '../../icons/icons'; // --- Constants ---

var NAME = 'BAvatar';
var CLASS_NAME = 'b-avatar';
var RX_NUMBER = /^[0-9]*\.?[0-9]+$/;
var FONT_SIZE_SCALE = 0.4;
var DEFAULT_SIZES = {
  sm: '1.5em',
  md: '2.5em',
  lg: '3.5em'
}; // --- Props ---

var linkProps = {
  href: {
    type: String // default: null

  },
  to: {
    type: [String, Object] // default: null

  },
  append: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rel: {
    type: String // default: null

  },
  target: {
    type: String // default: null

  },
  activeClass: {
    type: String // default: null

  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String // default: null

  },
  noPrefetch: {
    type: Boolean,
    default: false
  }
};

var props = _objectSpread({
  src: {
    type: String // default: null

  },
  text: {
    type: String // default: null

  },
  icon: {
    type: String // default: null

  },
  alt: {
    type: String,
    default: 'avatar'
  },
  variant: {
    type: String,
    default: function _default() {
      return getComponentConfig(NAME, 'variant');
    }
  },
  size: {
    type: [Number, String],
    default: null
  },
  square: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: [Boolean, String],
    default: false
  },
  button: {
    type: Boolean,
    default: false
  },
  buttonType: {
    type: String,
    default: 'button'
  }
}, linkProps, {
  ariaLabel: {
    type: String // default: null

  }
}); // --- Utility methods ---


var computeSize = function computeSize(value) {
  // Default to `md` size when `null`, or parse to
  // number when value is a float-like string
  value = value === null ? 'md' : isString(value) && RX_NUMBER.test(value) ? toFloat(value) : value; // Convert all numbers to pixel values
  // Handle default sizes when `sm`, `md` or `lg`
  // Or use value as is

  return isNumber(value) ? "".concat(value, "px") : DEFAULT_SIZES[value] || value;
}; // --- Main component ---
// @vue/component


export var BAvatar = /*#__PURE__*/Vue.extend({
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var variant = props.variant,
        disabled = props.disabled,
        square = props.square,
        icon = props.icon,
        src = props.src,
        text = props.text,
        isButton = props.button,
        type = props.buttonType;
    var isBLink = !isButton && (props.href || props.to);
    var tag = isButton ? BButton : isBLink ? BLink : 'span';
    var rounded = square ? false : props.rounded === '' ? true : props.rounded || 'circle';
    var size = computeSize(props.size);
    var alt = props.alt || null;
    var ariaLabel = props.ariaLabel || null;
    var $content = null;

    if (children) {
      // Default slot overrides props
      $content = children;
    } else if (icon) {
      $content = h(BIcon, {
        props: {
          icon: icon
        },
        attrs: {
          'aria-hidden': 'true',
          alt: alt
        }
      });
    } else if (src) {
      $content = h('img', {
        attrs: {
          src: src,
          alt: alt
        }
      });
    } else if (text) {
      var fontSize = size ? "calc(".concat(size, " * ").concat(FONT_SIZE_SCALE, ")") : null;
      $content = h('span', {
        style: {
          fontSize: fontSize
        }
      }, text);
    } else {
      $content = h(BIconPersonFill, {
        attrs: {
          'aria-hidden': 'true',
          alt: alt
        }
      });
    }

    var componentData = {
      staticClass: CLASS_NAME,
      class: (_class = {}, _defineProperty(_class, "".concat(isButton ? 'btn' : 'badge', "-").concat(variant), !!variant), _defineProperty(_class, "rounded", rounded === true), _defineProperty(_class, 'rounded-0', square), _defineProperty(_class, "rounded-".concat(rounded), rounded && rounded !== true), _defineProperty(_class, "disabled", disabled), _class),
      style: {
        width: size,
        height: size
      },
      attrs: {
        'aria-label': ariaLabel
      },
      props: isButton ? {
        variant: variant,
        disabled: disabled,
        type: type
      } : isBLink ? pluckProps(linkProps, props) : {}
    };
    return h(tag, mergeData(data, componentData), [$content]);
  }
});