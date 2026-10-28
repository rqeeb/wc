export interface Message {
  username: string;
  text: string;
  timestamp: Date;
}

export interface MessageListProps {
  messages: Message[];
}

export interface MessageInputProps {
  onSend: (username: string, text: string) => void;
}