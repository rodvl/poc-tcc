import { css } from '@emotion/react'

export const ButtonContainer = () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 32px;
    gap: 24px;
    > button {
        width: 250px
    }
`


export const Wrapper = () => css`
    margin: 48px;
    text-align: center;
`;