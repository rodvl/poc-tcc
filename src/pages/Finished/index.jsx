/** @jsx jsx */
import { Typography } from '@mui/material';
import { Wrapper } from './style';
import { jsx } from '@emotion/react'



const Finished = () => {
    const {ipcRenderer} = require('electron');
    console.log(ipcRenderer);
    return (
        <div css={Wrapper}>
            <div>
                <Typography variant='h4' gutterBottom>Projeto Criado!</Typography>
                <Typography variant='body2' gutterBottom>
                    Obrigado por utilizar a ferramenta!
                </Typography>
            </div>
        </div>
    )
}

export default Finished;