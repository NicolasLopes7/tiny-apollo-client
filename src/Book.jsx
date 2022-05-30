export const Book = ({ book }) => {
  return (
    <li>
      {book.title} | {book.author}
    </li>
  );
};
