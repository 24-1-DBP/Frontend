import { Routes, Route } from "react-router-dom";
import Entry from "./pages/Entry";
import BookDetailPage from "./pages/Book-detail";
function App() {
  return (
    <Routes>
      <Route path="" element={<Entry />}></Route>
      <Route path="book">
        <Route path=":id" element={<BookDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
