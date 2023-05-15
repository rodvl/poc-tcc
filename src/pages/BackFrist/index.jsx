/** @jsx jsx */
import { Button, Typography } from '@mui/material';
import {ButtonContainer, Wrapper } from './style';
import { jsx } from '@emotion/react'
import { pages } from '../../utils/constants';


const BackFrist = ({handleChangePage}) => {
    return (
        <div css={Wrapper}>
            <Typography variant="subtitle1" gutterBottom><strong>Padrão de projeto</strong></Typography>

            <Typography variant="subtitle1" gutterBottom><strong>Acesso ao banco de dados</strong></Typography>


            <div css={ButtonContainer}>
                <Button variant='contained' onClick={() => handleChangePage(pages.BASE_INFO)}>Voltar</Button>
            </div>
        </div>
    )
}

export default BackFrist;