import { ErrorFallback } from "./fallback";
type Props = {
	refetch: () => void;
	children: React.ReactNode;
	error: Error | null;
};
const ErrorBoundaryComponent = ({ children, refetch, error }: Props) => {
	if (!error) return children;
	else return <ErrorFallback error={error} refetch={refetch} />;
};
export default ErrorBoundaryComponent;
