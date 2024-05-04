import { Button } from '@mantine/core';
import './minionCard.scss'; // Import SCSS styles

interface UserProps {
  name: string;
  email: string;
  imageUrl?: string; // Optional image URL
}

const MinionCard:React.FC<UserProps> = ({ name, email, imageUrl }: UserProps) => (
  <>
  <div className="minion-card">
    <div className="minion-image">
    <img src={imageUrl || 'default-user-image.png'} alt="User profile" />
    </div>
    <div className="minion-info">
      <p>{name}</p>
      <p className="minionemail">{email}</p>
      <Button className="minionbtn">Info</Button>
    </div>
  </div>
  </>
);

export default MinionCard;
