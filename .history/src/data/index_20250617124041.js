import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const ChatList = Array.from({ length: 8 }, (_, index) => {
  const firstName = faker.name.firstName();
  return {
    id: index,
    img: `https://ui-avatars.com/api/?name=${firstName}&background=random`,
    name: firstName,
    msg: faker.music.songName(),
    time: faker.date
      .recent()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    unread: faker.datatype.number({ min: 0, max: 5 }),
    pinned: index < 2, // first two are pinned
    online: faker.datatype.boolean(),
  };
});

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstract image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: "https://picsum.photos/640/480?random=1", // better URL than abstract()
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    doc: {
      name: "AbstractImage.png",
      size: "1.4MB",
    },
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    message: "Check out this cool cat photo!",
    preview: {
      title: "Cats Gallery",
      description: "Amazing cat photo collection.",
image: "https://placekitten.com/640/480"

      link: "https://example.com/cats-gallery",
    },
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: {
      message: "Check out this cool cat photo!",
    },
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
};
