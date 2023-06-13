/** @jsx jsx */
import {useState,useContext} from 'react';
import { Button, Typography, FormControlLabel, Radio, Checkbox, RadioGroup } from '@mui/material';
import {ButtonContainer, Wrapper } from './style';
import { jsx } from '@emotion/react'
import { pages, HTTPLibs, backPattern, databaseLibs } from '../../utils/constants';
import { nanoid } from 'nanoid';
import Context from "../../context";


const BackFrist = ({handleChangePage}) => {
    const [projectData, setProjectData] = useContext(Context);

    const [httpLib, sethttpLib] = useState(projectData.httpLib?.value);
    const [pattern, setPattern] = useState(projectData.pattern?.value);
    const [database, setDatabase] = useState(projectData.database?.value);
    const [dbPLugin, setDbPlugin] = useState(projectData.dbPLugin?.value);
    const [configJest, setConfigJest] = useState(projectData.configJest); 


    const handleAdvance = () => {
        const databaseLib = databaseLibs.find(e => e.value === database);
        const chosedHttpLib= HTTPLibs.find(e => e.value === httpLib);
        const chosedDbPlugin = databaseLib?.availableDb?.find(e => e.value === dbPLugin)
        const newDependencies = [...projectData.dependencies];
        const depsNames = newDependencies.map(e => e.name);
        if(databaseLib && depsNames.indexOf(databaseLib.dependencyName) === -1) newDependencies.push({required: true, name: databaseLib.dependencyName});
        if(chosedDbPlugin && depsNames.indexOf(chosedDbPlugin.value) === -1) newDependencies.push({required: true, name: chosedDbPlugin.value});
        if(chosedHttpLib && depsNames.indexOf(chosedHttpLib.dependencyName) === -1) newDependencies.push({...chosedHttpLib, required: true, name: chosedHttpLib.dependencyName});
        if(configJest && depsNames.indexOf('jest') === -1) newDependencies.push({required: true, name: 'jest'});
        setProjectData({
            ...projectData,
            httpLib: HTTPLibs.find(e => e.value === httpLib),
            pattern: backPattern.find(e => e.value === pattern),
            database: databaseLib,
            dbPLugin: chosedDbPlugin,
            configJest,
            dependencies: newDependencies
        })
        handleChangePage(pages.DEPENDENCIES)
    }

    const handleSelectHttpLib = (_, value) => {
        sethttpLib(value)
    }
    const handleSelectPattern = (_, value) => {
        setPattern(value)
    }
    const handleSelectDatabase = (_, value) => {
        setDatabase(value);
        setDbPlugin();
    }
    const handleSelectDbplugin = (_, value) => {
        setDbPlugin(value);
    }
    return (
        <div css={Wrapper}>
            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Padrão de projeto</strong></Typography>
                <RadioGroup
                    row
                    value={pattern}
                    onChange={handleSelectPattern}
                >
                    {backPattern.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Chamadas HTTP</strong></Typography>
                <RadioGroup
                    row
                    value={httpLib}
                    onChange={handleSelectHttpLib}
                >
                    {HTTPLibs.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
            </div>

            <FormControlLabel
                control={<Checkbox checked={configJest} onChange={() => setConfigJest(!configJest)} />}
                label="Gostaria de fazer testes unitarios com jest"
            />

            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Acesso ao banco de dados</strong></Typography>

                <RadioGroup
                    row
                    value={database}
                    onChange={handleSelectDatabase}
                >
                    {databaseLibs.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
                {database && (<div>
                    <Typography variant="subtitle2" gutterBottom><strong>Banco de dados</strong></Typography>

                    <RadioGroup
                    row
                    value={dbPLugin}
                    onChange={handleSelectDbplugin}
                >
                    {databaseLibs.find(e => e.value === database).availableDb.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup></div>)}
            </div>

            <div css={ButtonContainer}>
                <Button variant='outlined' onClick={() => handleChangePage(pages.BASE_INFO)}>Voltar</Button>
                <Button variant='contained' onClick={() =>  handleAdvance()}>Continuar</Button>
            </div>
        </div>
    )
}

export default BackFrist;