import { Button } from 'src/atoms';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 700px;
  padding: var(--space-3);
  border: 1px solid var(--dark-grey);
  margin-top: var(--space-5);
  margin-bottom: var(--space-5);
`;

export const Hint = styled.pre`
  padding: var(--space-3);
  color: var(--dark-grey);
  font-style: italic;
  font-size: var(--text-sm);
  white-space: pre-wrap;
`;

export const Title = styled.h2`
  color: var(--blue);
  font-size: var(--text-base);
`;

export const InputGroup = styled.div`
  margin-bottom: var(--space-3);
  margin-top: var(--space-3);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InputLabel = styled.label`
  width: 20%;
  font-weight: bold;
`;
export const InputField = styled.input`
  padding: var(--space-2);
  color: var(--black);
  width: 80%;
`;

export const ButtonResult = styled(Button)`
  background-color: var(--blue);
  padding: var(--space-3);
  color: var(--white);
  width: 80% !important;
  margin-left: 20%;
  cursor: pointer;
`;

export const Result = styled.textarea`
  background-color: var(--light-grey);
  padding: var(--space-3);
  border: 1px solid var(--dark-grey);
  color: var(--black);
  width: 100%;
  margin-top: var(--space-3);
  font-size: var(--text-base);
`;
