import { randomUUID } from "crypto";

export interface UserProps {
	username: string;
	password: string;
}

export class User {
	private _id: string;
	private props: UserProps;

	constructor(props: UserProps, id?: string) {
		this._id = id ?? randomUUID();
		this.props = props;
	}

	public get id() {
		return this._id;
	}

	public get username() {
		return this.props.username;
	}

	public set username(username: string) {
		this.props.username = username;
	}

	public get password() {
		return this.props.password;
	}

	public set password(password: string) {
		this.props.password = password;
	}
}
