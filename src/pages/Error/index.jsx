/** @jsx jsx */
import { useContext } from 'react';
import { Button, Typography } from '@mui/material';
import {ButtonContainer, Wrapper } from './style';
import { jsx } from '@emotion/react'
import { pages } from '../../utils/constants';
import CloseIcon from '@mui/icons-material/Close';
import Context from "../../context";

const BaseInfo = ({handleChangePage}) => {
    const [projectData] = useContext(Context);

    return (
        <div css={Wrapper}>
            <CloseIcon color="error" fontSize='large'/>
            <div>
                <Typography variant='h6' gutterBottom>Ops! Algo deu errado.</Typography>
                <Typography variant='subtitle2' gutterBottom>Tivemos um problema enquanto criavamos o projeto. Tente novamente!</Typography>
                <Typography variant='subtitle2' gutterBottom>{projectData.error}</Typography>
            </div>
            <div css={ButtonContainer}>
                <Button variant='outlined' onClick={() => handleChangePage(pages.DEPENDENCIES)}>Rever configurações</Button>
                <Button variant='contained' onClick={() => handleChangePage(pages.BUILDING)}>Tentar novamente</Button>
            </div>
        </div>
    )
}

export default BaseInfo;