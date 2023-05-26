/** @jsx jsx */
import { useContext, useState } from 'react';
import { Button, TextField, Typography, Switch, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import {ButtonContainer, Wrapper, FrameworkSection, SectionStyle } from './style';
import { jsx } from '@emotion/react'
import { pages, FrontendFrameworks, BackendFrameworks, libNames } from '../../utils/constants';
import Context from "../../context";


const BaseInfoPage = ({handleChangePage}) => {
    const [projectData, setProjectData] = useContext(Context);
    const [projectName, setProjectName] = useState(projectData.name);
    const [isBackend, setIsBackend] = useState(projectData.isBackend);
    const [selectedFramework, setSelectedFramework] = useState(projectData.framework);
    const [configEslint, setConfigEslint] = useState(projectData.configEslint);
    const [configPrettier, setConfigPrettier] = useState(projectData.configPrettier);
    const [useTypescript, setUseTypescript] = useState(projectData.useTypescript);


    const handleAdvance = () => {
        const frameworkData = isBackend ? BackendFrameworks.find(e => e.value === selectedFramework) : FrontendFrameworks.find(e => e.value === selectedFramework)
        const dependencies = frameworkData.coDependency;
        dependencies.push({name: frameworkData.dependencyName, required: true});
        if(configEslint) dependencies.push({name: libNames.eslint, required: true});
        if(configPrettier) dependencies.push({name: libNames.prettier, required: true});
        if(useTypescript) dependencies.push({name: libNames.typescript, required: true});

        setProjectData({
            ...projectData,
            name: projectName,
            isBackend,
            framework: selectedFramework,
            configEslint,
            configPrettier,
            useTypescript,
            dependencies
        })
        handleChangePage(isBackend ? pages.BACK_FRIST : pages.DEPENDENCIES);
    }

    const handleSelectFramework = (_, value) => {
        setSelectedFramework(value)
    }
    const handleChangeFinality = () => {
        setIsBackend(!isBackend);
        setSelectedFramework('');
    }

    const FrameworkRadio = (Frameworks) => {
        return (
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={selectedFramework}
                onChange={handleSelectFramework}
            >
                {Frameworks.map(e =>  <FormControlLabel value={e.value} control={<Radio />} label={e.label} />)}
            </RadioGroup>
        )
    }

    return (
        <div css={Wrapper}>
            <div css={SectionStyle}>
                <Typography variant='h4' gutterBottom>Vamos começar!</Typography>
            </div>
            <div css={SectionStyle}>
                <div css={SectionStyle}>
                    <TextField 
                        id='name' 
                        value={projectName}
                        onChange={(e) => {
                            const newValue = e.target.value.toLowerCase().replace(/[&$+,\/:;=?@#  ><\[\]\(\){}|\^%]/g,'');
                            setProjectName(newValue)
                        }}
                        required
                        label="Nome do projeto"
                        fullWidth
                    />
                </div>
                <div css={SectionStyle}>
                    <Typography variant="subtitle1"><strong>Qual a finalidade?</strong></Typography>
                    <div css={FrameworkSection}>
                        <Typography variant="subtitle2">Frontend</Typography>
                        <Switch checked={isBackend} onChange={handleChangeFinality}/>
                        <Typography variant="subtitle2">Backend</Typography>
                    </div>
                </div>
                <div css={SectionStyle}>
                    <Typography variant="subtitle1"><strong>Selecione o Framework desejado</strong></Typography>
                    {FrameworkRadio(isBackend ? BackendFrameworks : FrontendFrameworks)}
                </div>
                <div css={SectionStyle}>
                    <Typography variant="subtitle1"><strong>Configurações adicionais</strong></Typography>
                    <FormControlLabel
                        control={<Checkbox checked={configEslint} onChange={() => setConfigEslint(!configEslint)} />}
                        label="Configurar Eslint"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={configPrettier} onChange={() => setConfigPrettier(!configPrettier)} />}
                        label="Configurar Prettier"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={useTypescript} onChange={() => setUseTypescript(!useTypescript)} />}
                        label="Utilizar Typescript"
                    />  
                </div>
            </div>
            <div css={ButtonContainer}>
                <Button variant='outlined' onClick={() => handleChangePage(pages.HOME)}>Voltar</Button>
                <Button variant='contained' onClick={() => handleAdvance()} disabled={!projectName || !selectedFramework}>Continuar</Button>
            </div>
        </div>
    )
}

export default BaseInfoPage;