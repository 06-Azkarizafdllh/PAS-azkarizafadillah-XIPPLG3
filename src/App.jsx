import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh"
      }}
    >
      <Navbar/>

      <div style={{ padding: "20px" }}>
        <h1>Daftar User</h1>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search user......"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
          }}
        />

        <button onClick={focusInput}>Focus Search</button>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {filterUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;