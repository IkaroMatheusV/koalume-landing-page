const brlFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

/** Formata um valor inteiro em reais, sem centavos (ex.: "R$ 297"). */
export function formatBRL(value: number) {
  return brlFormatter.format(value);
}

/** Converte "4.9" em "4,9". */
export function formatRating(value: number) {
  return value.toFixed(1).replace(".", ",");
}

/** Iniciais de um nome, no máximo duas letras. */
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}
