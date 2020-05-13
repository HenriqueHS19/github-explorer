import styled from 'styled-components';

export const Header = styled.header`
    max-width: 980px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        font-size: 18px;
        font-weight: 500;
        display: flex;
        align-items: center;
        transition: color .4s;

        &:hover {
            color: #3a3a3a;
        }
        &:hover > svg {
            color: #3a3a3a;
        }

        svg {
            margin-right: 5px;
            color: #a8a8b3;
            transition: color .4s;
        }
    }
`;

export const RepositoryInfo = styled.section`
    max-width: 980px;
    display: flex;
    flex-direction: column;
    margin-top: 80px;

    div {
        display: flex;
        align-items: center;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }

        div {
            display: inline;
            margin-left: 20px;

            strong {
                font-size: 26px;
                color: #3a3a3a;
            }

            p {
                color: #a8a8b3;
                font-size: 20px;
                margin-top: 5px;
            }
        }
    }

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        margin-top: 40px;

        li {
            margin-right: 80px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 20px;
                color: #6c6c80;
                margin-top: 5px;
            }
        }
    }
`;

export const Issues = styled.section`
    max-width: 980px;
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

        div {
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