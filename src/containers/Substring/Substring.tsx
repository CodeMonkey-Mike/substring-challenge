// @ts-nocheck
import { useCallback, useRef, useState } from 'react';
import {
  Container,
  Content,
  Hint,
  Title,
  InputGroup,
  InputLabel,
  InputField,
  ButtonResult,
  Result,
} from './Style';

const getCommonSubstring = (m: string, n: string) => {
  // create table
  const strings = Array(n.length + 1)
    .fill(null)
    .map(() => {
      return Array(m.length + 1).fill(null);
    });
  let lg = 0; // length of string
  let h = 0; // horizontal
  let v = 0; // vertical
  for (let i = 1; i <= n.length; i++) {
    for (let k = 1; k <= m.length; k++) {
      if (m[k - 1] === n[i - 1]) {
        strings[i][k] = strings[i - 1][k - 1] + 1;
      } else {
        strings[i][k] = 0;
      }
      if (strings[i][k] > lg) {
        lg = strings[i][k];
        h = k;
        v = i;
      }
    }
  }
  if (lg === 0) {
    return;
  }
  let common = '';
  while (strings[v][h] > 0) {
    common = m[h - 1] + common;
    v -= 1;
    h -= 1;
  }
  return common;
};

export const Substring = () => {
  const [result, setResult] = useState('');
  const a = useRef(null);
  const b = useRef(null);
  const onGetResult = useCallback(() => {
    const st01 = a.current.value;
    const st02 = b.current.value;
    const rs = getCommonSubstring(st01, st02);
    setResult(rs);
  }, [a, b]);
  return (
    <Container>
      <Content>
        <Hint>
          Given two strings, determine if they share a common substring. A substring may be as small
          as one character.
          <br />
          Example:
          <br />
          String1 = "art"
          <br />
          String 2 = "ammo"
          <br />
          Both string share 'a', so return true;
          <br />
          Example 2:
          <br />
          String1 = "be"
          <br />
          String 2 = "cat" No characters are shared, so return false;
          <br />
          Bonus: Can you return the length of the longest substring shared by the two strings?
          <br />
          Example: S1 = "wonderful" S2 = "fulsome" Both words share "ful", so return 3
        </Hint>
        <Title>Please fill 2 inputs below to get the result</Title>

        <InputGroup>
          <InputLabel>String 01:</InputLabel>
          <InputField ref={a} name="a" type="text" />
        </InputGroup>
        <InputGroup>
          <InputLabel>String 02:</InputLabel>
          <InputField ref={b} name="b" type="text" />
        </InputGroup>
        <ButtonResult onClick={() => onGetResult()} color="default" variant="primary">
          Get result
        </ButtonResult>

        <Result
          rows={5}
          readOnly
          value={`Common Substring: ${result || 'No common substring'} \nLength: ${
            result?.length || 0
          }
                `}
        />
      </Content>
    </Container>
  );
};
