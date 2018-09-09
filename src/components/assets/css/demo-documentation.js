import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'backgroundColor': '#E5E5E5',
    'color': '#3C4858'
  },
  'section wizard-card': {
    'minHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'tim-row': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'tim-white-buttons': {
    'backgroundColor': '#777777'
  },
  'title': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'minHeight': [{ 'unit': 'px', 'value': 32 }],
    'fontWeight': '500'
  },
  'tim-row p': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.6 }]
  },
  'titletext-center': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'tim-typo': {
    'paddingLeft': [{ 'unit': '%H', 'value': 0.25 }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }],
    'position': 'relative'
  },
  'tim-typo tim-note': {
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'color': '#c0c1c2',
    'display': 'block',
    'fontWeight': '400',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'lineHeight': [{ 'unit': 'px', 'value': 13 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 20 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 260 }]
  },
  'tim-row': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'tim-row h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'switch': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#navbar-full navbar': {
    'borderRadius': '0 !important',
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'zIndex': '2'
  },
  'space': {
    'height': [{ 'unit': 'px', 'value': 130 }],
    'display': 'block'
  },
  'space-110': {
    'height': [{ 'unit': 'px', 'value': 110 }],
    'display': 'block'
  },
  'space-50': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'block'
  },
  'space-70': {
    'height': [{ 'unit': 'px', 'value': 70 }],
    'display': 'block'
  },
  'navigation-example img-src': {
    'backgroundAttachment': 'scroll'
  },
  'navigation-example': {
    // background-image: url('../img/bg.jpg');
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'minHeight': [{ 'unit': 'px', 'value': 740 }]
  },
  '#notifications': {
    'backgroundColor': '#FFFFFF',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative'
  },
  '#notifications alert-danger': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'tim-note': {
    'textTransform': 'capitalize'
  },
  '#buttons btn': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }]
  },
  'space-100': {
    'height': [{ 'unit': 'px', 'value': 100 }],
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'be-social': {
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }],
    // border-bottom: 1px solid #aaa;
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 40 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'txt-white': {
    'color': '#FFFFFF'
  },
  'txt-gray': {
    'color': '#ddd !important'
  },
  'parallax': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 570 }],
    'display': 'block',
    'backgroundAttachment': 'fixed',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center'
  },
  'logo-containerlogo-documentation': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'logo-container logo': {
    'overflow': 'hidden',
    'borderRadius': '50%',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333333' }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'float': 'left'
  },
  'logo-container brand': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 18 }],
    'float': 'left',
    'color': '#fff',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 7 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'left'
  },
  'navbar-default logo-container brand': {
    'color': '#999999'
  },
  'navbar-transparent logo-container brand': {
    'color': '#FFFFFF'
  },
  'logo-container brand-material': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'logo-container logo img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'navbar-small logo-container brand': {
    'color': '#333333'
  },
  'fixed-section': {
    'top': [{ 'unit': 'px', 'value': 90 }],
    'maxHeight': [{ 'unit': 'vh', 'value': 80 }],
    'overflow': 'scroll'
  },
  'fixed-section ul li': {
    'listStyle': 'none'
  },
  'fixed-section li a': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'display': 'block',
    'color': '#666666'
  },
  'fixed-section li aactive': {
    'color': '#00bbff'
  },
  'fixed-sectionfloat': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': 'px', 'value': 200 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'parallax parallax-image': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden',
    'position': 'absolute',
    '<w768': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'height': [{ 'unit': 'px', 'value': 640 }],
      'overflow': 'hidden'
    }
  },
  'parallax parallax-image img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'separator': {
    'content': '"Separator"',
    'color': '#FFFFFF',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'separator-line': {
    'backgroundColor': '#EEE',
    'height': [{ 'unit': 'px', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block'
  },
  'separatorseparator-gray': {
    'backgroundColor': '#EEEEEE'
  },
  'social-buttons-demo btn': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 7 }]
  },
  'img-container': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'img-container img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lightbox img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'lightbox modal-content': {
    'overflow': 'hidden'
  },
  'lightbox modal-body': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // Loading dots
  // transitions
  'logo-container brand': {
    'WebkitTransition': 'all .2s',
    'MozTransition': 'all .2s',
    'OTransition': 'all .2s',
    'transition': 'all .2s'
  },
  'logo-container logo': {
    'WebkitTransition': 'all .2s',
    'MozTransition': 'all .2s',
    'OTransition': 'all .2s',
    'transition': 'all .2s'
  },
  'presentation front': {
    'WebkitTransition': 'all .2s',
    'MozTransition': 'all .2s',
    'OTransition': 'all .2s',
    'transition': 'all .2s'
  },
  'presentation front btn': {
    'WebkitTransition': 'all .2s',
    'MozTransition': 'all .2s',
    'OTransition': 'all .2s',
    'transition': 'all .2s'
  },
  'presentation front:after': {
    'WebkitTransition': 'all .2s',
    'MozTransition': 'all .2s',
    'OTransition': 'all .2s',
    'transition': 'all .2s'
  },
  '#images h4': {
    'marginBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  '#javascriptComponents': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#javascriptComponents btn-raised': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 5 }]
  },
  // layer animation
  'layers-container': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'position': 'relative'
  },
  'layers-container img': {
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'section-black': {
    'backgroundColor': '#333'
  },
  'animate': {
    'transition': '1.5s ease-in-out',
    'MozTransition': '1.5s ease-in-out',
    'WebkitTransition': '1.5s ease-in-out'
  },
  'navbar-defaultnavbar-small logo-container brand': {
    'color': '#333333'
  },
  'navbar-transparentnavbar-small logo-container brand': {
    'color': '#FFFFFF'
  },
  'navbar-defaultnavbar-small logo-container brand': {
    'color': '#333333'
  },
  'sharing-area': {
    'marginTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'sharing-area btn': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }],
    'color': '#FFFFFF'
  },
  'sharing-area btn i': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'sharing-area btn-twitter': {
    'backgroundColor': '#55acee'
  },
  'sharing-area btn-facebook': {
    'backgroundColor': '#3b5998'
  },
  'sharing-area btn-google-plus': {
    'backgroundColor': '#dd4b39'
  },
  'sharing-area btn-github': {
    'backgroundColor': '#333333'
  },
  'section-notifications': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-thin': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'section-navbars': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#navbar navbar': {
    'borderRadius': '0'
  },
  'section-tabs': {
    'background': '#EEEEEE'
  },
  'section-pagination': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'section-download h4': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'section-examples a': {
    'textDecoration': 'none'
  },
  'section-examples h5': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'components-page wrapper > header': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center'
  },
  'tutorial-page wrapper > header': {
    'height': [{ 'unit': 'px', 'value': 400 }],
    'paddingTop': [{ 'unit': 'px', 'value': 100 }],
    'backgroundSize': 'cover',
    'backgroundPosition': 'center center'
  },
  'main': {
    'background': '#FFFFFF',
    'position': 'relative',
    'zIndex': '3'
  },
  'main-raised': {
    'margin': [{ 'unit': 'px', 'value': -60 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }],
    'borderRadius': '6px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.14),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'header-filter': {
    'position': 'relative'
  },
  'header-filter:after': {
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'block',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'content': '""'
  },
  'header-filter:before': {
    'position': 'absolute',
    'zIndex': '1',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'block',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'content': '""'
  },
  'header-filter::before': {
    'backgroundColor': 'rgba(0, 0, 0, 0.5)'
  },
  'header-filter container': {
    'zIndex': '2',
    'position': 'relative',
    'paddingTop': [{ 'unit': 'vh', 'value': 20 }]
  },
  'page-header title': {
    'fontWeight': '700',
    'fontFamily': '"Roboto Slab", "Times New Roman", serif',
    'lineHeight': [{ 'unit': 'em', 'value': 1.15 }],
    'color': '#fff'
  },
  'section': {
    'padding': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }],
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover'
  },
  'navbar': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '3px',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': -12 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.42)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.42),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12)' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.12),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'WebkitTransition': 'all 150ms ease 0s',
    'MozTransition': 'all 150ms ease 0s',
    'OTransition': 'all 150ms ease 0s',
    'MsTransition': 'all 150ms ease 0s',
    'transition': 'all 150ms ease 0s'
  },
  'navbar navbar-brand': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'color': 'inherit',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }],
    '<w1199': {
      'height': [{ 'unit': 'px', 'value': 50 }],
      'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }]
    }
  },
  'navbar navbar-brand:focus': {
    'color': 'inherit',
    'backgroundColor': 'transparent'
  },
  'navbar navbar-brand:hover': {
    'color': 'inherit',
    'backgroundColor': 'transparent'
  },
  'navbarnavbar-transparent': {
    'backgroundColor': 'transparent',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'color': '#fff',
    'paddingTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'navbar-fixed-top': {
    'borderRadius': '0'
  },
  'navbar navbar-nav > li > a fa': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'maxWidth': [{ 'unit': 'px', 'value': 20 }]
  },
  'navbar navbar-nav > li > a material-icons': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'maxWidth': [{ 'unit': 'px', 'value': 20 }]
  },
  'navbar navbar-nav > li > a:focus': {
    'color': 'inherit',
    'backgroundColor': 'transparent'
  },
  'navbar navbar-nav > li > a:hover': {
    'color': 'inherit',
    'backgroundColor': 'transparent'
  },
  'navbar navbar-nav > li > a:not(btn) material-icons': {
    'marginTop': [{ 'unit': 'px', 'value': -3 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'marginRight': [{ 'unit': 'px', 'value': 3 }]
  },
  'navbar': {
    'backgroundColor': '#9c27b0',
    'color': '#FFFFFF'
  },
  'navbarnavbar-default': {
    'backgroundColor': '#9c27b0',
    'color': '#FFFFFF'
  },
  'footer': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'footer a': {
    'fontWeight': 'bold'
  },
  'footerfooter-documentation': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'color': 'inherit'
  },
  'footerfooter-documentation li a': {
    'color': 'inherit'
  },
  'footerfooter-documentation li a:focus': {
    'color': '#89229b'
  },
  'footerfooter-documentation li a:hover': {
    'color': '#89229b'
  },
  'footer ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'footer ul li': {
    'display': 'inline-block'
  },
  'footer ul li a': {
    'color': 'inherit',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontWeight': '500',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textTransform': 'uppercase',
    'borderRadius': '3px',
    'textDecoration': 'none',
    'position': 'relative',
    'display': 'block'
  },
  'footer ul li a:hover': {
    'textDecoration': 'none'
  },
  'footer ul li btn': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer ullinks-horizontal:first-child a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer ullinks-horizontal:last-child a': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer ullinks-vertical li': {
    'display': 'block'
  },
  'footer ullinks-vertical li a': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer social-buttons btn': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer social-buttons a': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer footer-brand': {
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'footer footer-brand:focus': {
    'color': '#3C4858'
  },
  'footer footer-brand:hover': {
    'color': '#3C4858'
  },
  'footer copyright': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    '<w768': {
      'display': 'inline-block',
      'textAlign': 'center',
      'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
      'float': 'none !important',
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'footer copyright material-icons': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 3 }]
  },
  'footer pull-center': {
    'display': 'inline-block',
    'float': 'none'
  }
});
