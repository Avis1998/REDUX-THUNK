import * as React from 'react';

export const navigationRef = React.createRef();
export const homeNavigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function navigateHome(name, params) {
  homeNavigationRef.current?.navigate(name, params);
}
