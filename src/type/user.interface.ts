interface User {
  id: string;
  name: string;
  part: string;
  profileBackgroundHex: string;
  profileTextHex: string;
}

interface MentionUser extends User {
  display: string;
}
