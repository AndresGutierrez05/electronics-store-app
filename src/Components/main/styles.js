import styled from 'styled-components';

export const Header = styled.header`
    font-weight: 900;
    padding:15px;
    display: flex;
    justify-content: space-between;

    * {
        align-content: center;
    }
`;

export const MainContent = styled.main`
    padding:20px;
    background-color: #D3D3D3;
    color: black;
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
        padding:2px;
    }
`;