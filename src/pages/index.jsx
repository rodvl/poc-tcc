import React, {useState} from 'react';
import HomePage from './HomePage/index.jsx'
import AboutPage from './About/index.jsx';
import BaseInfoPage from './BaseInfo/index.jsx';
import BackFrist from './BackFrist/index.jsx';
import FrontFrist from './FrontFrist/index.jsx';
import { pages } from '../utils/constants';
import { SettingsProvider } from '../context/index.js';

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState(pages.FRONT_FIRST);
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
            </div>
        </SettingsProvider>
    )
}

export default MainPage