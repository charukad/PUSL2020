import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import State from "@/app/components/State";
export default function Home() {
  const isEmpty = true;
  if (isEmpty) {
    return (
      <ClientOnly>
        <State showReset />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <Container>
        <div
          className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
          <div>My listing</div>
        </div>
      </Container>
    </ClientOnly>
  );
}
