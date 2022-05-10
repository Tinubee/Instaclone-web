import styled from "styled-components";

const SAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: #2c2c2c;
`;

const Img = styled.img`
  max-width: 100%;
`;

function Avatar({ url = "" }) {
  return <SAvatar>{url !== "" ? <Img src={url} /> : null}</SAvatar>;
}

export default Avatar;
