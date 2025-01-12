import { LinkProps } from "expo-router";
export type CurrentPath = LinkProps["href"] | "";

export type Action = {
	refetch?: boolean;
	redirectPath?: CurrentPath;
	actionText?: string;
};
export const DefaultAction: Action = {
	refetch: false,
	redirectPath: "",
	actionText: "Retry",
};

export class BaseError extends Error {
	private _title: string = "Error";
	private _description: string = "Please try again";
	private _action: Action = DefaultAction;
	constructor(title: string = "Error", description: string = "Please try again", action: Action = DefaultAction) {
		super(description);
		this._title = title;
		this._description = description;
		this._action = action;
	}

	get title() {
		return this._title;
	}

	get description() {
		return this._description;
	}

	get action() {
		return this._action;
	}
}
