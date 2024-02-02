import { CurrentUser } from './CurrentUser';
import { UsersObjectType } from './HW2';

export type AdressType = {
	street: string
	city: string
}

export type FriendsType = {
	id: number
	name: string
	age: number
	address: AdressType
}

type UserList2PropsType = {
	users: {
		myFriends: FriendsType[]
	}

	filterUsers: () => void
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => props.filterUsers()}>SHOW ME FRIENDS FROM LA</button>

			<ul>
				{props.users.myFriends.map(el => <li key={el.id}> {el.age} {el.address.city}{el.address.street}
				
				<CurrentUser user = {el}/>
				</li>)}
			</ul>
			
		</div>
	);
};
