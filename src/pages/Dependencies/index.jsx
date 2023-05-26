/** @jsx jsx */
import React, {useState, useContext} from 'react';
import { Button, Typography, TextField, IconButton, Tooltip } from '@mui/material';
import {ButtonContainer, Wrapper, SearchBox, DepList, ListItem, ListStyle } from './style';
import { jsx } from '@emotion/react'
import { pages } from '../../utils/constants';
import axios from 'axios';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import { nanoid } from 'nanoid';
import Context from "../../context";

const Dependencies = ({handleChangePage}) => {
    const [projectData] = useContext(Context);
    const [searchParam, setSearchParam] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [selectedLibs, setSelectedLibs] = useState(projectData.dependencies);
    const [loading, setLoading] = useState(false);
    const [alreadySearched, setAlreadySearched] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setAlreadySearched(true);
        const result = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchParam}`);
        if (result && result.data){
            const packages = result.data.objects.slice(0,10).map(e => e.package)
            setSearchResult(packages);
            console.log(packages);
        }
        setLoading(false);
    }
    
    const handleAdd = (pack) => {
        const libAlreadyAdded = selectedLibs.find(e => e.name === pack.name);
        if(!libAlreadyAdded){
            const newSelected = [...selectedLibs];
            newSelected.push(pack);
            setSelectedLibs(newSelected);
            const newSearchResult = [...searchResult].filter(e => e.name !== pack.name);
            setSearchResult(newSearchResult);
        }
    }
    const handleRemove = (pack) => {
        const newSelected = [...selectedLibs].filter(e => e.name !== pack.name);
        setSelectedLibs(newSelected);
        const libAlreadyOnList = searchResult.find(e => e.name === pack.name);
        if(!libAlreadyOnList){
            const newSearchResult = [...searchResult];
            newSearchResult.push(pack);
            setSearchResult(newSearchResult);
        }
    }

    const itemList = (item, isAdd) => {
        return (
            <div css={ListItem}>
                <div className='textContainer'>
                    {item.name}
                </div>
                {!item.required && <><div className='tooltipContainer'>
                    <Tooltip title={<><strong>{item.name}:</strong><br/><span>{item.description}</span></>}>
                        <HelpOutlineIcon color="#71716F"/>
                    </Tooltip>
                </div>
                <div className='buttonContainer'>
                    <IconButton onClick={() =>isAdd ? handleAdd(item) : handleRemove(item)}>{isAdd ? <Add color='primary' /> : <Delete color='error' />}</IconButton>
                </div>
                </>}
            </div>
        )
    }

    const List = (items, isAdd) => {
        return (
            <div css={ListStyle}>
                {items.map(e => (
                    <div key={nanoid()}>
                        {itemList(e, isAdd)}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div css={Wrapper}>
            <Typography variant="subtitle1" gutterBottom><strong>Dependencias</strong></Typography>
            
            <div css={SearchBox}>
                <div className='inputContainer'>
                    <TextField 
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        label="Pesquisa no NPM"
                        fullWidth
                    />
                </div>
                <Button variant='outlined' onClick={handleSearch} disabled={loading}>Pesquisar</Button>
            </div>

            <div css={DepList}>
                <div className='searchResult'>
                    <Typography variant="subtitle2" gutterBottom align="center"><strong>Resultado</strong></Typography>
                    {
                        searchResult.length > 0 ? 
                            List(searchResult, true) 
                        :
                            <div className="emptyList">
                                <Typography variant="body2" align='center'>{alreadySearched ? 'Não encontramos nenhuma correspondencia no npm' : 'Pesquise para encontrar libs para seu projeto :)'}</Typography>
                            </div>
                    }
                </div>
                <div className='currentLibs'>
                    <Typography variant="subtitle2" gutterBottom align="center"><strong>Bibliotecas escolhidas</strong></Typography>
                    {
                        selectedLibs.length > 0 ? 
                            List(selectedLibs, false)
                        :
                            <div className="emptyList">
                                <Typography variant="body2" align='center'>{'Nenhum pacote adicionado :('}</Typography>
                            </div>
                    }
                </div>
            </div>

            <div css={ButtonContainer}>
                <Button variant='outlined' onClick={() => handleChangePage(projectData.isBackend ? pages.BACK_FRIST : pages.FRONT_FIRST)}>Voltar</Button>
                <Button variant='contained' onClick={() => handleChangePage(pages.BUILDING)}>Inicializar!</Button>
            </div>
        </div>
    )
}

export default Dependencies;