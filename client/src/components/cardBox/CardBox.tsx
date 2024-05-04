/* eslint-disable max-len */
import './cardBox.scss';
import MinionCard from '@/components/minionCard/MinionCard';
import { userData } from '@/lib/data';

function CardBox() {
  const users = userData.map((user) => ({ ...user }));

  return (
    <>
        <div className="cardmenu">
          <div className="cards">
            {users.map((user) => (
              <MinionCard key={user.email} name={user.name} email={user.email} imageUrl={user.imageUrl} />
            ))}
          </div>
        </div>
    </>
  );
}

export default CardBox;
