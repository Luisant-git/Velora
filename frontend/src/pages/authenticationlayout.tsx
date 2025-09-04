import  { Fragment, useState } from 'react'
import LandingSwitcher from '../components/switcher/landing-switcher';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../components/common/ui/redux/store';
import { Initialload } from '../components/contextapi';

const AuthenticationLayout = () => {
const [pageloading, setpageloading] = useState(false)
  return (
    <Fragment>
       <Initialload.Provider value={{ pageloading, setpageloading }}>
        <Provider store={store}>
          <LandingSwitcher/>
          <Outlet/>
        </Provider>
       </Initialload.Provider>
    </Fragment>
  )

}

export default AuthenticationLayout;