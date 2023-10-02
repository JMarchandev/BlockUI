import BUIChatBubble from "../components/chatBubble";
import { BUITitle as Title } from "../components/typography/title";

interface Props {}

export const Chat = ({}: Props) => {
  return (
    <>
      <Title as="h3" className="bold-600 font-size-28 line-height-36 mb-5">
        <span className="text-bui-muted">O8.&nbsp;</span>
        <span>Chat message</span>
      </Title>
      <div className="mb-3 d-flex">
        <BUIChatBubble
          className="me-3"
          direction="bottom-left"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="primary"
          direction="bottom-left"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="accent"
          direction="bottom-left"
          children="Chat Message"
        />
      </div>
      <div className="mb-3 d-flex">
        <BUIChatBubble
          className="me-3"
          direction="bottom-right"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="primary"
          direction="bottom-right"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="accent"
          direction="bottom-right"
          children="Chat Message"
        />
      </div>
      <div className="mb-3 d-flex">
        <BUIChatBubble
          className="me-3"
          direction="top-left"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="primary"
          direction="top-left"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="accent"
          direction="top-left"
          children="Chat Message"
        />
      </div>
      <div className="mb-3 d-flex">
        <BUIChatBubble
          className="me-3"
          direction="top-right"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="primary"
          direction="top-right"
          children="Chat Message"
        />
        <BUIChatBubble
          className="me-3"
          variant="accent"
          direction="top-right"
          children="Chat Message"
        />
      </div>
    </>
  );
};

export default Chat;
