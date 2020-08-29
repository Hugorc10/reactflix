import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  padding-top: 0;
  padding-bottom: 0;
  border: 2px solid;
  border-radius: 10px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  display: inline-block;
  transition: opacity .3s;
  height: 197px;
  width: 298px;

  &:hover,
  &:focus {
    opacity: .5s;
  }
`;
