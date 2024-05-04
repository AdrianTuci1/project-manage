import React from 'react';
import './userCard.scss'; // Import SCSS styles (replace with the actual file path)
import { Button } from '@mantine/core';

interface UserProps {
  name: string;
  email: string;
  imageUrl?: string; // Optional image URL
}

const UserCard: React.FC<UserProps> = ({ name, email, imageUrl }: UserProps) => (
    <>
    <div className="all">
    <div className="user-card">
      <div className="user-card-image">
        {imageUrl && <img src={imageUrl} alt="User profile" />}
      </div>
      <div className="user-card-info">
        <p>{name}</p>
        <p className="email">{email}</p>
      </div>
      <Button className="dollar-button">$</Button>
    </div>
    </div>
    </>
  );

export default UserCard;
