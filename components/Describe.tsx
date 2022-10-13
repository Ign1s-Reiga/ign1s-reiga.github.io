import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Typography } from '@mui/material';

const styles = {
  left: css`
    margin-right: auto;
    flex-direction: row-reverse;
    .MuiTypography-body1 {
      font-size: 1.3rem;
      margin: auto auto auto 2rem;
      white-space: pre-line;
      justify-self: self-start;
      @media (max-height: 900px) {
        font-size: 1.2rem;
      }
      @media (max-height: 880px) {
        font-size: 1.1rem;
      }
    }
    .MuiTypography-h1 {
      white-space: nowrap;
      margin-left: 2rem;
      @media (max-height: 940px) {
        font-size: 4.8rem;
      }
    }
  `,
  right: css`
    margin-left: auto;
    flex-direction: row;
    .MuiTypography-body1 {
      font-size: 1.3rem;
      white-space: break-spaces;
      margin: auto 2rem;
      @media (max-height: 900px) {
        font-size: 1.2rem;
      }
      @media (max-height: 880px) {
        font-size: 1.1rem;
      }
    }
    .MuiTypography-h1 {
      white-space: nowrap;
      @media (max-height: 940px) {
        font-size: 4.8rem;
      }
    }
  `
};

const DescribeContainer = styled.div`
  border: 2px solid #2d2d2d;
  border-radius: 45px;
  margin: 1.5rem 3rem;
  padding: 2rem 3rem;
  height: 25%;
  width: 75%;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  @media (max-width: 1100px) {
    margin: 1.5rem auto;
  }
`;

const Describe = (props: {side: string, title: string, desc: string}) => {
  return (
    <DescribeContainer css={props.side === 'left' ? styles.left : styles.right}>
      <Typography variant='h1'>{props.title}</Typography>
      <Typography variant='body1'>{props.desc}</Typography>
    </DescribeContainer>
  );
};
export default Describe;
