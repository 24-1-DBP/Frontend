import BookList from "@/components/BookList";
import { ScrollArea } from "@/components/ui/scroll-area";
import CollectionList from "@/components/CollectionList";

function Home() {
  return (
    <>
      <ScrollArea className="h-dvh pt-36">
        <CollectionList />
        <BookList />
        <BookList />
        <BookList />
        <BookList />
      </ScrollArea>
    </>
  );
}
export default Home;
