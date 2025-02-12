import { TLoading } from "../../../types/shared";
type LoadingProps = {
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
}
const Loading = ({ status, error,children }: LoadingProps) => {
    if (status === "pending") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
return <>{children}</>;
};

export default Loading;
