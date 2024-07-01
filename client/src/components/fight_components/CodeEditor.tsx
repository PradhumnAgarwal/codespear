"use client";

import { Editor } from "@monaco-editor/react";
import { useClerk } from "@clerk/clerk-react";

type CodeEditorProps = {
  code: string;
  setCode: (code: string) => void;
  language: string;
};

const CodeEditor = ({ code, setCode, language }: CodeEditorProps) => {
  const { loaded } = useClerk();

  const onMount = (editor: any) => {
    editor.focus();
  };

  return (
    <div className="h-full min-h-20">
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
  );
};

export default CodeEditor;
