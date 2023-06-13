/** @jsx jsx */
import { Button, Typography } from '@mui/material';
import {ButtonContainer, TextContainer, Wrapper, ImageContainer} from './style';
import { jsx } from '@emotion/react'
import Logo from '../../assets/Logo.svg'
import { pages } from '../../utils/constants';


const HomePage = ({handleChangePage}) => {
    return (
        <div css={Wrapper()}>
            <div css={ImageContainer()}>
                <img src={Logo} />
            </div>
            <div css={TextContainer()}>
                <Typography variant='h3' gutterBottom>Inicializador de projeto</Typography>
                <Typography variant='body1'>Versão beta</Typography>
            </div>
            <div css={ButtonContainer()}>
                <Button variant='outlined' onClick={() => handleChangePage(pages.ABOUT)}>Sobre o projeto</Button>
                <Button variant='contained' onClick={() => handleChangePage(pages.BASE_INFO)}>Iniciar</Button>
            </div>
            <div>
                <Typography variant='caption'>Feito por Rodrigo Lapertosa</Typography>
            </div>
        </div>
    )
}

export default HomePage;