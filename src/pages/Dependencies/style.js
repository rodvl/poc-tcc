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
`;

export const SearchBox = () => css`
    display: flex;
    gap: 16px;
    margin-top: 16px;
    .inputContainer {
        width: 50%;
    }
`;

export const DepList = () => css`
    display: flex;
    margin-top: 32px;
    > div { 
        width: calc(50% - 8px);
        max-width: calc(50% - 8px);
        overflow: auto;
        padding: 8px;
    }
    .searchResult {
        border-right: 1px solid #dedede;
        min-height: 300px;
        max-height: 300px;
    }
    .currentLibs {
        margin-left: 8px;
        min-height: 300px;
        max-height: 300px;
    }
    .emptyList {
        color: #71716F;
    }
`;

export const ListStyle = () => css`
    margin-top: 16px;
`;

export const ListItem = () => css`
    width: 344px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid #dedede;
    margin: 8px 0px;
    .textContainer {
        width: calc(70% - 8px);
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .tooltipContainer {
        width: calc(15% - 8px);
        display: flex;
        justify-content: center;
    }
    .buttonContainer {
        width: calc(15% - 8px);
        display: flex;
        justify-content: center;
    }
`;