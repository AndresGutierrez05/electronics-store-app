import styled from 'styled-components';

export const Wrapper = styled.section`
    color: black;
    width: 80%;

    @media (max-width: 800px) {
        width:100%;
    }

    > div {
        margin: 10px;
        background-color:white;
        padding: 5px;
        display: flex;
        justify-content:space-between;
        border: 1px solid #BF4F74;

        img {
            width:100%;
            height:100%;
            max-width:150px;
            max-height:150px;
            align-self: center;

            @media (max-width: 800px) {
                max-width:80px;
                max-height:80px;
            }
        }
        
        div{
            display:inline;
            padding-right:5px;
        }

        div:nth-child(1) {
            display:flex;
            justify-content:center;
            width:10%;
        }

        div:nth-child(2) {

            span{
                background-color:#BF4F74;
                margin-left: 5px;
                padding:2px 5px 2px 5px;
                color:white;
            }

            p:nth-child(1){
                font-weight:800;
            }
            p:nth-child(2){
                color: #BF4F74;
            }
            width:80%;
        }

        div:nth-child(3) {
            width:10%;
            display:grid;
            justify-content:center;
            font-weight:600;
            
            div {
                display: inline;
                
                input {
                    width: 100%;
                    height: 100%;
                }
            }

            p:nth-child(3){
                color:#BF4F74;
            }
        }
    }
`;