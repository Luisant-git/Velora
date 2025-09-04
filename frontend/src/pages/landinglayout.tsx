import  { Fragment, useEffect, useState} from 'react'
import LandingSwitcher from '../components/switcher/landing-switcher';
import Backtotop from '../components/backtotop/backtotop';
import { Outlet } from 'react-router-dom';
import store from '../components/common/ui/redux/store';
import { Provider } from 'react-redux';
import { Initialload } from '../components/contextapi';

const Landinglayout = () => {
    
  const [lateLoad, setlateLoad] = useState(false);
  
  useEffect(() => {
    setlateLoad(true);
  });

const [pageloading, setpageloading] = useState(false)
  return (
    <Fragment>
       <Initialload.Provider value={{ pageloading, setpageloading }}>
       <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        <Provider store={store}>
            <div>
              <LandingSwitcher />
              <Outlet/>
            </div>
            <Backtotop/>
        </Provider>
        </div>
        </Initialload.Provider>
    </Fragment>
  )
}

export default Landinglayout;