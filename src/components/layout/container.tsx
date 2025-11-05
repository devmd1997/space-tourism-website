interface ContainerLayoutProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  index: number;
}

export default function ContainerLayout(props: ContainerLayoutProps) {
  return (
    <section className="container-layout">
      <div className="container-title">
        <h2>{`0${props.index}`}</h2>
        <h1>{props.title}</h1>
      </div>
      {props.children}
    </section>
  );
}
