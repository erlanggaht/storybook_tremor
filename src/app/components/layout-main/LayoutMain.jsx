import GlobalContext from '@/app/GlobalContext/globalContext';
import classNames from 'classnames'
import { useContext } from 'react';

function LayoutMain({children}) {
    const {toggleSidebar} = useContext(GlobalContext);

  return (
    <main className={classNames("Layout-Main  w-10/12 px-0 py-5", {'mx-11':toggleSidebar,'mx-56':!toggleSidebar})}>
        {children}
    </main>
  )
}

export default LayoutMain;

