import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  charset: 'UTF-8',
  // ! =========================================================
 *
 * Material Kit React v1.1.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition)
 *
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-pro
 * Available with purchase of license from https://www.creative-tim.com/product/material-kit-pro
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * License Creative Tim (https://www.creative-tim.com/license)
 *
 * =========================================================
  'btn-file': {
    'position': 'relative',
    'overflow': 'hidden',
    'verticalAlign': 'middle'
  },
  'btn-file > input': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 23 }],
    'cursor': 'pointer',
    'filter': 'alpha(opacity=0)',
    'opacity': '0',
    'direction': 'ltr'
  },
  'fileinput': {
    'textAlign': 'center',
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'px', 'value': 9 }]
  },
  'fileinput input[type="file"]': {
    'display': 'none'
  },
  'fileinput form-control': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'px', 'value': 7 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle',
    'cursor': 'text'
  },
  'fileinput thumbnail': {
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'overflow': 'hidden',
    'textAlign': 'center',
    'verticalAlign': 'middle',
    'maxWidth': [{ 'unit': 'px', 'value': 360 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': -8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.24)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.24),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'fileinput thumbnailimg-circle': {
    'borderRadius': '50%',
    'maxWidth': [{ 'unit': 'px', 'value': 100 }]
  },
  'fileinput thumbnail > img': {
    'maxHeight': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'fileinput btn': {
    'verticalAlign': 'middle'
  },
  'fileinput-exists fileinput-new': {
    'display': 'none'
  },
  'fileinput-new fileinput-exists': {
    'display': 'none'
  },
  'fileinput-inline fileinput-controls': {
    'display': 'inline'
  },
  'fileinput-filename': {
    'display': 'inline-block',
    'overflow': 'hidden',
    'verticalAlign': 'middle'
  },
  'form-control fileinput-filename': {
    'verticalAlign': 'bottom'
  },
  'fileinputinput-group': {
    'display': 'table'
  },
  'fileinputinput-group > *': {
    'position': 'relative',
    'zIndex': '2'
  },
  'fileinputinput-group > btn-file': {
    'zIndex': '1'
  },
  'fileinput-newinput-group btn-file': {
    'borderRadius': '0 4px 4px 0'
  },
  'fileinput-new input-group btn-file': {
    'borderRadius': '0 4px 4px 0'
  },
  'fileinput-newinput-group btn-filebtn-xs': {
    'borderRadius': '0 3px 3px 0'
  },
  'fileinput-new input-group btn-filebtn-xs': {
    'borderRadius': '0 3px 3px 0'
  },
  'fileinput-newinput-group btn-filebtn-sm': {
    'borderRadius': '0 3px 3px 0'
  },
  'fileinput-new input-group btn-filebtn-sm': {
    'borderRadius': '0 3px 3px 0'
  },
  'fileinput-newinput-group btn-filebtn-lg': {
    'borderRadius': '0 6px 6px 0'
  },
  'fileinput-new input-group btn-filebtn-lg': {
    'borderRadius': '0 6px 6px 0'
  },
  'form-grouphas-warning fileinput fileinput-preview': {
    'color': '#ff9800'
  },
  'form-grouphas-warning fileinput thumbnail': {
    'borderColor': '#ff9800'
  },
  'form-grouphas-error fileinput fileinput-preview': {
    'color': '#f44336'
  },
  'form-grouphas-error fileinput thumbnail': {
    'borderColor': '#f44336'
  },
  'form-grouphas-success fileinput fileinput-preview': {
    'color': '#4caf50'
  },
  'form-grouphas-success fileinput thumbnail': {
    'borderColor': '#4caf50'
  },
  'input-group-addon:not(:first-child)': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'thumbnail': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'html *': {
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'body': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'body': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h1': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h2': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h3': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h4': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h5': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h6': {
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h1': {
    'color': 'inherit'
  },
  'h2': {
    'color': 'inherit'
  },
  'h3': {
    'color': 'inherit'
  },
  'h4': {
    'color': 'inherit'
  },
  'h5': {
    'color': 'inherit'
  },
  'h6': {
    'color': 'inherit'
  },
  'h1': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h2': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h3': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h4': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h5': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h6': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 3.3125 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.15 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.25 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5625 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.125 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.0625 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.55 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.75 }],
    'textTransform': 'uppercase',
    'fontWeight': '500'
  },
  'p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'b': {
    'fontWeight': '700'
  },
  'strong': {
    'fontWeight': '700'
  },
  'html': {
    'fontFamily': 'sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'WebkitTextSizeAdjust': '100%',
    'MsTextSizeAdjust': '100%',
    'MsOverflowStyle': 'scrollbar',
    'WebkitTapHighlightColor': 'transparent'
  },
  'body': {
    'backgroundColor': '#eee',
    'color': '#3c4858',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1 }],
    'textAlign': 'left'
  },
  'legend': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '*': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)',
    'WebkitTapHighlightColor': 'transparent',
    'boxSizing': 'border-box'
  },
  '*:focus': {
    'outline': '0'
  },
  'a': {
    'color': '#9c27b0',
    'textDecoration': 'none',
    'backgroundColor': 'transparent'
  },
  'a:hover': {
    'color': '#89229b',
    'textDecoration': 'none'
  },
  'a:focus': {
    'color': '#89229b',
    'textDecoration': 'none'
  },
  'label': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857 }],
    'color': '#aaaaaa',
    'fontWeight': '400'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'color': '#777',
    'fontWeight': '400'
  },
  'img': {
    'verticalAlign': 'middle',
    'borderStyle': 'none'
  },
  'form': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1.125 }]
  },
  'hr': {
    'marginTop': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'ol': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ul': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'dl': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  '#images h4': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#root': {
    'overflow': 'hidden'
  },
  '#cd-vertical-nav': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': -78 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'bottom': [{ 'unit': 'string', 'value': 'auto' }],
    'WebkitTransform': 'translateY(-50%)',
    'MozTransform': 'translateY(-50%)',
    'MsTransform': 'translateY(-50%)',
    'OTransform': 'translateY(-50%)',
    'transform': 'translateY(-50%)',
    'zIndex': '4'
  },
  '#cd-vertical-nav ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#cd-vertical-nav li': {
    'textAlign': 'right'
  },
  '#cd-vertical-nav a': {
    'display': 'inline-block',
    'WebkitBackfaceVisibility': 'hidden',
    'backfaceVisibility': 'hidden',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  '#cd-vertical-nav a:hover span': {
    'WebkitTransform': 'scale(1)',
    'MozTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  '#cd-vertical-nav ais-selected cd-dot': {
    'WebkitTransform': 'scale(1)',
    'MozTransform': 'scale(1)',
    'MsTransform': 'scale(1)',
    'OTransform': 'scale(1)',
    'transform': 'scale(1)'
  },
  '#cd-vertical-nav cd-dot': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'right': [{ 'unit': '%H', 'value': NaN }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '50%',
    'backgroundColor': '#995581',
    'WebkitTransition': '-webkit-transform 0.2s, background-color 0.5s',
    'MozTransition': '-moz-transform 0.2s, background-color 0.5s',
    'transition': 'transform 0.2s, background-color 0.5s',
    'WebkitTransformOrigin': '50% 50%',
    'MozTransformOrigin': '50% 50%',
    'MsTransformOrigin': '50% 50%',
    'OTransformOrigin': '50% 50%',
    'transformOrigin': '50% 50%'
  },
  '#cd-vertical-nav a span': {
    'float': 'right',
    'display': 'inline-block',
    'WebkitTransform': 'scale(0.6)',
    'MozTransform': 'scale(0.6)',
    'MsTransform': 'scale(0.6)',
    'OTransform': 'scale(0.6)',
    'transform': 'scale(0.6)'
  },
  '#cd-vertical-nav cd-label': {
    'position': 'relative',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 14 }],
    'color': 'white',
    'background': 'rgba(0, 0, 0, 0.53)',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'borderRadius': '20px',
    'textTransform': 'uppercase',
    'fontWeight': '600',
    'opacity': '0',
    'WebkitTransformOrigin': '100% 50%',
    'MozTransformOrigin': '100% 50%',
    'MsTransformOrigin': '100% 50%',
    'OTransformOrigin': '100% 50%',
    'transformOrigin': '100% 50%'
  },
  '#cd-vertical-nav a:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  '#cd-vertical-nav a:hover cd-label': {
    'opacity': '1',
    'left': [{ 'unit': '%H', 'value': -1 }],
    'WebkitTransition': '-webkit-transform 0.2s, opacity 0.2s',
    'MozTransition': '-moz-transform 0.2s, opacity 0.2s',
    'transition': 'transform 0.2s, opacity 0.2s'
  },
  // ! nouislider - 10.0.0 - 2016-12-10 16:00:32
  // Functional styling;
 * These styles are required for noUiSlider to function.
 * You don't need to change these rules to apply your design.
  'noUi-target': {
    'WebkitTouchCallout': 'none',
    'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
    'WebkitUserSelect': 'none',
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'MsUserSelect': 'none',
    'MozUserSelect': 'none',
    'userSelect': 'none',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'noUi-target *': {
    'WebkitTouchCallout': 'none',
    'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)',
    'WebkitUserSelect': 'none',
    'MsTouchAction': 'none',
    'touchAction': 'none',
    'MsUserSelect': 'none',
    'MozUserSelect': 'none',
    'userSelect': 'none',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'noUi-target': {
    'position': 'relative',
    'direction': 'ltr'
  },
  'noUi-base': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'position': 'relative',
    'zIndex': '1',
    // Fix 401
  },
  'noUi-connect': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'noUi-origin': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 0 }]
  },
  'noUi-handle': {
    'position': 'relative',
    'zIndex': '1'
  },
  'noUi-state-tap noUi-connect': {
    'WebkitTransition': 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s',
    'transition': 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s'
  },
  'noUi-state-tap noUi-origin': {
    'WebkitTransition': 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s',
    'transition': 'top 0.3s, right 0.3s, bottom 0.3s, left 0.3s'
  },
  'noUi-state-drag *': {
    'cursor': 'inherit !important'
  },
  // Painting and performance;
 * Browsers can paint handles in their own layer.
  'noUi-base': {
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)'
  },
  'noUi-handle': {
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)'
  },
  // Slider size and handle placement;
  'noUi-horizontal': {
    'height': [{ 'unit': 'px', 'value': 2 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'noUi-horizontal noUi-handle': {
    'boxSizing': 'border-box',
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'left': [{ 'unit': 'px', 'value': -10 }],
    'top': [{ 'unit': 'px', 'value': -6 }],
    'cursor': 'pointer',
    'borderRadius': '100%',
    'transition': 'all 0.2s ease-out',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9c27b0' }],
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'noUi-vertical': {
    'width': [{ 'unit': 'px', 'value': 18 }]
  },
  'noUi-vertical noUi-handle': {
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 34 }],
    'left': [{ 'unit': 'px', 'value': -6 }],
    'top': [{ 'unit': 'px', 'value': -17 }]
  },
  // Styling;
  'noUi-target': {
    'backgroundColor': '#c8c8c8',
    'borderRadius': '3px'
  },
  'noUi-connect': {
    'background': '#9c27b0',
    'borderRadius': '3px',
    'WebkitTransition': 'background 450ms',
    'transition': 'background 450ms'
  },
  // Handles and cursors;
  'noUi-draggable': {
    'cursor': 'ew-resize'
  },
  'noUi-vertical noUi-draggable': {
    'cursor': 'ns-resize'
  },
  'noUi-handle': {
    'borderRadius': '3px',
    'background': '#fff',
    'cursor': 'default',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#fff,' }, { 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'string', 'value': '#ebebeb,' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': -3 }, { 'unit': 'string', 'value': '#bbb' }],
    'WebkitTransition': '300ms ease 0s',
    'MozTransition': '300ms ease 0s',
    'MsTransition': '300ms ease 0s',
    'OTransform': '300ms ease 0s',
    'transition': '300ms ease 0s'
  },
  'noUi-active': {
    'WebkitTransform': 'scale3d(1.5, 1.5, 1)',
    'MozTransform': 'scale3d(1.5, 1.5, 1)',
    'MsTransform': 'scale3d(1.5, 1.5, 1)',
    'OTransform': 'scale3d(1.5, 1.5, 1)',
    'transform': 'scale3d(1.5, 1.5, 1)'
  },
  // Disabled state;
  '[disabled] noUi-connect': {
    'background': '#b8b8b8'
  },
  '[disabled]noUi-target': {
    'cursor': 'not-allowed'
  },
  '[disabled]noUi-handle': {
    'cursor': 'not-allowed'
  },
  '[disabled] noUi-handle': {
    'cursor': 'not-allowed'
  },
  // Base;
 *
  'noUi-pips': {
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'noUi-pips *': {
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'noUi-pips': {
    'position': 'absolute',
    'color': '#999'
  },
  // Values;
 *
  'noUi-value': {
    'position': 'absolute',
    'textAlign': 'center'
  },
  'noUi-value-sub': {
    'color': '#ccc',
    'fontSize': [{ 'unit': 'px', 'value': 10 }]
  },
  // Markings;
 *
  'noUi-marker': {
    'position': 'absolute',
    'background': '#ccc'
  },
  'noUi-marker-sub': {
    'background': '#aaa'
  },
  'noUi-marker-large': {
    'background': '#aaa'
  },
  // Horizontal layout;
 *
  'noUi-pips-horizontal': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'noUi-value-horizontal': {
    'WebkitTransform': 'translate3d(-50%, 50%, 0)',
    'transform': 'translate3d(-50%, 50%, 0)'
  },
  'noUi-marker-horizontalnoUi-marker': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'width': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 5 }]
  },
  'noUi-marker-horizontalnoUi-marker-sub': {
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  'noUi-marker-horizontalnoUi-marker-large': {
    'height': [{ 'unit': 'px', 'value': 15 }]
  },
  // Vertical layout;
 *
  'noUi-pips-vertical': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 1 }]
  },
  'noUi-value-vertical': {
    'WebkitTransform': 'translate3d(0, 50%, 0)',
    'transform': 'translate3d(0, 50%, 0)',
    'paddingLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  'noUi-marker-verticalnoUi-marker': {
    'width': [{ 'unit': 'px', 'value': 5 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'noUi-marker-verticalnoUi-marker-sub': {
    'width': [{ 'unit': 'px', 'value': 10 }]
  },
  'noUi-marker-verticalnoUi-marker-large': {
    'width': [{ 'unit': 'px', 'value': 15 }]
  },
  'noUi-tooltip': {
    'display': 'block',
    'position': 'absolute',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }],
    'borderRadius': '3px',
    'background': '#fff',
    'color': '#000',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'center'
  },
  'noUi-horizontal noUi-tooltip': {
    'WebkitTransform': 'translate(-50%, 0)',
    'transform': 'translate(-50%, 0)',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'bottom': [{ 'unit': '%V', 'value': 1.2 }]
  },
  'noUi-vertical noUi-tooltip': {
    'WebkitTransform': 'translate(0, -50%)',
    'transform': 'translate(0, -50%)',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': '%H', 'value': 1.2 }]
  },
  'slider': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'sliderslider-primary noUi-connect': {
    'backgroundColor': '#9c27b0'
  },
  'sliderslider-primarynoUi-connect': {
    'backgroundColor': '#9c27b0'
  },
  'sliderslider-primary noUi-handle': {
    'borderColor': '#9c27b0'
  },
  'sliderslider-info noUi-connect': {
    'backgroundColor': '#00bcd4'
  },
  'sliderslider-infonoUi-connect': {
    'backgroundColor': '#00bcd4'
  },
  'sliderslider-info noUi-handle': {
    'borderColor': '#00bcd4'
  },
  'sliderslider-rose noUi-connect': {
    'backgroundColor': '#e91e63'
  },
  'sliderslider-rosenoUi-connect': {
    'backgroundColor': '#e91e63'
  },
  'sliderslider-rose noUi-handle': {
    'borderColor': '#e91e63'
  },
  'sliderslider-success noUi-connect': {
    'backgroundColor': '#4caf50'
  },
  'sliderslider-successnoUi-connect': {
    'backgroundColor': '#4caf50'
  },
  'sliderslider-success noUi-handle': {
    'borderColor': '#4caf50'
  },
  'sliderslider-warning noUi-connect': {
    'backgroundColor': '#ff9800'
  },
  'sliderslider-warningnoUi-connect': {
    'backgroundColor': '#ff9800'
  },
  'sliderslider-warning noUi-handle': {
    'borderColor': '#ff9800'
  },
  'sliderslider-danger noUi-connect': {
    'backgroundColor': '#f44336'
  },
  'sliderslider-dangernoUi-connect': {
    'backgroundColor': '#f44336'
  },
  'sliderslider-danger noUi-handle': {
    'borderColor': '#f44336'
  },
  // !
* https://github.com/YouCanBookMe/react-datetime
  'rdt': {
    'position': 'relative'
  },
  'rdt rdtPicker': {
    'WebkitTransition': 'all 150ms linear',
    'MozTransition': 'all 150ms linear',
    'OTransition': 'all 150ms linear',
    'MsTransition': 'all 150ms linear',
    'transition': 'all 150ms linear',
    'marginTop': [{ 'unit': 'px', 'value': -20 }],
    'visibility': 'hidden',
    'display': 'block',
    'opacity': '0'
  },
  'rdtrdtOpen rdtPicker': {
    'opacity': '1',
    'visibility': 'visible',
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'rdt inputform-control': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'backgroundImage': 'linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2)',
    'backgroundSize': '0 2px, 100% 1px',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center bottom, center calc(100% - 1px)',
    'backgroundColor': 'rgba(0, 0, 0, 0)',
    'transition': 'background 0s ease-out',
    'float': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'fontWeight': '400',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 36 }],
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontFamily': '"Roboto", "Helvetica", "Arial", sans-serif',
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1.42857 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#555'
  },
  'rdt inputform-control:focus': {
    'outline': 'none',
    'backgroundImage': 'linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2)',
    'backgroundSize': '100% 2px, 100% 1px',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'transitionDuration': '0.3s'
  },
  'rdtPicker': {
    'display': 'none',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 260 }],
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'zIndex': '99999 !important',
    'background': '#fff',
    'borderRadius': '0.125rem',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'WebkitBackgroundClip': 'padding-box',
    'backgroundClip': 'padding-box',
    'minWidth': [{ 'unit': 'px', 'value': 160 }]
  },
  'rdtPicker:before': {
    'display': 'inline-block',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'middle',
    'content': '""',
    'top': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 10 }],
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'color': '#ffffff',
    'borderBottom': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRight': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'rdtPicker:after': {
    'borderBottom': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'borderRight': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'content': '""',
    'display': 'inline-block',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -5 }],
    'left': [{ 'unit': 'px', 'value': 10 }]
  },
  'rdtPicker': {
    'display': 'block',
    'top': [{ 'unit': 'px', 'value': 40 }]
  },
  'rdtStatic rdtPicker': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'position': 'static'
  },
  'rdtPicker rdtTimeToggle': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '4px'
  },
  'rdtPicker table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderColor': '#fff !important',
    'borderCollapse': 'collapse'
  },
  'rdtPicker td': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  'rdtPicker th': {
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }]
  },
  'rdtPicker td': {
    'cursor': 'pointer'
  },
  'rdtDay': {
    'height': [{ 'unit': 'px', 'value': 30 }],
    'lineHeight': [{ 'unit': 'px', 'value': 33 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '50%'
  },
  'rdtDayrdtTodayrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': 'rgba(156, 39, 176, 0.6)' }]
  },
  'rdtDayrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': 'rgba(156, 39, 176, 0.6)' }]
  },
  'rdtDayrdtActive:hover': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': -11 }, { 'unit': 'string', 'value': 'rgba(156, 39, 176, 0.6)' }]
  },
  'rdtDays tr dow': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e3e3e3' }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textTransform': 'uppercase',
    'fontWeight': '400',
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'rdtDays tr rdtOld': {
    'color': '#bdbdbd'
  },
  'rdtDays tr rdtNew': {
    'color': '#bdbdbd'
  },
  'rdtPicker tdrdtDay:hover': {
    'background': '#eeeeee',
    'cursor': 'pointer'
  },
  'rdtPicker tdrdtHour:hover': {
    'background': '#eeeeee',
    'cursor': 'pointer'
  },
  'rdtPicker tdrdtMinute:hover': {
    'background': '#eeeeee',
    'cursor': 'pointer'
  },
  'rdtPicker tdrdtSecond:hover': {
    'background': '#eeeeee',
    'cursor': 'pointer'
  },
  'rdtPicker rdtTimeToggle:hover': {
    'background': '#eeeeee',
    'cursor': 'pointer'
  },
  'rdtPicker tdrdtToday': {
    'position': 'relative'
  },
  'rdtPicker tdrdtActiverdtToday:before': {
    'borderBottomColor': '#fff'
  },
  'rdtPicker tdrdtDisabled': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker tdrdtDisabled:hover': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker td spanrdtOld': {
    'color': '#999999'
  },
  'rdtPicker td spanrdtDisabled': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker td spanrdtDisabled:hover': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker dow': {
    'width': [{ 'unit': '%H', 'value': 0.142857 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'rdtPicker thrdtSwitch': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'borderRadius': '4px'
  },
  'rdtPicker thrdtNext': {
    'fontSize': [{ 'unit': 'px', 'value': 21 }],
    'verticalAlign': 'top',
    'borderRadius': '50%',
    'lineHeight': [{ 'unit': 'px', 'value': 33 }]
  },
  'rdtPicker thrdtPrev': {
    'fontSize': [{ 'unit': 'px', 'value': 21 }],
    'verticalAlign': 'top',
    'borderRadius': '50%',
    'lineHeight': [{ 'unit': 'px', 'value': 33 }]
  },
  'rdtPicker dow': {
    'color': '#495057'
  },
  'rdtPicker thrdtSwitch': {
    'color': '#495057'
  },
  'rdtPicker thrdtNext': {
    'color': '#495057'
  },
  'rdtPicker thrdtPrev': {
    'color': '#495057'
  },
  'rdtPicker rdtTimeToggle': {
    'color': '#495057'
  },
  'rdtPicker rdtTimeToggle': {
    'color': '#9c27b0'
  },
  'rdtPicker rdtTime thrdtSwitch': {
    'color': '#9c27b0'
  },
  'rdtPrev span': {
    'display': 'block',
    'WebkitTouchCallout': 'none',
    // iOS Safari
    'WebkitUserSelect': 'none',
    // Chrome/Safari/Opera
    'KhtmlUserSelect': 'none',
    // Konqueror
    'MozUserSelect': 'none',
    // Firefox
    'MsUserSelect': 'none',
    // Internet Explorer/Edge
    'userSelect': 'none'
  },
  'rdtNext span': {
    'display': 'block',
    'WebkitTouchCallout': 'none',
    // iOS Safari
    'WebkitUserSelect': 'none',
    // Chrome/Safari/Opera
    'KhtmlUserSelect': 'none',
    // Konqueror
    'MozUserSelect': 'none',
    // Firefox
    'MsUserSelect': 'none',
    // Internet Explorer/Edge
    'userSelect': 'none'
  },
  'rdtPicker thrdtDisabled': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker thrdtDisabled:hover': {
    'background': 'none',
    'color': '#999999',
    'cursor': 'not-allowed'
  },
  'rdtPicker thead tr:first-child th': {
    'cursor': 'pointer'
  },
  'rdtPicker thead tr:first-child th:hover': {
    'background': '#eeeeee'
  },
  'rdtPicker button': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': 'none',
    'cursor': 'pointer'
  },
  'rdtPicker button:hover': {
    'backgroundColor': '#eee'
  },
  'rdtPicker thead button': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'tdrdtMonth': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'cursor': 'pointer'
  },
  'tdrdtYear': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'cursor': 'pointer'
  },
  'tdrdtMonth:hover': {
    'background': '#eee'
  },
  'tdrdtYear:hover': {
    'background': '#eee'
  },
  'rdtCounters': {
    'display': 'inline-block'
  },
  'rdtCounters > div': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'fontWeight': 'inherit',
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'borderRadius': '50%'
  },
  'rdtCounters rdtCounterSeparator': {
    'width': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'rdtCounter': {
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'rdtCounter': {
    'width': [{ 'unit': 'px', 'value': 40 }]
  },
  'rdtCounter rdtCount': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'rdtCounters rdtCounter:last-child rdtCount': {
    'color': '#9c27b0',
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#9c27b0' }]
  },
  'rdtCounterSeparator': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 7 }],
    'lineHeight': [{ 'unit': 'px', 'value': 100 }]
  },
  'rdtCounter rdtBtn': {
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'cursor': 'pointer',
    'display': 'block',
    'borderRadius': '50%',
    'color': '#9c27b0',
    'WebkitTransition': 'all 60ms ease-in',
    'MozTransition': 'all 60ms ease-in',
    'OTransition': 'all 60ms ease-in',
    'MsTransition': 'all 60ms ease-in',
    'transition': 'all 60ms ease-in',
    'WebkitTouchCallout': 'none',
    // iOS Safari
    'WebkitUserSelect': 'none',
    // Chrome/Safari/Opera
    'KhtmlUserSelect': 'none',
    // Konqueror
    'MozUserSelect': 'none',
    // Firefox
    'MsUserSelect': 'none',
    // Internet Explorer/Edge
    'userSelect': 'none'
  },
  'rdtCounter rdtBtn:hover': {
    'background': '#eee'
  },
  'rdtCounter rdtCount': {
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }]
  },
  'rdtMilli': {
    'verticalAlign': 'middle',
    'paddingLeft': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': 'px', 'value': 48 }]
  },
  'rdtMilli input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'marginTop': [{ 'unit': 'px', 'value': 37 }]
  },
  'rdtMonths': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'rdtYears': {
    'paddingBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'rdtMonths rdtMonth': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer',
    'borderRadius': '50%',
    'textAlign': 'center'
  },
  'rdtMonths rdtYear': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer',
    'borderRadius': '50%',
    'textAlign': 'center'
  },
  'rdtYears rdtMonth': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer',
    'borderRadius': '50%',
    'textAlign': 'center'
  },
  'rdtYears rdtYear': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 56 }],
    'lineHeight': [{ 'unit': 'px', 'value': 56 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'cursor': 'pointer',
    'borderRadius': '50%',
    'textAlign': 'center'
  },
  'rdtMonths rdtMonthrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff'
  },
  'rdtMonths rdtYearrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff'
  },
  'rdtYears rdtMonthrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff'
  },
  'rdtYears rdtYearrdtActive': {
    'backgroundColor': '#9c27b0 !important',
    'color': '#fff'
  },
  // !
  Ionicons, v2.0.0
  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/
  https://twitter.com/benjsperry  https://twitter.com/ionicframework
  MIT License: https://github.com/driftyco/ionicons

  Android-style icons originally built by Google’s
  Material Design Icons: https://github.com/google/material-design-icons
  used under CC BY http://creativecommons.org/licenses/by/4.0/
  Modified icons to fit ionicon’s grid from original.
  'fontFace': {
    'fontFamily': '"Ionicons"',
    'src': 'url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0")',
    'src': 'url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.eot?v=2.0.0#iefix")
			format("embedded-opentype"),
		url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.ttf?v=2.0.0") format("truetype"),
		url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.woff?v=2.0.0") format("woff"),
		url("https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/fonts/ionicons.svg?v=2.0.0#Ionicons") format("svg")',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'image-gallery-fullscreen-button::before': {
    'display': 'inline-block',
    'fontFamily': '"Ionicons"',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }]
    }
  },
  'image-gallery-play-button::before': {
    'display': 'inline-block',
    'fontFamily': '"Ionicons"',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }]
    }
  },
  'image-gallery-left-nav::before': {
    'display': 'inline-block',
    'fontFamily': '"Ionicons"',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }]
    }
  },
  'image-gallery-right-nav::before': {
    'display': 'inline-block',
    'fontFamily': '"Ionicons"',
    'speak': 'none',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontVariant': 'normal',
    'textTransform': 'none',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2 }]
    }
  },
  'image-gallery': {
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'OUserSelect': 'none',
    'userSelect': 'none',
    'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)'
  },
  'image-galleryfullscreen-modal': {
    'background': '#000',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '5'
  },
  'image-galleryfullscreen-modal image-gallery-content': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translateY(-50%)'
  },
  'image-gallery-content': {
    'position': 'relative',
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-contentfullscreen': {
    'background': '#000'
  },
  'image-gallery-contentfullscreen image-gallery-slide': {
    'background': '#000'
  },
  'image-gallery-slide-wrapper': {
    'position': 'relative'
  },
  'image-gallery-slide-wrapperleft': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': NaN }],
    '<w768': {
      'width': [{ 'unit': '%H', 'value': NaN }]
    }
  },
  'image-gallery-slide-wrapperright': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': NaN }],
    '<w768': {
      'width': [{ 'unit': '%H', 'value': NaN }]
    }
  },
  'image-gallery-slide-wrapperimage-gallery-rtl': {
    'direction': 'rtl'
  },
  'image-gallery-fullscreen-button': {
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'outline': 'none',
    'position': 'absolute',
    'zIndex': '4',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 3.4 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'image-gallery-play-button': {
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'outline': 'none',
    'position': 'absolute',
    'zIndex': '4',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 3.4 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'image-gallery-left-nav': {
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'outline': 'none',
    'position': 'absolute',
    'zIndex': '4',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 3.4 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'image-gallery-right-nav': {
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'outline': 'none',
    'position': 'absolute',
    'zIndex': '4',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 3.4 }],
      'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }]
    },
    '<w480': {
      'fontSize': [{ 'unit': 'em', 'value': 2.4 }],
      'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'image-gallery-fullscreen-button::before': {
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 0.7 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#1a1a1a' }],
    'transition': 'color .2s ease-out'
  },
  'image-gallery-play-button::before': {
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 0.7 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#1a1a1a' }],
    'transition': 'color .2s ease-out'
  },
  'image-gallery-left-nav::before': {
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 0.7 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#1a1a1a' }],
    'transition': 'color .2s ease-out'
  },
  'image-gallery-right-nav::before': {
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 0.7 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '#1a1a1a' }],
    'transition': 'color .2s ease-out'
  },
  'image-gallery-fullscreen-button:hover::before': {
    'color': '#337ab7',
    '<w768': {
      'color': '#fff'
    },
    '<w768': {
      'transform': 'none'
    }
  },
  'image-gallery-play-button:hover::before': {
    'color': '#337ab7',
    '<w768': {
      'color': '#fff'
    },
    '<w768': {
      'transform': 'none'
    }
  },
  'image-gallery-left-nav:hover::before': {
    'color': '#337ab7',
    '<w768': {
      'color': '#fff'
    },
    '<w768': {
      'transform': 'none'
    }
  },
  'image-gallery-right-nav:hover::before': {
    'color': '#337ab7',
    '<w768': {
      'color': '#fff'
    },
    '<w768': {
      'transform': 'none'
    }
  },
  'image-gallery-fullscreen-button': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-play-button': {
    'bottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-fullscreen-button::before': {
    'fontSize': [{ 'unit': 'em', 'value': 2.7 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#1a1a1a' }]
  },
  'image-gallery-play-button::before': {
    'fontSize': [{ 'unit': 'em', 'value': 2.7 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#1a1a1a' }]
  },
  'image-gallery-fullscreen-button:hover::before': {
    'color': '#fff',
    'transform': 'scale(1.1)'
  },
  'image-gallery-play-button:hover::before': {
    'color': '#fff',
    'transform': 'scale(1.1)'
  },
  'image-gallery-fullscreen-button': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-fullscreen-button::before': {
    'content': '""'
  },
  'image-gallery-fullscreen-buttonactive::before': {
    'content': '""'
  },
  'image-gallery-fullscreen-buttonactive:hover::before': {
    'transform': 'scale(0.9)'
  },
  'image-gallery-play-button': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-play-button::before': {
    'content': '""'
  },
  'image-gallery-play-buttonactive::before': {
    'content': '""'
  },
  'image-gallery-left-nav': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 5 }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translateY(-50%)'
  },
  'image-gallery-right-nav': {
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 5 }],
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'transform': 'translateY(-50%)'
  },
  'image-gallery-left-nav[disabled]': {
    'cursor': 'disabled',
    'opacity': '.6',
    'pointerEvents': 'none'
  },
  'image-gallery-right-nav[disabled]': {
    'cursor': 'disabled',
    'opacity': '.6',
    'pointerEvents': 'none'
  },
  'image-gallery-left-nav': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-left-nav::before': {
    'content': '""'
  },
  'image-gallery-right-nav': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-right-nav::before': {
    'content': '""'
  },
  'image-gallery-slides': {
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'position': 'relative',
    'whiteSpace': 'nowrap'
  },
  'image-gallery-slide': {
    'background': '#fff',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'image-gallery-slidecenter': {
    'position': 'relative'
  },
  'image-gallery-slide img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'image-gallery-slide image-gallery-description': {
    'background': 'rgba(0, 0, 0, 0.4)',
    'bottom': [{ 'unit': 'px', 'value': 70 }],
    'color': '#fff',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'position': 'absolute',
    'whiteSpace': 'normal',
    '<w768': {
      'bottom': [{ 'unit': 'px', 'value': 45 }],
      'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
      'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'image-gallery-bullets': {
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'zIndex': '4'
  },
  'image-gallery-bullets image-gallery-bullets-container': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'image-gallery-bullets image-gallery-bullet': {
    'appearance': 'none',
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50%',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#1a1a1a' }],
    'cursor': 'pointer',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    '<w768': {
      'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }],
      'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
    },
    '<w480': {
      'padding': [{ 'unit': 'px', 'value': 2.7 }, { 'unit': 'px', 'value': 2.7 }, { 'unit': 'px', 'value': 2.7 }, { 'unit': 'px', 'value': 2.7 }]
    }
  },
  'image-gallery-bullets image-gallery-bulletactive': {
    'background': '#fff'
  },
  'image-gallery-thumbnails-wrapper': {
    'position': 'relative'
  },
  'image-gallery-thumbnails-wrapperthumbnails-wrapper-rtl': {
    'direction': 'rtl'
  },
  'image-gallery-thumbnails-wrapperleft': {
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 108 }],
    '<w768': {
      'width': [{ 'unit': 'px', 'value': 81 }]
    },
    '<w768': {
      'marginRight': [{ 'unit': 'px', 'value': 3 }]
    },
    '<w768': {
      'marginLeft': [{ 'unit': 'px', 'value': 3 }]
    }
  },
  'image-gallery-thumbnails-wrapperright': {
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 108 }],
    '<w768': {
      'width': [{ 'unit': 'px', 'value': 81 }]
    },
    '<w768': {
      'marginRight': [{ 'unit': 'px', 'value': 3 }]
    },
    '<w768': {
      'marginLeft': [{ 'unit': 'px', 'value': 3 }]
    }
  },
  'image-gallery-thumbnails-wrapperleft image-gallery-thumbnails': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperright image-gallery-thumbnails': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperleft image-gallery-thumbnails image-gallery-thumbnail': {
    'display': 'block',
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperright image-gallery-thumbnails image-gallery-thumbnail': {
    'display': 'block',
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperleft image-gallery-thumbnails image-gallery-thumbnail + image-gallery-thumbnail': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperright image-gallery-thumbnails image-gallery-thumbnail + image-gallery-thumbnail': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'image-gallery-thumbnails-wrapperleft': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'image-gallery-thumbnails-wrapperright': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'image-gallery-thumbnails': {
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    '<w768': {
      'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
    }
  },
  'image-gallery-thumbnails image-gallery-thumbnails-container': {
    'cursor': 'pointer',
    'textAlign': 'center',
    'transition': 'transform .45s ease-out',
    'whiteSpace': 'nowrap'
  },
  'image-gallery-thumbnail': {
    'display': 'inline-block',
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'transition': 'border .3s ease-out',
    'width': [{ 'unit': 'px', 'value': 100 }],
    '<w768': {
      'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
      'width': [{ 'unit': 'px', 'value': 75 }]
    }
  },
  'image-gallery-thumbnail + image-gallery-thumbnail': {
    'marginLeft': [{ 'unit': 'px', 'value': 2 }]
  },
  'image-gallery-thumbnail image-gallery-thumbnail-inner': {
    'position': 'relative'
  },
  'image-gallery-thumbnail img': {
    'verticalAlign': 'middle',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'image-gallery-thumbnailactive': {
    'border': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#337ab7' }],
    '<w768': {
      'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#337ab7' }]
    }
  },
  'image-gallery-thumbnail-label': {
    'boxSizing': 'border-box',
    'color': 'white',
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1 }],
    'padding': [{ 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }, { 'unit': '%V', 'value': 0.05 }, { 'unit': '%H', 'value': 0.05 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'black' }],
    'transform': 'translateY(-50%)',
    'whiteSpace': 'normal',
    'width': [{ 'unit': '%H', 'value': 1 }],
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
      'lineHeight': [{ 'unit': 'em', 'value': 0.8 }]
    }
  },
  'image-gallery-index': {
    'background': 'rgba(0, 0, 0, 0.4)',
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '4',
    '<w768': {
      'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
      'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }]
    }
  },
  'image-gallery-left-nav': {
    'position': 'absolute',
    'cursor': 'pointer',
    'zIndex': '100',
    'opacity': '0.5',
    'bottom': [{ 'unit': '%V', 'value': -0.4 }],
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'image-gallery-right-nav': {
    'position': 'absolute',
    'cursor': 'pointer',
    'zIndex': '100',
    'opacity': '0.5',
    'bottom': [{ 'unit': '%V', 'value': -0.4 }],
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'image-gallery-left-nav:before': {
    'color': '#3c4858',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'image-gallery-left-nav:hover:before': {
    'color': '#3c4858',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'image-gallery-right-nav:before': {
    'color': '#3c4858',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'image-gallery-right-nav:hover:before': {
    'color': '#3c4858',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'image-gallery-left-nav:before': {
    'fontFamily': ''Material Icons'',
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'textTransform': 'none',
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'wordWrap': 'normal',
    'direction': 'ltr',
    'WebkitFontFeatureSettings': ''liga'',
    'WebkitFontSmoothing': 'antialiased'
  },
  'image-gallery-right-nav:before': {
    'fontFamily': ''Material Icons'',
    'fontWeight': 'normal',
    'fontStyle': 'normal',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'textTransform': 'none',
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'wordWrap': 'normal',
    'direction': 'ltr',
    'WebkitFontFeatureSettings': ''liga'',
    'WebkitFontSmoothing': 'antialiased'
  },
  'image-gallery-left-nav': {
    'left': [{ 'unit': 'px', 'value': -20 }]
  },
  'image-gallery-left-nav::before': {
    'content': '"chevron_left"'
  },
  'image-gallery-right-nav': {
    'right': [{ 'unit': 'px', 'value': -20 }]
  },
  'image-gallery-right-nav::before': {
    'content': '"chevron_right"'
  },
  'image-gallery-thumbnail': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer',
    'position': 'relative',
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 125 }],
    'border': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': '!important' }]
  },
  'image-gallery-thumbnail + image-gallery-thumbnail': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'image-gallery-thumbnail img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'cursor': 'pointer',
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'image-gallery-thumbnail-label': {
    'display': 'none !important'
  },
  'image-gallery-thumbnails': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'overflow': 'hidden',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'image-gallery-thumbnails-container': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none',
    'textAlign': 'center'
  },
  // Slider
  'slick-slider': {
    'position': 'relative',
    'display': 'block',
    'boxSizing': 'border-box',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'WebkitTouchCallout': 'none',
    'KhtmlUserSelect': 'none',
    'MsTouchAction': 'pan-y',
    'touchAction': 'pan-y',
    'WebkitTapHighlightColor': 'transparent'
  },
  'slick-slider slick-caption': {
    'paddingBottom': [{ 'unit': 'px', 'value': 45 }],
    'position': 'absolute',
    'right': [{ 'unit': '%H', 'value': 0.15 }],
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'left': [{ 'unit': '%H', 'value': 0.15 }],
    'zIndex': '10',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'color': '#ffffff',
    'textAlign': 'center',
    'zIndex': '3',
    'display': 'none'
  },
  'slick-slider slick-slide > div:first-child': {
    'position': 'relative'
  },
  'slick-slider slick-icons': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 5 }]
  },
  'slick-slider slick-image': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'display': 'inline-flex !important'
  },
  'slick-list': {
    'position': 'relative',
    'display': 'block',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'slick-list:focus': {
    'outline': 'none'
  },
  'slick-listdragging': {
    'cursor': 'pointer',
    'cursor': 'hand'
  },
  'slick-slider slick-track': {
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'MsTransform': 'translate3d(0, 0, 0)',
    'OTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)'
  },
  'slick-slider slick-list': {
    'WebkitTransform': 'translate3d(0, 0, 0)',
    'MozTransform': 'translate3d(0, 0, 0)',
    'MsTransform': 'translate3d(0, 0, 0)',
    'OTransform': 'translate3d(0, 0, 0)',
    'transform': 'translate3d(0, 0, 0)'
  },
  'slick-track': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'slick-track:before': {
    'display': 'table',
    'content': ''''
  },
  'slick-track:after': {
    'display': 'table',
    'content': ''''
  },
  'slick-track:after': {
    'clear': 'both'
  },
  'slick-loading slick-track': {
    'visibility': 'hidden'
  },
  'slick-slide': {
    'display': 'none',
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  '[dir='rtl'] slick-slide': {
    'float': 'right'
  },
  'slick-slide img': {
    'display': 'block'
  },
  'slick-slideslick-loading img': {
    'display': 'none'
  },
  'slick-slidedragging img': {
    'pointerEvents': 'none'
  },
  'slick-initialized slick-slide': {
    'display': 'block'
  },
  'slick-loading slick-slide': {
    'visibility': 'hidden'
  },
  'slick-vertical slick-slide': {
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'slick-arrowslick-hidden': {
    'display': 'none'
  },
  'buttonslick-arrowslick-prev': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'MsTransform': 'translateY(-50%)',
    'transform': 'translateY(-50%)',
    'cursor': 'pointer',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'zIndex': '2',
    'opacity': '0.5'
  },
  'buttonslick-arrowslick-next': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'MsTransform': 'translateY(-50%)',
    'transform': 'translateY(-50%)',
    'cursor': 'pointer',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'color': 'transparent',
    'outline': 'none',
    'background': 'transparent',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'zIndex': '2',
    'opacity': '0.5'
  },
  'slick-prev': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'slick-prev::before': {
    'content': '"\f053"',
    'fontWeight': '600',
    'fontFamily': 'Font Awesome\ 5 Free',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased',
    'display': 'inline-block',
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'slick-next': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'slick-next::before': {
    'content': '"\f054"',
    'fontWeight': '600',
    'fontFamily': 'Font Awesome\ 5 Free',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased',
    'display': 'inline-block',
    'fontStyle': 'normal',
    'fontVariant': 'normal',
    'textRendering': 'auto',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'slick-list': {
    'zIndex': '1'
  },
  'slick-dots': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'textAlign': 'center',
    'zIndex': '3'
  },
  'slick-dots li': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer'
  },
  'slick-dots li button': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'cursor': 'pointer'
  },
  'slick-dots li': {
    'position': 'relative',
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'slick-dots li button': {
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'color': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': 'none',
    'background': 'transparent'
  },
  'slick-dots li button::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'content': '"\2022"',
    'textAlign': 'center',
    'opacity': '1',
    'backgroundColor': '#fff',
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'borderRadius': '2px',
    'transition': 'all 300ms linear'
  },
  'slick-dots lislick-active button:before': {
    'width': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 15 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  'react-tagsinput': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 6 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'react-tagsinput-tag': {
    'cursor': 'pointer',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }],
    'borderRadius': '12px',
    'color': '#ffffff',
    'fontWeight': '500',
    'fontSize': [{ 'unit': 'em', 'value': 0.75 }],
    'textTransform': 'uppercase',
    'display': 'inline-block',
    'lineHeight': [{ 'unit': 'em', 'value': 1.5 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 0.8 }]
  },
  'react-tagsinput-remove': {
    'cursor': 'pointer',
    'fontWeight': 'bold'
  },
  'react-tagsinput-tag a::before': {
    'fontFamily': 'Font Awesome\ 5 Free',
    'content': '"\f00d"',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'fontWeight': '900'
  },
  'react-tagsinput-tag a': {
    'cursor': 'pointer',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 3 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0',
    'backgroundColor': 'transparent',
    'color': '#ffffff'
  },
  'react-tagsinput-input': {
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#777',
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': '400',
    'marginBottom': [{ 'unit': 'px', 'value': 6 }],
    'marginTop': [{ 'unit': 'px', 'value': 1 }],
    'outline': 'none',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 80 }]
  },
  'react-tagsinput react-tagsinput-tag': {
    'WebkitTransition': 'all 300ms ease 0s',
    'MozTransition': 'all 300ms ease 0s',
    'OTransition': 'all 300ms ease 0s',
    'MsTransition': 'all 300ms ease 0s',
    'transition': 'all 300ms ease 0s',
    'backgroundColor': '#999'
  },
  'react-tagsinput react-tagsinput-tag:hover': {
    'paddingRight': [{ 'unit': 'px', 'value': 22 }]
  },
  'react-tagsinput react-tagsinput-tag:hover a': {
    'opacity': '1',
    'paddingRight': [{ 'unit': 'px', 'value': 4 }],
    'backgroundColor': 'transparent',
    'color': '#ffffff'
  },
  'react-tagsinput react-tagsinput-tagprimary': {
    'backgroundColor': '#9c27b0'
  },
  'react-tagsinput react-tagsinput-taginfo': {
    'backgroundColor': '#00bcd4'
  },
  'react-tagsinput react-tagsinput-tagsuccess': {
    'backgroundColor': '#4caf50'
  },
  'react-tagsinput react-tagsinput-tagwarning': {
    'backgroundColor': '#ff9800'
  },
  'react-tagsinput react-tagsinput-tagdanger': {
    'backgroundColor': '#f44336'
  },
  'react-tagsinput react-tagsinput-tagrose': {
    'backgroundColor': '#e91e63'
  },
  'react-tagsinput react-tagsinput-tagdefault': {
    'backgroundColor': '#999'
  }
});
