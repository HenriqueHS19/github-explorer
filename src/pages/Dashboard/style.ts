import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface Props {
    isError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    margin-top: 80px;
    margin-bottom: 40px;
`;

export const Form = styled.form<Props>`
    max-width: 700px;
    display: flex;
    align-items: center;

    input {
        flex: 1;
        height: 70px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        transition: border .4s;

        ${ props => props.isError && css`
            border-width: 2px;
            border-style: solid;
            border-color: #E00326;
            border-right: 0;
        `}
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
        border: 0;
        border-radius: 0 5px 5px 0;
        transition: background-color .4s;
    }
    button:hover {
        background: ${shade(0.2, '#04d361')};
    }
`;

export const Error = styled.div<Props>`
    font-size: 18px;
    color: #E00326;
    margin-top: 15px;
    opacity: 0;
    transition: opacity .4s;

    ${ props => props.isError && css`
        opacity: 1;
    `}
`;

export const Repositories = styled.div`
    max-width: 700px;
    margin-top: 80px;

    a {
        width: 100%;
        background: #fff;
        border-radius: 5px;
        display: block;
        padding: 25px;
        text-decoration: none;
        color: #3a3a3a;
        transition: transform .4s;

        display: flex;
        align-items: center;

        img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 5px;
            }
        }

        svg {
            margin-left: auto;
            color: #3a3a3a;
        }
    }

    a:hover {
        transform: translateX(20px);
    }

    a + a {
        margin-top: 20px;
    }
`;