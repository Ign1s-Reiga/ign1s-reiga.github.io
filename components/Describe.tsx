import styled from '@emotion/styled'
import { css } from '@emotion/react';
import { Typography } from '@mui/material'

const styles = {
  left: css`
    margin-right: auto;
    flex-direction: row-reverse;
    .MuiTypography-body1 {
      font-size: 1.3rem;
      margin: auto auto auto 2rem;
      white-space: pre-line;
      justify-self: self-start;
    }
    .MuiTypography-h1 {
      white-space: nowrap;
      margin-left: 2rem;
    }
  `,
  right: css`
    margin-left: auto;
    flex-direction: row;
    .MuiTypography-body1 {
      font-size: 1.3rem;
      white-space: break-spaces;
      margin: auto 2rem;
    }
    .MuiTypography-h1 {
      white-space: nowrap;
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
`

const Describe = (props: {side: string, title: string, desc: string}) => {
  return (
    <DescribeContainer css={props.side === 'left' ? styles.left : styles.right}>
      <Typography variant='h1'>{props.title}</Typography>
      <Typography variant='body1'>{props.desc}</Typography>
    </DescribeContainer>
  );
};
export default Describe;
