import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="name">Upload CSV</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Database Name</label>
          <input type="text" placeholder="CSV File Name" />
        </div>
        <div className="newUserItem">
          <label>Upload File</label>
          <input type="file" id="file" />
        </div>
        <div className="newUserItem">
          <label>Detail Field 1</label>
          <input type="text" placeholder="Detail Field 1" />
        </div>
        <div className="newUserItem">
          <label>Detail Field 2</label>
          <input type="text" placeholder="Detail Field 2" />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        <div className="newUserItem">
          <label>Select File Type</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="company">Executive</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="company">Company</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
