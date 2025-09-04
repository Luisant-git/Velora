import  { Fragment } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

// Create a memoized selector
const selectRelevantState = createSelector(
  (state) => state, // Input selector
  (state:any) => ({
    dir: state.dir,
    dataThemeMode: state.dataThemeMode,
    dataHeaderStyles: state.dataHeaderStyles,
    dataVerticalStyle: state.dataVerticalStyle,
    dataNavLayout: state.dataNavLayout,
    dataMenuStyles: state.dataMenuStyles,
    toggled: state.toggled,
    dataNavStyle: state.dataNavStyle,
    horStyle: state.horStyle,
    dataPageStyle: state.dataPageStyle,
    dataWidth: state.dataWidth,
    dataMenuPosition: state.dataMenuPosition,
    dataHeaderPosition: state.dataHeaderPosition,
    iconOverlay: state.iconOverlay,
    bgImg: state.bgImg,
    iconText: state.iconText,
    colorPrimaryRgb: state.colorPrimaryRgb,
    colorPrimary: state.colorPrimary,
    bodyBg: state.bodyBg,
    bodyBg2: state.bodyBg2,
    lightRgb: state.lightRgb,
    formControlBg: state.formControlBg,
    gray: state.gray,
    inputBorder: state.inputBorder,
    Light: state.Light,
    body: state.body.class, // Select body class dynamically
  })
);

function RootWrapper({ children }:any) {
  // Use the memoized selector
  const local_variable = useSelector(selectRelevantState);

  // Generate dynamic styles as CSS variables
  const customStyles :any= `${local_variable.colorPrimaryRgb != '' ? `--primary-rgb: ${local_variable.colorPrimaryRgb}` : ''};
  ${local_variable.bodyBg != '' ? `--body-bg-rgb: ${local_variable.bodyBg}` : ''};
  ${local_variable.bodyBg2 != '' ? `--body-bg-rgb2: ${local_variable.bodyBg2}` : ''};
  ${local_variable.lightRgb != '' ? `--light-rgb: ${local_variable.lightRgb}` : ''};
  ${local_variable.formControlBg != '' ? `--form-control-bg: ${local_variable.formControlBg}` : ''};
  ${local_variable.gray != '' ? `--gray-3: ${local_variable.gray}` : ''};
  ${local_variable.inputBorder != '' ? `--input-border: ${local_variable.inputBorder}` : ''};`;

  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
        <html
              dir={local_variable.dir}
              data-theme-mode={local_variable.dataThemeMode}
              data-header-styles={local_variable.dataHeaderStyles}
              data-vertical-style={local_variable.dataVerticalStyle}
              data-nav-layout={local_variable.dataNavLayout}
              data-menu-styles={local_variable.dataMenuStyles} 
              data-toggled={local_variable.toggled}
              data-nav-style={local_variable.dataNavStyle}
              hor-style={local_variable.horStyle}
              data-page-style={local_variable.dataPageStyle}
              data-width={local_variable.dataWidth}
              data-menu-position={local_variable.dataMenuPosition}
              data-header-position={local_variable.dataHeaderPosition}
              data-icon-overlay={local_variable.iconOverlay}
              data-bg-img={local_variable.bgImg}
              icon-text={local_variable.iconText}
              style={customStyles} // Apply styles directly
              >
              </html>
          <body
            className={`${local_variable.body ? local_variable.body : ""}`}
          />
        </Helmet>
        {children}
      </HelmetProvider>
    </Fragment>
  );
}

export default RootWrapper;
