export const BlockQuote = ({ message }: { message: string }) => {
  return (
    <div className="not-prose relative mb-4 bg-background">
      <div className="absolute inset-0 bg-brand" style={{ opacity: 0.1 }} />
      <div className="border-l-[3px] border-brand p-4">
        <p className="text-pretty text-xs text-primary xs:text-sm">{message}</p>
      </div>
    </div>
  );
};
