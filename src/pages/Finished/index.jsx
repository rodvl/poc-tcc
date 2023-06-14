/** @jsx jsx */
import { useContext } from 'react';
import Context from "../../context";
import { Typography } from '@mui/material';
import { Wrapper } from './style';
import { jsx } from '@emotion/react'



const Finished = () => {
    const [projectData] = useContext(Context);

    return (
        <div css={Wrapper}>
            <div>
                <Typography variant='h4' gutterBottom>Projeto Criado!</Typography>
                <Typography variant='subtitle2' gutterBottom>Para executar o projeto execute: {projectData.isBackend ? "npx nodemon --exec babel-node src/server.js" : "npx react-scripts start"}</Typography>
                <Typography variant='body2' gutterBottom>
                    Obrigado por utilizar a ferramenta!
                </Typography>
            </div>
        </div>
    )
}

export default Finished;