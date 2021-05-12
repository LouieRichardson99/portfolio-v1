export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="mt-10 mb-5 font-body text-sm">
      <p className="text-center">© {year}, Louie Richardson</p>
    </footer>
  );
}
