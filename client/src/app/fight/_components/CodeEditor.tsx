"use client";

import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "./constants";
import { useClerk } from "@clerk/clerk-react";

const CodeEditor = () => {
  // Remaining: reset, fullscreen

  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const { loaded } = useClerk();

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]);
  };

  const onMount = (editor: any) => {
    editor.focus();
  };

  return (
    <div className="h-full">
      <LanguageSelector language={language} onSelect={onSelect} />
      <div className="h-[calc(100%-40px)]">
        {loaded ? (
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            theme="vs-dark"
            language={language}
            value={value || ""}
            onMount={onMount}
            onChange={(value) => setValue(value || "")}
          />
        ) : (
          <div className="h-full flex justify-center items-center">
            Loading Editor...
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
