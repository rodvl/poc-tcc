/** @jsx jsx */
import { Typography } from '@mui/material';
import { Wrapper } from './style';
import { jsx } from '@emotion/react'

const Building = ({handleChangePage}) => {
    return (
        <div css={Wrapper}>
            <div>
                <Typography variant='h6' gutterBottom>Construindo seu projeto aguarde!</Typography>
                <Typography variant='subtitle2' gutterBottom>Isso pode demorar alguns minutos.</Typography>
            </div>
        </div>
    )
}

export default Building;