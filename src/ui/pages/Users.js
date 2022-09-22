import ErrorMessageRendered from "../components/ErrorMessageRendered/ErrorMessageRendered";

export default function Users({ user }) {
  return (
    <div>
      {user?.role === "superAdmin" ? (
        <h1>Users!</h1>
      ) : (
        <>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">Role: {user?.role}</span>
          </ErrorMessageRendered>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">
              You don't have permissions to manage users
            </span>
          </ErrorMessageRendered>
        </>
      )}
    </div>
  );
}
