import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { INav } from "@/interface/INav";
function Nav(props: INav) {
  return (
    <Tabs
      defaultValue={props.elements[0].name}
      className="w-full fixed bottom-0"
    >
      {props.elements.map((element) => {
        return (
          <TabsContent
            key={element.name}
            value={element.name}
            className="h-screen"
          >
            {element.page()}
          </TabsContent>
        );
      })}
      <TabsList className="px-3 py-8 w-full gap-3">
        {props.elements.map((element) => {
          return (
            <TabsTrigger
              key={element.name}
              value={element.name}
              className="flex flex-col w-1/3"
            >
              {element.svg}
              {element.name}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

export default Nav;
