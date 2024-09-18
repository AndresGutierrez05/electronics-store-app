import styled from 'styled-components';

export const BotonModal = styled.div`
    position: fixed;
    right:20px;
    bottom: 20px;
    width: 200px;
    height: 50px;
    border: 2px dashed black;
    cursor: pointer;

    @media (max-width: 800px) {
        width:150px;
        right:0;
        bottom: 0;
    }

    :hover{
        color: #BF4F74;
        background-color: white;
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        color: white;
        display:flex;
        justify-content:space-around;
        background-color:  #BF4F74;

        h3 {
            margin-top: 10px;
        }

        svg{
            align-self: center;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);

    > div{
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        height: 80%;

        h1{
            color: #BF4F74;
        }

        > h1 {
            float:right;
            cursor: pointer;
        }
    }
`;

export const Main = styled.div`
    width:100%;
    height:90%;
    display: flex;
    justify-content: space-around;
    text-align: center;

    @media (max-width: 800px) {
        display:inline;

        div:nth-child(1){
            height: 70%;

        }
        
        div {
            width:100% !important;
        }
    }

    div:nth-child(1){
        width:70%;
        border-right: 1px solid lightgray;
        overflow-y: scroll;
        
        table{
            width: 100%;
            max-height: 100%;

            th{
                color: gray;
            }
            th, td{
                padding:10px;
                border-bottom: 1px solid lightgray;

                @media (max-width: 800px) {
                    padding:1px;
                    font-size: smaller;
                }

                img{
                    width:50px;
                    height:50px;
                }
            }
            td:nth-child(1){
                display: flex;
                justify-content: space-evenly;

                div{
                    width:100%;
                }
            }
            td:nth-child(5){
                color:#BF4F74;
                cursor: pointer;
            }
        }
    }

    div:nth-child(2){
        width:30%;

        table{
            width:100%;

            td{
                padding:20px;
                border-bottom: 1px solid lightgray;

                @media (max-width: 800px) {
                    padding:10px;
                    font-size: smaller;
                }
            }
        }

        button{
            width:100%;
            background-color: #BF4F74;
            padding: 10px;
            color: white;
            font-size:larger;
            border: none;
            cursor: pointer;

            :hover{
                background-color: white;
                color: #BF4F74;
            }
        }
    }
`;