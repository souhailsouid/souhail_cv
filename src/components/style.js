import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  'page-header': {
    'paddingBottom': [{ 'unit': 'px', 'value': 9 }],
    'margin': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }]
  },
  'page-header': {
    'height': [{ 'unit': 'vh', 'value': 60 }],
    'backgroundPosition': 'center center',
    'backgroundSize': 'cover',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderBottomLeftRadius': '6px',
    'borderBottomRightRadius': '6px'
  },
  'title': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'minHeight': [{ 'unit': 'px', 'value': 32 }],
    'fontWeight': '500'
  },
  'titletext-center': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'em', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'em', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'em', 'value': 1.4 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'navbar container': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'WebkitTransition': 'all .33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    'MozTransition': 'all .33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    'OTransition': 'all .33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    'MsTransition': 'all .33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    'transition': 'all .33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    'position': 'relative'
  },
  'nav-open navbar container': {
    'left': [{ 'unit': 'px', 'value': -250 }]
  },
  'container': {
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    '>w768': {
      'width': [{ 'unit': 'px', 'value': 750 }]
    },
    '>w992': {
      'width': [{ 'unit': 'px', 'value': 970 }]
    },
    '>w1200': {
      'width': [{ 'unit': 'px', 'value': 1170 }]
    }
  },
  'col-sm-offset-2': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.16666666670000002 }]
  },
  'col-md-8': {
    'width': [{ 'unit': '%H', 'value': 0.6666666667 }]
  },
  'container-fluid': {
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'row': {
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'h1': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h2': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h3': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h4': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h5': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h6': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h1': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h2': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h3': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h4': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h5': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h6': {
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h1 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h1 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h2 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h2 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h3 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h3 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h4 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h4 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h5 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h5 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h6 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h6 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h1 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h1 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h2 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h2 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h3 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h3 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h4 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h4 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h5 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h5 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h6 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
  },
  'h6 small': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#777'
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
  'h1 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h1 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h2 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h2 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h3 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h3 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h1 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h1 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h2 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h2 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h3 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
  },
  'h3 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.65 }]
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
  'h4 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h4 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h5 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h5 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h6 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h6 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h4 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h4 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h5 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h5 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h6 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h6 small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'footer social-buttons btn': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer social-buttons a': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'footer social-buttons btn': {
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }]
  }
});
