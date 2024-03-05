import { lusitana } from '@/app/ui/fonts';
import { Produits } from '@/app/lib/definitions';

export default async function Produits({
    produits,
  }: {
    produits: Produits[];
  }) {
    return (
      <div className="flex w-full flex-col md:col-span-4">
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Produits récent
        </h2>
        
        <div className="rounded-xl bg-gray-50 p-4">
            {produits.map((produit) => (
                <div>
                    <p>{produit.name}</p>
                </div>
            ))}
        </div>
      </div>
    );
  }