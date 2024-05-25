function Book(book: IBook) {
  return (
    <div className="w-1/5 h-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="absolute w-8 h-8 rounded-md top-15 m-1 bg-black opacity-80 flex justify-center items-center text-white text-xs font-bold">
          {book.rank}
        </div>
        <img className="w-full h-80 object-fill" src={book.img} />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
          <div className="flex items-baseline mt-2">
            <span className="bg-yellow-400 text-gray-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              {book.year}
            </span>
            <span className="ml-2 text-gray-600 text-xs">{book.author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
