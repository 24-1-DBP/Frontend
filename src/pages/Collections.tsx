import {
  ICollectionRequest,
  ICollectionResponse,
} from "@/interface/ICollection";
import { IResponse } from "@/interface/IResponse";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BookTable } from "@/interface/IBook";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
const formSchema = z.object({
  collectionName: z.string().min(1),
  collectionDescription: z.string().min(1),
  books: z.number().array(),
});

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
function Collections() {
  const [collections, setCollections] = useState<ICollectionResponse[]>([]);
  const [books, setBooks] = useState<BookTable[]>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      collectionName: "",
      collectionDescription: "",
      books: [],
    },
  });
  const columns: ColumnDef<BookTable>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => {
        return (
          <img src={`${row.getValue("image")}`} className="w-[50px] h-[50px]" />
        );
      },
    },
    {
      accessorKey: "price",
      header: "Price",
    },
  ];

  useEffect(() => {
    fetch(`/api/api/v1/collection`, { method: "GET" })
      .then((response) => response.json())
      .then((data: IResponse<ICollectionResponse[]>) => {
        const { body } = data;
        setCollections(body);
      });
  }, []);
  useEffect(() => {
    fetch(`/api/api/v1/books/basic`, { method: "GET" })
      .then((response) => response.json())
      .then((data: IResponse<BookTable[]>) => {
        const { body } = data;
        console.log(body);
        setBooks(body);
      });
  }, []);
  function onSubmit(values: z.infer<typeof formSchema>) {
    const body: ICollectionRequest = {
      collection_name: values.collectionName,
      description: values.collectionDescription,
      books: [1, 2],
      userID: 1,
    };
    console.log(JSON.stringify(body));
    fetch(`/api/api/v1/collection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data: IResponse<ICollectionResponse>) => {
        const { body } = data;
        setCollections((prevItem) => [...prevItem, body]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="w-full h-full p-5 pt-36">
      {collections?.map((element) => {
        return (
          <div className="flex flex-col gap-3 pt-5" key={element.collection_id}>
            <h1 className="text-xl font-bold">{element.collection_name}</h1>
            <p className="text-sm">{element.description}</p>
            <div className="flex gap-1 text-sm">
              by <p className="font-bold">{element.username}</p>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="fixed bottom-20 right-6">
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-300 text-gray-50 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:focus:ring-gray-300">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>컬렉션 추가하기</DialogTitle>
              <DialogDescription>
                책을 선택하여 컬렉션을 생성합니다.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <ScrollArea className="h-[400px] w-full p-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                  >
                    <FormField
                      control={form.control}
                      name="collectionName"
                      render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel htmlFor="name" className="text-right">
                            컬렉션 이름
                          </FormLabel>
                          <FormControl>
                            <Input className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="collectionDescription"
                      render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                          <FormLabel
                            htmlFor="description"
                            className="text-right"
                          >
                            컬렉션 설명
                          </FormLabel>
                          <FormControl>
                            <Input className="col-span-3" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {books != undefined ? (
                      <DataTable columns={columns} data={books}></DataTable>
                    ) : (
                      <></>
                    )}
                    <DialogFooter>
                      <Button type="submit">Save collection</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </ScrollArea>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Collections;
