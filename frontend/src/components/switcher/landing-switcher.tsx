import  { Fragment, useContext, useEffect} from 'react'
import Themeprimarycolor, * as switcherdata from "../../components/common/data/switcherdata/switcherdata"
import { connect } from "react-redux"
import SpkButton from '../../@spk-reusable-components/reusable-uielements/spk-button';
import { ThemeChanger } from '../common/ui/redux/action';
import { Initialload } from '../contextapi';
const Landingswitcher = ({ local_varaiable, ThemeChanger }: any) => {

    const theme :any= useContext(Initialload);

    useEffect(() => {
        switcherdata.LocalStorageBackup(ThemeChanger,theme.setpageloading);
    
      }, []);

    const Switcherclose = () => {
        if (document.querySelector(".offcanvas-end")?.classList.contains("show")) {
            document.querySelector(".offcanvas-end")?.classList.remove("show");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
            document.querySelector(".switcher-backdrop")?.classList.add("d-none");
        }
    };

    return (
        <Fragment>
            <div className="switcher-backdrop d-none" onClick={() => { Switcherclose(); }}></div>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom d-block p-0">
                    <div className="d-flex align-items-center justify-content-between p-3">
                        <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={() => { Switcherclose(); }}></SpkButton>
                    </div>
                </div>
                <div className="offcanvas-body">
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                        checked={local_varaiable.dataThemeMode !== "dark"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Light(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme" checked={local_varaiable.dataThemeMode == "dark"} onChange={(_e) => { }}
                                        onClick={() => switcherdata.Dark(ThemeChanger)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Directions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                        LTR
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" checked={local_varaiable.dir == "ltr"} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Ltr(ThemeChanger); }} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-rtl" checked={local_varaiable.dir == "rtl"} onChange={(_e) => { }}
                                        onClick={() => { switcherdata.Rtl(ThemeChanger); }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theme-colors">
                        <p className="switcher-style-head">Theme Primary:</p>
                        <div className="d-flex flex-wrap align-items-center switcher-style">
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-1" type="radio"
                                    name="theme-primary" id="switcher-primary" checked={local_varaiable.colorPrimaryRgb == "118, 71, 229"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor1(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-2" type="radio"
                                    name="theme-primary" id="switcher-primary1" checked={local_varaiable.colorPrimaryRgb == "100, 149, 237"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor2(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                    id="switcher-primary2" checked={local_varaiable.colorPrimaryRgb == "0, 123, 167"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor3(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                    id="switcher-primary3" checked={local_varaiable.colorPrimaryRgb == "10, 180, 255"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor4(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select me-3">
                                <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                    id="switcher-primary4" checked={local_varaiable.colorPrimaryRgb == "46, 81, 145"} onChange={(_e) => { }}
                                    onClick={() => switcherdata.primaryColor5(ThemeChanger)} />
                            </div>
                            <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                <div className='theme-container-primary'>
                                    <SpkButton>nano</SpkButton>
                                </div>
                                <div className='pickr-container-primary'>
                                    <div className='pickr'>
                                        <SpkButton Customclass='pcr-button' onClickfunc={(ele: any) => {
                                            if (ele.target.querySelector("input")) {
                                                ele.target.querySelector("input").click();
                                            }
                                        }}>
                                            <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                        </SpkButton>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> <p className="switcher-style-head">reset:</p>
                        <div className="text-center">
                            <SpkButton Id="reset-all" Buttonvariant="danger" Customclass="mt-3" onClickfunc={() => switcherdata.Reset1(ThemeChanger)}>Reset</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);