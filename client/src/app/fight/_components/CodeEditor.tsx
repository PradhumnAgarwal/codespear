"use client";

import { useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { Editor } from "@monaco-editor/react";
import { CODE_SNIPPETS } from "./constants";
import { useClerk } from "@clerk/clerk-react";

type CodeEditorProps = {
  code: string;
  setCode: (code: string) => void;
  language: string;
  setLanguage: (language: string) => void;
};

const CodeEditor = ({
  code,
  setCode,
  language,
  setLanguage,
}: CodeEditorProps) => {
  // Remaining: reset, fullscreen

  const { loaded } = useClerk();

  const onSelect = (language: string) => {
    setLanguage(language);
    setCode(CODE_SNIPPETS[language as keyof typeof CODE_SNIPPETS]);
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
            value={code || ""}
            onMount={onMount}
            onChange={(value) => setCode(value || "")}
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
