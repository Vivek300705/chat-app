const RenderMessage = ({ el }) => {
    switch (el.type) {
      case "text": return <TxtMsg el={el} />;
      case "img": return <ImgMsg el={el} />;
      case "doc": return <DocMsg el={el} />;
      case "reply": return <ReplyMsg el={el} />;
      case "link": return <LinkMsg el={el} />;
      default: return null;
    }
  };
  