import { Code } from "@/components/server/container";

type SnippetCardProps = {
  title: string;
  language: string;
  code: string;
  tags?: string[];
};

/**
 * 一覧画面でスニペットを表示する
 *
 * @todo tagsを表示
 */
const SnippetCard = ({ title, language, code, tags }: SnippetCardProps) => {
  return (
    <div className="card compact bg-base-100 shadow-xl break-inside-avoid-column">
      <h2 className="card-title px-4 pt-4">{title}</h2>
      <div className="card-body">
        <span className="badge-primary badge absolute z-50 self-end">
          {language}
        </span>
        <Code code={code} />
      </div>
    </div>
  );
};

export default SnippetCard;
