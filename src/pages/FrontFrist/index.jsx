/** @jsx jsx */
import {useState, useContext} from 'react';
import {ButtonContainer, Wrapper } from './style';
import { Button, Typography, FormControlLabel, Radio, Checkbox, RadioGroup } from '@mui/material';
import { jsx } from '@emotion/react'
import { pages, StyleLibs, ComponentLibs, HTTPLibs, frontPattern, IconLibs } from '../../utils/constants';
import { nanoid } from 'nanoid';
import Context from "../../context";

const FrontFrist = ({handleChangePage}) => {
    const [projectData, setProjectData] = useContext(Context);

    const [configRedux, setConfigRedux] = useState(projectData.configRedux);
    const [styleLib, setStyleLib] = useState(projectData.styleLib?.value);
    const [componentLib, setComponentLib] = useState(projectData.componentLib?.value);
    const [httpLib, sethttpLib] = useState(projectData.httpLib?.value);
    const [pattern, setPattern] = useState(projectData.pattern?.value);
    const [iconLib, setIconLib] = useState(projectData.iconLib?.value);

    const handleAdvance = () => {
        const chosedStyleLib = StyleLibs.find(e => e.value === styleLib);
        const chosedComponentLib= ComponentLibs.find(e => e.value === componentLib);
        const chosedHttpLib= HTTPLibs.find(e => e.value === httpLib);
        const chosedIconLib= IconLibs.find(e => e.value === iconLib);
        const newDependencies = [...projectData.dependencies];
        const depsNames = newDependencies.map(e => e.name);
        if(chosedStyleLib && depsNames.indexOf(chosedStyleLib.dependencyName) === -1) newDependencies.push({...chosedStyleLib, required: true, name: chosedStyleLib.dependencyName});
        if(chosedComponentLib && depsNames.indexOf(chosedComponentLib.dependencyName) === -1) newDependencies.push({...chosedComponentLib, required: true, name: chosedComponentLib.dependencyName});
        if(chosedHttpLib && depsNames.indexOf(chosedHttpLib.dependencyName) === -1) newDependencies.push({...chosedHttpLib, required: true, name: chosedHttpLib.dependencyName});
        if(chosedIconLib && depsNames.indexOf(chosedIconLib.dependencyName) === -1) newDependencies.push({...chosedIconLib, required: true, name: chosedIconLib.dependencyName});
        if(configRedux && depsNames.indexOf('@reduxjs/toolkit') === -1) newDependencies.push({ required: true, name: '@reduxjs/toolkit'});
        setProjectData({
            ...projectData,
            styleLib: chosedStyleLib,
            componentLib: chosedComponentLib,
            httpLib: chosedHttpLib,
            pattern: frontPattern.find(e => e.value === pattern),
            iconLib: chosedIconLib,
            configRedux,
            dependencies: newDependencies
        })
        handleChangePage(pages.DEPENDENCIES)
    }

    const handleSelectStyleLib = (_, value) => {
        setStyleLib(value)
    }
    const handleSelectComponentLib = (_, value) => {
        setComponentLib(value)
    }
    const handleSelectHttpLib = (_, value) => {
        sethttpLib(value)
    }
    const handleSelectPattern = (_, value) => {
        setPattern(value)
    }
    const handleSelectIconLib = (_, value) => {
        setIconLib(value)
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
                    {frontPattern.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
            </div>

            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Estilização</strong></Typography>
                <RadioGroup
                    row
                    value={styleLib}
                    onChange={handleSelectStyleLib}
                >
                    {StyleLibs.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
            </div>
            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Biblioteca de componentes</strong></Typography>
                <RadioGroup
                    row
                    value={componentLib}
                    onChange={handleSelectComponentLib}
                >
                    {ComponentLibs.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
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
            <div>
                <Typography variant="subtitle1" gutterBottom><strong>Icones</strong></Typography>
                <RadioGroup
                    row
                    value={iconLib}
                    onChange={handleSelectIconLib}
                >
                    {IconLibs.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} key={nanoid()} />)}
                </RadioGroup>
            </div>

            <FormControlLabel
                control={<Checkbox checked={configRedux} onChange={() => setConfigRedux(!configRedux)} />}
                label="Gostaria de configurar o Redux para aplicação"
            />  

            <div css={ButtonContainer}>
                <Button variant='outlined' onClick={() => handleChangePage(pages.BASE_INFO)}>Voltar</Button>
                <Button variant='contained' onClick={() =>  handleAdvance()}>Continuar</Button>
            </div>
        </div>
    )
}

export default FrontFrist;