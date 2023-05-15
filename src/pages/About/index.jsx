/** @jsx jsx */
import { Button, Typography } from '@mui/material';
import {ButtonContainer, Wrapper } from './style';
import { jsx } from '@emotion/react'
import { pages } from '../../utils/constants';


const BaseInfo = ({handleChangePage}) => {
    return (
        <div css={Wrapper}>
            <div>
                <Typography variant='h4' gutterBottom>Sobre o projeto</Typography>
                <Typography variant='body2' gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque erat nec tincidunt tincidunt. Maecenas a sollicitudin lacus. Vivamus sit amet ante in erat posuere tempus et id augue. Nulla suscipit mi eu ullamcorper congue. Donec posuere mattis magna eget faucibus. Integer fringilla est in magna lobortis vehicula. Vivamus vitae consequat sapien, a maximus erat. Vestibulum scelerisque vitae lectus in tincidunt. Proin feugiat elit nec tellus maximus, ut tristique libero ornare. Integer pellentesque tempor nibh vitae elementum. Duis non dui blandit felis tincidunt volutpat. Suspendisse molestie risus eu consequat viverra. Sed a urna eros.
                    Nam elementum convallis augue ac mollis. Pellentesque pellentesque leo ut semper ornare. Ut ac mattis velit, vitae feugiat ipsum. Nullam pulvinar elementum commodo. Quisque rutrum condimentum dignissim. Sed ultricies mollis metus quis lacinia. Morbi pulvinar venenatis pharetra. Suspendisse egestas, massa quis imperdiet dignissim, ante ante pulvinar nisl, non porta velit tortor sit amet nibh. Phasellus in bibendum odio.
                </Typography>
            </div>
            <div css={ButtonContainer}>
                <Button variant='contained' onClick={() => handleChangePage(pages.HOME)}>Voltar</Button>
            </div>
        </div>
    )
}

export default BaseInfo;