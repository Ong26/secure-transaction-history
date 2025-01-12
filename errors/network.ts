import { Action, BaseError, DefaultAction } from "./index";

const DefaultNetworkAction: Action = {
	refetch: true,
	redirectPath: "",
	actionText: "Retry",
};
export class NetworkError extends BaseError {
	constructor(action: Action) {
		const mergedAction = { ...DefaultNetworkAction, ...action };
		super("Network Error", "Please check your internet connection and try again", mergedAction);
	}
}

export class UnauthenticatedError extends BaseError {
	constructor(action: Action) {
		super("Unauthenticated", "You are not authenticated", action);
	}
}

export class ForbiddenError extends BaseError {
	constructor(action: Action = DefaultAction) {
		super("Forbidden", "You are not authorized to access this resource", action);
	}
}

export class NotFoundError extends BaseError {
	constructor(action: Action = DefaultAction) {
		super("Not Found", "The resource you are looking for does not exist", action);
	}
}
