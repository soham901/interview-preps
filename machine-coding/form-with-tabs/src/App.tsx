import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Layout } from "./components/site/layout";

const config = [
  {
    title: "personal",
    fields: [
      {
        type: "text",
        key: "name",
      },
      {
        type: "email",
        key: "email",
      },
      {
        type: "number",
        key: "age",
      },
    ],
  },
  {
    title: "education",
    fields: [
      {
        type: "text",
        key: "degree",
      },
    ],
  },
  {
    title: "technical",
    fields: [
      {
        type: "text",
        key: "degree",
      },
    ],
  },
];

const App = () => {
  const [curTab, setCurTab] = useState<number>(0);

  const isLastTab = curTab === config.length - 1;

  const handleNextClick = () =>
    curTab === config.length - 1 ? curTab : setCurTab(curTab + 1);

  const handlePrevClick = () => (curTab === 0 ? 0 : setCurTab(curTab - 1));

  return (
    <Layout className="flex flex-col gap-4 max-w-lg mx-auto mt-12">
      {/* TABS */}
      <div className="flex gap-2">
        {config.map((tab, idx) => (
          <Button
            variant={curTab === idx ? "default" : "outline"}
            onClick={() => setCurTab(idx)}
            className="capitalize"
          >
            {tab.title}
          </Button>
        ))}
      </div>

      {/* FORM */}
      {config[curTab].fields.map((f) => {
        const placeholder = `Enter your ${f.key}`;
        switch (f.type) {
          case "text":
            return (
              <Input
                placeholder={placeholder}
                name={f.key}
                id={f.key}
                type="text"
              />
            );
          case "email":
            return (
              <Input
                placeholder={placeholder}
                name={f.key}
                id={f.key}
                type="email"
              />
            );
          case "number":
            return (
              <Input
                placeholder={placeholder}
                name={f.key}
                id={f.key}
                type="number"
              />
            );
        }
      })}

      {/* SUBMIT BUTTON AND NEXT BUTTON */}

      <div className="flex gap-2">
        {curTab > 0 && (
          <Button
            className="w-full"
            variant="secondary"
            onClick={handlePrevClick}
          >
            Prev
          </Button>
        )}
        {isLastTab ? (
          <Button className="w-full">Submit</Button>
        ) : (
          <Button
            className="w-full"
            variant="secondary"
            onClick={handleNextClick}
          >
            Next
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default App;
