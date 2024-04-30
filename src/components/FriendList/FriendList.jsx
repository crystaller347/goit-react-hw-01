import FriendListItem from "../FriendListItem/FriendListItem.jsx"

export default function FriendList({ friends }) {
    <ul>
        {friends.map((friend) => {
            return <li key={friend.id}>
                <FriendListItem friend={friend} />
            </li>
        })}
    </ul>
}