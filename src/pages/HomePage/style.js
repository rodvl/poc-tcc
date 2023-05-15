import { css } from '@emotion/react'

export const ButtonContainer = () => css`
    display: flex;
    gap: 24px;
    justify-content: center;
    width: 100%;
    margin-bottom: 16px;
    > button {
        width: 250px
    }
`

export const TextContainer = () => css`
    text-align: center;
    margin: 24px 0px;
`;

export const Wrapper = () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
`;

export const ImageContainer = () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    img {
        width: 100px;
        height: 100px;
    }
`;