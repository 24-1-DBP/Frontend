import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
function Book() {
  return (
    <Card className="flex flex-col gap-3 rounded-sm">
      <CardTitle>
        <img
          src="https://image.aladin.co.kr/product/33953/77/cover200/k332930438_1.jpg"
          className="w-full h-1/6 rounded-sm"
        />
      </CardTitle>
      <CardContent className="p-1 flex justify-start items-center">
        <h1 className="text-sm">Some Book Title</h1>
      </CardContent>
    </Card>
  );
}

export default Book;
