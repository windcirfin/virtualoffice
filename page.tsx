export default function CityPage({ params }: { params: { city: string } }) { 
  return (
    <main className='pt-24 min-h-screen text-center'>
      <h1>Virtual Office in {params.city}</h1>
    </main>
  );
}
