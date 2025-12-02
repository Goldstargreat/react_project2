import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: purple;
`;
const Block = styled.div`
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 1em;
    background-color: ${(props) => props.backgroundColor};
    font-size: 2rem;
    font-weight: Bold;
    text-align: center;
    color: white;
`;

const blockItems = [
    {
        label: "Block 1",
        padding: "1rem",
        backgroundColor: "olivedrab"
    },
    {
        label: "Block 2",
        padding: "1rem",
        backgroundColor: "navy"
    },
    {
        label: "Block 3",
        padding: "1rem",
        backgroundColor: "skyblue"
    }
];

function Blocks(props){
    return(
      <Wrapper>
          {blockItems.map((blockItems) => {
                    return(
                        <Block
                            padding={blockItems.padding}
                            backgroundColor={blockItems.backgroundColor}
                        >
                            {blockItems.label}
                        </Block>
                    );
                })
             }
      </Wrapper>
    );
}

export default Blocks;