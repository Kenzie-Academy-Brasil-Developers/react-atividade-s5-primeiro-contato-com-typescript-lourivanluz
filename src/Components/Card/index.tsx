interface CardProps {
  item: {
    nome: string;
    age: number;
    hobby: string;
  };
}

export const Card = ({ item: { nome, age, hobby } }: CardProps) => {
  return (
    <div>
      <h1>{nome}</h1>
      <p>{hobby}</p>
      <p>{age}</p>
    </div>
  );
};
