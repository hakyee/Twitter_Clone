import { styled } from "styled-components";
import EditTweetForm from "../components/edit-tweet-form";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

export default function Edit() {
  return (
    <Wrapper>
      <EditTweetForm />
    </Wrapper>
  );
}
