import FriendListItem from "../FriendListItem/FriendListItem.jsx"

export default function FriendList({ friends }) {
    <ul>
        {friends.map((friend) => {
            return <li key={friend.id}>
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            </li>
        })}
    </ul>
}