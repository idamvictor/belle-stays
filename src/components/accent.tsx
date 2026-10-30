// Renders heading copy with *starred* words in Cormorant italic, e.g.
// "Made to Feel *Like Home*". Write accents in src/content/home.ts.
export function Accent({ text }: { text: string }) {
  return text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i} className="font-heading font-normal italic">
        {part.slice(1, -1)}
      </em>
    ) : (
      part
    )
  )
}

// The same text without the accent markers, for alt text, aria labels and metadata.
export function plain(text: string) {
  return text.replaceAll("*", "")
}
