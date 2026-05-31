# React + Vite

Aplikasi Direktori Pengguna yang berbasis web yang dibangun mennggunakan "Reac.js". Aplikasi ini mengambil data melalui API publik "JSONplaceholder" dan menampilkan informasi penting seperti nama, email, dan username menggunakan berbagai dasar React Hooks.

# Fitur 
-Fetch Data Real-time: Mengambil data secara dinamis dari API eksternal.
-Search Filter sederhana: Membantu mencari pengguna berdasarkan nama secara real-time.
-Auto-Focus Input: Kolom pencarian secara otomatis aktif saat aplikasi pertama kali dimuat.
-Interaksi Like dan Follow: Simulasi interaktif personal untuk menyukai kartu pengguna atau mengikuti pengguna tersebut.

# React Hooks
-useState : digunakan di Context (useContext.jsx) untuk menyimpan data dari API, dan di Component (useCard.jsx) untuk interaksi like dan follow.
-useEffect : Mengambil data dari fetch API.
-useRef : diiterapkan pada Component (Navbar.jsx) di elemen input dan memberikan akseskepada focus() saat kita masukkan input.
-useContext : untuk membagi data yang dapat di akses langsung oleh Navbar dan App tanpa harus di pindahkan secara manual. 

