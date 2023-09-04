import { RouterProvider } from 'react-router-dom';
import routerConfig from './router';
import { styled } from 'styled-components';
function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: start;
    color: #bf4f74;
  `;
  const Button = styled.button<{ $primary?: boolean }>`
    background: ${props => (props.$primary ? '#BF4F74' : 'white')};
    color: ${props => (props.$primary ? 'white' : '#BF4F74')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em
    border: 2px solid #BF4F74
    border-radius: 3px;
  `;
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;
  const ReverseButton = (props: any) => <Button {...props} children={props.children.split('').reverse()} />;
  return (
    <>
      <RouterProvider router={routerConfig}></RouterProvider>
      <Title>黄臭</Title>
      <Button>HUANG CHOU</Button>
      <Button $primary>黄臭</Button>
      <TomatoButton>Tomato黄</TomatoButton>
      <Button as="div">HH</Button>
      <ReverseButton>你好黄臭，很高兴认识你，不知道你过得怎么样？</ReverseButton>
    </>
  );
}

export default App;
