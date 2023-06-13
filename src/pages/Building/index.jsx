/** @jsx jsx */
import { useEffect, useContext } from 'react';
import { Typography } from '@mui/material';
import { Wrapper } from './style';
import { jsx } from '@emotion/react';
import loading from '../../assets/loading.gif';
import Context from "../../context";
import { pages } from '../../utils/constants';
import {executeCommand} from '../../utils/runner';
import {createFolder, npmInit, installDependencies, atomicPattern, csrPattern, createPrettierFile, createTypescriptFile, configRedux, configJest, configKnex, configSequelize} from '../../scripts/commum';


const Building = ({handleChangePage}) => {
    const [projectData, setProjectData] = useContext(Context);

    const handleSuccess = () => handleChangePage(pages.FINISHED)
    const handleError = (errorMsg) => {
        setProjectData({...projectData, error: errorMsg})
        handleChangePage(pages.ERROR)
    }

    useEffect(() => {
        if(projectData){
            const pattern = projectData.pattern;
            let patternScript = '';
            if (pattern) {
                if(pattern.value === 'atomic')
                    patternScript = atomicPattern();
                if(pattern.value === 'csr')
                    patternScript = csrPattern();
            }
            const prettier = projectData.configPrettier ? createPrettierFile() : "";
            const typescript = projectData.useTypescript ? createTypescriptFile() : "";
            const redux = projectData.configRedux ? configRedux() : ''
            const jest = projectData.configJest ? configJest() : ''
            const knex = projectData.database && projectData.database.value === "knex" ? configKnex(projectData.dbPLugin?.value) : '';
            const sequelize = projectData.database && projectData.database.value === "sequelize" ? configSequelize() : '';

            const commands = `${createFolder(projectData.path, projectData.name)} && ${npmInit()} && ${installDependencies(projectData.dependencies)} ${patternScript} ${prettier} ${typescript} ${redux} ${jest} ${knex} ${sequelize}`
            executeCommand(commands, handleSuccess, handleError);
        }
    }, [])
    return (
        <div css={Wrapper}>
            <div>
                <img src={loading}/>
                <Typography variant='h6' gutterBottom>Construindo seu projeto aguarde!</Typography>
                <Typography variant='subtitle2' gutterBottom>Isso pode demorar alguns minutos.</Typography>
            </div>
        </div>
    )
}

export default Building;