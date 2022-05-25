import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new note.</Link> Or if you require support visit our Support Server https://discord.gg/Cv3ANzkZFX and raise a support ticket     
    </p>
  );
}
