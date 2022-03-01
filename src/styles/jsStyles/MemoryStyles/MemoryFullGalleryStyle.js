import styled from "styled-components"

export const MemoryFullGalleryStyleCom = styled.div`
    .margin-container{
        width: 100%;
        height: 23vh;
    }
    .contents-container-full{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .grid-wrap{
        display: grid;
        grid-template-columns: repeat(3, 20%);
        gap: 5%;
        // width: 1400px;
        justify-content: center;
        margin: 5% auto;
    }
`