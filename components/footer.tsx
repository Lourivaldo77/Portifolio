export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-muted-foreground text-sm font-mono">
          Desenvolvido com <span className="text-red-500 animate-pulse">❤</span> por{" "}
          <span className="text-primary font-bold">Lourivaldo</span>
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
