import React, {useState} from 'react';
import HomePage from './HomePage/index.jsx'
import AboutPage from './About/index.jsx';
import BaseInfoPage from './BaseInfo/index.jsx';
import BackFrist from './BackFrist/index.jsx';
import FrontFrist from './FrontFrist/index.jsx';
import Dependencies from './Dependencies/index.jsx';
import Building from './Building/index.jsx';
import Finished from './Finished/index.jsx';
import Error from './Error/index.jsx';
import { pages } from '../utils/constants';
import { SettingsProvider } from '../context/index.js';

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(pages.ERROR);
    const handleChangePage = (page) => {
        setCurrentPage(page);
    }
    return (
        <SettingsProvider>
            <div>
                {currentPage === pages.HOME && <HomePage handleChangePage={handleChangePage} />}
                {currentPage === pages.ABOUT && <AboutPage handleChangePage={handleChangePage} />}
                {currentPage === pages.BASE_INFO && <BaseInfoPage handleChangePage={handleChangePage} />}
                {currentPage === pages.BACK_FRIST && <BackFrist handleChangePage={handleChangePage} />}
                {currentPage === pages.FRONT_FIRST && <FrontFrist handleChangePage={handleChangePage} />}
                {currentPage === pages.DEPENDENCIES && <Dependencies handleChangePage={handleChangePage} />}
                {currentPage === pages.BUILDING && <Building handleChangePage={handleChangePage} />}
                {currentPage === pages.FINISHED && <Finished />}
                {currentPage === pages.ERROR && <Error handleChangePage={handleChangePage} />}
            </div>
        </SettingsProvider>
    )
}

export default MainPage