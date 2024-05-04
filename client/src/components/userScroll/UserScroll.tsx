import './userScroll.scss';
import UserCard from '../userCard/userCard';
import { userData } from '@/lib/data';

function UserScroll() {
    const users = userData.map((user) => ({ ...user }));

    return (
    <div className="container">
        <div>
            {users.map((user) => (
            <UserCard key={user.email} {...user} />
            ))}
        </div>
    </div>
);
}
export default UserScroll;
