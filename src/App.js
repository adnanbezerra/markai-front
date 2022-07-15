import { useState } from "react";
import styled from "styled-components";

// Import the required modules
import MarkdownIt from "markdown-it";

import "./App.css";

function App() {
  let [markdownText, setMarkDownText] = useState("");

  let [renderedHTML, setRenderedHTML] = useState("");

  const [exibition, setExibition] = useState(false);

  function handleTextInput(e) {
    setMarkDownText(e.target.value);

    let md = new MarkdownIt();

    let renderedHTML = md.render(e.target.value);

    setRenderedHTML(renderedHTML);
  }

  return (
    <Container>
      <Content>
        {!exibition ? (
          <Input>
            <Controller>
              <p>Input</p>
              <p onClick={() => setExibition(true)}>
                <ion-icon name="eye-outline"></ion-icon>
              </p>
            </Controller>
            <div>
              <textarea
                className="form-control markdown-textarea"
                rows={20}
                value={markdownText}
                onChange={handleTextInput}
              ></textarea>
            </div>
          </Input>
        ) : (
          <Input>
            <Controller>
              <p>Output</p>
              <p onClick={() => setExibition(false)}>
                <ion-icon name="eye-outline"></ion-icon>
              </p>
            </Controller>
            <Output dangerouslySetInnerHTML={{ __html: renderedHTML }}></Output>
          </Input>
        )}
      </Content>
    </Container>
  );
}

export default App;

const Controller = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #c7803d;
`;

const Output = styled.div`
  width: 100%;
  height: 500px;
  background-color: #b6b27c;
  margin-top: -20px;
`;

const Input = styled.div`
  background-color: #e3e2d9;
  overflow-x: hidden;

  textarea {
    width: 100%;
    height: 500px;
    background-color: #b6b27c;
    font-size: 20px;
    border: none;
  }
`;

const Content = styled.div`
  width: 80vw;
  height: 80vh;
  min-width: 300px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #b6a5a5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
