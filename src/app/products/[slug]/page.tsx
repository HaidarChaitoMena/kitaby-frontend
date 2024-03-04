type props = {
  params: { slug: string };
};

export default function Products({ params }: props) {
  return <>{params.slug}</>;
}
