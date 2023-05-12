type CodeProps = {
  code: string;
};

/**
 * プログラムを表示する
 *
 * @see {@link CodeProps}
 */
export const Code = ({ code }: CodeProps) => {
  return (
    <div className="mockup-code">
      {code.split("\n").map((line) => (
        <pre key={`pre-${line}`} data-prefix="$">
          <code key={`code-${line}`}>{line}</code>
        </pre>
      ))}
    </div>
  );
};
