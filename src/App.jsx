import { useQuery } from '@apollo/client';
import { GET_BOOKS_QUERY } from './get-books';
import { Book } from './Book';

function App() {
  const { data, loading } = useQuery(GET_BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>Books</h3>
      <ul>
        {data?.books?.map((book) => (
          <Book key={book.title} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default App;
