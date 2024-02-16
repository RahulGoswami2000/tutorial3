import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Retrieve form data from URL parameters
  const firstName = params.get("first_name");
  const lastName = params.get("last_name");
  const email = params.get("email");
  return (
    <>
      <div>
        <h2>Profile</h2>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
      </div>
    </>
  );
}
export default Profile;
